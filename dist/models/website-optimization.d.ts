import { Document, Model } from "mongoose";
import { IWebsiteOptimization } from "../interfaces/website-optimization";
export interface IWebsiteOptimizationModel extends IWebsiteOptimization, Document {
}
export declare const WebsiteOptimization: Model<IWebsiteOptimizationModel>;
