import {Result} from "../4infra/result";

/**
 * Interface genérica para retorno de pesquisas
 */
export interface IService<T>{
    get(id: string): Promise<T>;

    getAll(page: number, qtd: number): Promise<Result<T>>;
}