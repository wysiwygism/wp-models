import { Document, Model } from "mongoose";
import { IAsset } from "../interfaces/asset";
export interface IAssetModel extends IAsset, Document {
}
export declare const Asset: Model<IAssetModel>;
