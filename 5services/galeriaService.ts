import { IGaleriaService } from './../3contracts/iGaleriaService';
import { Galeria } from './../1models/galeria';
import { GaleriaRepository } from './../2repository/galeriaRepository';
import { Result } from "../4infra/result";


export class GaleriaService implements IGaleriaService {

  async get(_id: string): Promise<Galeria> {
    let result = await GaleriaRepository.findById(_id);
    return result;
  }

  async getAll(page: number, qtd: number): Promise<Result<Galeria>> {
    
    let result = new Result<Galeria>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await GaleriaRepository.count({});
    result.Data = await GaleriaRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
    return result;
  }
}
