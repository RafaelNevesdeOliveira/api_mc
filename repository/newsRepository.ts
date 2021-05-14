import { NewsSchema } from './../models/newsSchema';
import mongoose from 'mongoose';

export const NewsRepository = mongoose.model('news', NewsSchema)