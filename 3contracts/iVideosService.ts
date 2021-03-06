import { IService } from './iService';
import {Videos} from '../1models/videos'

 /**
  * Contrato IVideosService
  * @summary esse contrato implementa a interface IService passando a model de Videos
  */
export interface IVideosService extends IService<Videos>{}