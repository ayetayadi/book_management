import Joi from "joi";

export const eventValidator = Joi.object({
  title: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().greater(Joi.ref("startDate")).required(),
});
