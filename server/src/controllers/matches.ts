import { Citi } from "../global";
import { Request, Response } from "express";


class MatchController {
  constructor(private readonly citi = new Citi("Matches")) {}

  create = async (request: Request, response: Response) => {
    const { game, date, hour, contactPlatform, description, link, maxParticipants } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(game, date, hour, contactPlatform, description, link, maxParticipants);
    if (isAnyUndefined) return response.status(400).send();

    const newMatch = { game, date, hour, contactPlatform, description, link, maxParticipants, numParticipants: request.body.numParticipants, participants: request.body.participants };
    const { httpStatus, message } = await this.citi.insertIntoDatabase(newMatch);

    return response.status(httpStatus).send({ message });
  };

  get = async (request: Request, response: Response) => {
    const { httpStatus, values } = await this.citi.getAll();

    return response.status(httpStatus).send(values);
  };

  getById = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { httpStatus, value } = await this.citi.findById(id);

    return response.status(httpStatus).send(value);
  };

  delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });
  };

  update = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { teamA, teamB, date, score } = request.body;

    const updatedValues = { teamA, teamB, date, score };

    const { httpStatus, messageFromUpdate } = await this.citi.updateValue(id, updatedValues);

    return response.status(httpStatus).send({ messageFromUpdate });
  };

  readByUsername = async (request: Request, response: Response) => {
    const { username } = request.params;

    const { httpStatus, values } = await this.citi.getAll();

    return response.status(httpStatus).send(values);
  };
}

export default new MatchController();