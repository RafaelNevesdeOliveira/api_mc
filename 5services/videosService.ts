import { VideosRepository } from './../2repository/videosRepository';
import { Videos } from './../1models/videos';
import { Result } from "../4infra/result";
import { IVideosService } from '../3contracts/iVideosService';


export class VideosService implements IVideosService {

  async get(_id: string): Promise<Videos> {
    let result = await VideosRepository.findById(_id);
    return result;
  }

  async getAll(page: number, qtd: number): Promise<Result<Videos>> {
    
    let result = new Result<Videos>();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await VideosRepository.count({});
    result.Data = await VideosRepository.find({})
      .skip(page * qtd - qtd)
      .limit(qtd);
    return result;
  }
}
