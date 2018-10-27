import { Document, Model } from "mongoose";
import { IWebsite } from "../interfaces/website";
export interface IWebsiteModel extends IWebsite, Document {
}
export declare const Website: Model<IWebsiteModel>;
