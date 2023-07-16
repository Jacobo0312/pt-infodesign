import axios, {AxiosResponse} from 'axios';
import {Cliente} from '../models/cliente.interface';
import {Tramos} from '../models/tramos.interface';
import {Perdidas} from '../models/perdidas.interface';
import {Request} from '../models/request.interface';

const instance = axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) =>
    instance.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: object) =>
    instance.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => instance.delete<T>(url).then(responseBody),
};

export const Api = {
  getTramosData: (request: Request): Promise<Tramos[]> =>
    requests.post('tramos', request),

  getClientesData: (request: Request): Promise<Cliente[]> =>
    requests.post('cliente', request),

  getPeoresTramosCliente: (request: Request): Promise<Perdidas[]> =>
    requests.post('tramos-cliente', request),
};
