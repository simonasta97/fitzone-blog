import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/programs';

export const getAll = () => request.get(baseUrl);
export const getOne = (programId) => request.get(`${baseUrl}/${programId}`);
export const create = (programData) => request.post(baseUrl, programData);
export const edit = (programId, programData) => request.put(`${baseUrl}/${programId}`, programData);
export const remove = (programId) => request.del(`${baseUrl}/${programId}`);