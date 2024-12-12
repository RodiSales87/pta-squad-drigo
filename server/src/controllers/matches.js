import { Citi } from "../global";

class MatchController {
  constructor(private readonly citi = new Citi("Match")) {}

  create = async (request, response) => {
    const { teamA, teamB, date, score } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(teamA, teamB, date, score);
    if (isAnyUndefined) return response.status(400).send();

    const newMatch = { teamA, teamB, date, score };
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
    const { teamA, teamB, date, score } = request.body;

    const updatedValues = { teamA, teamB, date, score };

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
