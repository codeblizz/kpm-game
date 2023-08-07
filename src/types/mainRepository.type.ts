export interface MainRepositoryInterface {
  get(params?: unknown): Promise<unknown>;
  post(params?: unknown): Promise<unknown>;
  create(payload: unknown): Promise<unknown>;
  update(id: number | string, params?: unknown): Promise<unknown>;
  delete(params?: unknown): Promise<unknown>;
}
