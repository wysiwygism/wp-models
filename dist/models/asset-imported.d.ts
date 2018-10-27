import { Document, Model } from "mongoose";
import { IAsset } from "../interfaces/asset";
export interface IAssetImportedModel extends IAsset, Document {
}
export declare const AssetImported: Model<IAssetImportedModel>;
