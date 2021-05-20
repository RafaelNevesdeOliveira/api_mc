import express, { Application} from "express";
import database from "./4infra/db";
import "reflect-metadata";
import './shared/container';

import newsRouter from "./router/newsRouter"
import videosRouter from "./router/videosRouter"
import galeriaRouter from "./router/galeriaRouter"

class StartUp {
  public app: Application;
  private _db: database = new database();

  constructor() {
    this.app = express();
    this._db.createConnection(); // infra/db
    this.routes();
  }
  routes() {
    //Health Check
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.2" });
    });
    
    this.app.use("/", newsRouter)
    this.app.use("/", videosRouter)
    this.app.use("/", galeriaRouter)

  }
}

export default new StartUp();
