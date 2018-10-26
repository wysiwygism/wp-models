/// <reference types="mongoose" />
import { Document, Model } from "mongoose";
import { IWebsite } from "wi-models";
export interface IWebsiteModel extends IWebsite, Document {
}
export declare const Website: Model<IWebsiteModel>;
