/// <reference types="mongoose" />
import { Document, Model } from "mongoose";
import { IAsset } from "../interface/asset";
export interface IAssetModel extends IAsset, Document {
}
export declare const Asset: Model<IAssetModel>;
