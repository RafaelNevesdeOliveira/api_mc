import mongoose from 'mongoose';
import {Galeria} from '../1models/galeria'
import {Fotos} from '../1models/fotos'

const GaleriaSchema = new mongoose.Schema<Galeria>({
    titulo: { String },
    texto: { String },
    dataPublicacao: { Date },
    fotos:  [Array<Fotos>()],
    ativo: { Boolean }
})

export const GaleriaRepository = mongoose.model<Galeria>("galeria", GaleriaSchema);
