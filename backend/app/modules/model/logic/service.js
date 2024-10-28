import ThisDaoMongo from "../data/dao.mongo.js";
import AppError from "../../../config/AppError.js";
import { MongoService } from "../../../pkg/customs/service/service.mongoose.js";

export default class Service extends MongoService {
  constructor() {
    super(new ThisDaoMongo);
  }
}