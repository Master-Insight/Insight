import { Router } from "express";
import Controller from "./controller.js";
import { clients, handleAuth, users } from "../../../middleware/handlePolicies.js";
import { uploader } from "../../../middleware/multer.js";
import validSchema from "./validation.js";
import { celebrate } from "celebrate";

const router = Router();
const controller = new Controller()

// http://localhost:8080/v1/users/

// sesions
router
.post   ('/register',       celebrate(validSchema.register), controller.register)
.post   ('/login',          celebrate(validSchema.login),    controller.login)
.post   ('/userrecovery',   celebrate(validSchema.email),    controller.userRecovery)
.put    ('/userrecovery',   handleAuth(users), celebrate(validSchema.updatePassword), controller.userRecoveryPassword)

// user
router
.get    ('/current',        handleAuth(users),   controller.getUserSession)
.put    ('/current/update', handleAuth(users),   controller.currentUpdate)
.put    ('/current/uploadphoto',  
  handleAuth(users), 
  uploader('profiles', 5, ['image/jpeg', 'image/png']).single('photo'),
  controller.uploadPhoto)
  
// Admins
.get    ('/',               handleAuth(['ADMIN']), controller.get)

export default router