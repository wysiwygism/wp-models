import { Document, Model } from "mongoose";
import { ITranzilla } from "../interfaces/tranzilla";
export interface ITranzillaModel extends ITranzilla, Document {
}
export declare const Tranzilla: Model<ITranzillaModel>;
