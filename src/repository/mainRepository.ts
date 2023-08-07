import axiosClient from '@/helpers/axios/client';
import { MainRepositoryInterface } from '@/types/mainRepository.type';

class MainRepository<T> implements MainRepositoryInterface {
  constructor(public resource: String) {}

  get(payload: any): Promise<T[]> {
    return axiosClient.get(`/api/${this.resource}`, { params: { ...payload }});
  }

  post(payload: unknown): Promise<T[]> {
    return axiosClient.post(`/api/${this.resource}`, payload);
  }

  create(payload: unknown): Promise<T> {
    return axiosClient.post(`/api/${this.resource}`, payload);
  }

  update(id: number | string, payload: unknown): Promise<T> {
    return axiosClient.put(`/api/${this.resource}/${id}`, payload);
  }
  
  delete(id?:number | string): Promise<T> {
    return axiosClient.delete(`/api/${this.resource}/${id}`);
  }
}

export default MainRepository;
