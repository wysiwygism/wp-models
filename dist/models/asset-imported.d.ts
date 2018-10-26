/// <reference types="mongoose" />
import { Document, Model } from "mongoose";
import { IAsset } from "wi-models";
export interface IAssetImportedModel extends IAsset, Document {
}
export declare const AssetImported: Model<IAssetImportedModel>;
