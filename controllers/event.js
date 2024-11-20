import { eventValidator } from "../validators/eventValidator.js";

export const createEvent = async (req, res) => {
  const { error } = eventValidator.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  res
    .status(201)
    .json({ message: "Event created successfully", event: req.body });
};
