import axios, { AxiosPromise } from 'axios';

interface HasId {
  id: number;
}
export class Sync<T> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    // extract id
    const { id } = data;
    if (id) {
      // put
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // no user yet; post
      return axios.post(this.rootUrl, data);
    }
  }
}
