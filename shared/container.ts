import "reflect-metadata";
import {container} from 'tsyringe';

import { GaleriaService } from './../5services/galeriaService';
import { NewsService } from './../5services/newsService';
import { VideosService } from './../5services/videosService';

container.register(
    "INewsService",{
        useClass: NewsService
    }
);

container.register(
    "IVideosService",{
        useClass: VideosService
    }
);

container.register(
    "IGaleriaService",{
        useClass: GaleriaService
    }
);