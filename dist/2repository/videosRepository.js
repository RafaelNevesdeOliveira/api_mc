"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const VideosSchema = new mongoose_1.default.Schema({
    titulo: { String },
    texto: { String },
    imagem: { String },
    duracao: { String },
    link: { String },
    url: { String },
    dataPublicacao: { Date },
    tags: { String },
    ativo: { Boolean }
});
exports.VideosRepository = mongoose_1.default.model("videos", VideosSchema);
