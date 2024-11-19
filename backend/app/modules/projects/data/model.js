import { Schema, model} from 'mongoose'

const thisSchema = new Schema({
  // basic properties
  title:  { type: String,   required: true, maxLength: 250 },
  description: { type: String,   required: true },
  users:        [{ type: Schema.Types.ObjectId, ref: 'users', required: true }],
  comments:   [{ type: Schema.Types.ObjectId, ref: 'comments', required: true }],

  // aditional properties

  // data of conection
  created:     { type: Date,   default: Date.now,  immutable: true, },
  updated:     { type: Date,   default: Date.now,  },
  connection:  { type: Date,   default: Date.now,  },
}, {
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated'
  },
})

const dataModel = model('projects', thisSchema)

export default dataModel