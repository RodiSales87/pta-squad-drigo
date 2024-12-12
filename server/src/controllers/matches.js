import { Citi } from "../global";

class MatchController {
  constructor(private readonly citi = new Citi("Match")) {}

  create = async (request, response) => {
    const { game, date, hour, contactPlatform, description, link, maxParticipants } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(game, date, hour, contactPlatform, description, link, maxParticipants);
    if (isAnyUndefined) return response.status(400).send();

    const newMatch = { game, date, hour, contactPlatform, description, link, maxParticipants };
    const { httpStatus, message } = await this.citi.insertIntoDatabase(newMatch);

    return response.status(httpStatus).send({ message });
  };

  get = async (request, response) => {
    const { httpStatus, values } = await this.citi.getAll();

    return response.status(httpStatus).send(values);
  };

  getById = async (request, response) => {
    const { id } = request.params;

    const { httpStatus, value } = await this.citi.getValueById(id);

    return response.status(httpStatus).send(value);
  };

  delete = async (request, response) => {
    const { id } = request.params;

    const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });
  };

 update = async (request, response) => {
    const { id } = request.params;
    const { game, date, hour, contactPlatform, description, link, maxParticipants } = request.body;

    const updatedValues = { game, date, hour, contactPlatform, description, link, maxParticipants };

    const { httpStatus, messageFromUpdate } = await this.citi.updateValue(id, updatedValues);

    return response.status(httpStatus).send({ messageFromUpdate });
  };

  readByUsername = async (request, response) => {
    const { username } = request.params;

    const { httpStatus, values } = await this.citi.getValuesByField("username", username);

    return response.status(httpStatus).send(values);
  };
}

export default new MatchController();
