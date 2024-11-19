import { Joi, Segments } from 'celebrate';

const validSchema = {
  create: {
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().max(250).required(),
      description: Joi.string().required(),
      users: Joi.string().hex().length(24).required(),
      comments: Joi.array().items(Joi.object()).optional().allow('')
    }),
  },
}

export default validSchema;



