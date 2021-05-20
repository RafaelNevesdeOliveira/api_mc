"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./4infra/db"));
require("reflect-metadata");
require("./shared/container");
const newsRouter_1 = __importDefault(require("./router/newsRouter"));
const videosRouter_1 = __importDefault(require("./router/videosRouter"));
const galeriaRouter_1 = __importDefault(require("./router/galeriaRouter"));
class StartUp {
    constructor() {
        this._db = new db_1.default();
        this.app = express_1.default();
        this._db.createConnection(); // infra/db
        this.routes();
    }
    routes() {
        //Health Check
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.2" });
        });
        this.app.use("/", newsRouter_1.default);
        this.app.use("/", videosRouter_1.default);
        this.app.use("/", galeriaRouter_1.default);
    }
}
exports.default = new StartUp();
