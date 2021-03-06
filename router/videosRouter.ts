import { VideosController } from "./../6controller/videosController";
import "reflect-metadata";
import express, { Request, Response } from "express";
import { container } from "tsyringe";

const videosRouter = express();
const videos = container.resolve(VideosController);

//NEWS
videosRouter
  .route("/api/v1/videos/:page/:qtd")
  .get((req: Request, res: Response) => {
    return videos.get(req, res);
  });
videosRouter.route("/api/v1/videos/:id").get((req: Request, res: Response) => {
  return videos.getById(req, res);
});

export default videosRouter;
