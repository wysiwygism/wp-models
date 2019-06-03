import {Document, Schema, Model, model} from "mongoose";
import {IWebsiteOptimization} from "../interfaces/website-optimization";


export interface IWebsiteOptimizationModel extends IWebsiteOptimization, Document {

}

let websiteOptimizationTestStatusSchema = new Schema({
    testId: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: false
    },
    endDate: {
        type: Date,
        required: false
    },
    duration: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    isSuccess: {
        type: Boolean,
        required: true
    },
    isStopped: {
        type: Boolean,
        required: true
    }
}, {_id: false});

let websiteOptimizationImportStatusSchema = new Schema({
    importId: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: false
    },
    endDate: {
        type: Date,
        required: false
    },
    duration: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    isSuccess: {
        type: Boolean,
        required: true
    },
    isStopped: {
        type: Boolean,
        required: true
    }
}, {_id: false});

let websiteAssetOptimizationStatusSchema = new Schema({
    startDate: {
        type: Date,
        required: false
    },
    endDate: {
        type: Date,
        required: false
    },
    duration: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    isSuccess: {
        type: Boolean,
        required: true
    },
    isStopped: {
        type: Boolean,
        required: true
    }
}, {_id: false});

let websiteCdnInvalidationStatusSchema = new Schema({
    startDate: {
        type: Date,
        required: false
    },
    endDate: {
        type: Date,
        required: false
    },
    duration: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    isSuccess: {
        type: Boolean,
        required: true
    },
    isStopped: {
        type: Boolean,
        required: true
    }
}, {_id: false});

let schema = new Schema({
    userId: {
        type: String,
        required: true
    },
    websiteId: {
        type: String,
        required: true
    },
    importStatus: {
        type: websiteOptimizationImportStatusSchema,
        required: true
    },
    assetOptimizationStatus: {
        type: websiteAssetOptimizationStatusSchema,
        required: true
    },
    cdnInvalidationStatus: {
        type: websiteCdnInvalidationStatusSchema,
        required: true
    },
    interfaceTestStatus: {
        type: websiteOptimizationTestStatusSchema,
        required: true
    },
    startDate: {
        type: Date,
        required: false
    },
    endDate: {
        type: Date,
        required: false
    },
    duration: {
        type: Number,
        required: false
    },
    isRunning: {
        type: Boolean,
        required: true
    },
    isSuccess: {
        type: Boolean,
        required: true
    },
    isStopped: {
        type: Boolean,
        required: true
    },
    status: {
        type: String,
        required: false
    }
});

export const WebsiteOptimization: Model<IWebsiteOptimizationModel> = model<IWebsiteOptimizationModel>("WebsiteOptimization", schema);