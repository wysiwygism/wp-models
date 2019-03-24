import {Document, Schema, Model, model} from "mongoose";
import {IWebsiteOptimization} from "../interfaces/website-optimization";


export interface IWebsiteOptimizationModel extends IWebsiteOptimization, Document {

}

let statusHistorySchema = new Schema({
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {_id: false});

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
        required: true
    },
    statusHistory: {
        type: [statusHistorySchema],
        required: false
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
        required: true
    },
    statusHistory: {
        type: [statusHistorySchema],
        required: false
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
        required: true
    },
    statusHistory: {
        type: [statusHistorySchema],
        required: false
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
        required: true
    },
    statusHistory: {
        type: [statusHistorySchema],
        required: false
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
    originTestStatus: {
        type: websiteOptimizationTestStatusSchema,
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
    status: {
        type: String,
        required: true
    }
});

export const Website: Model<IWebsiteOptimizationModel> = model<IWebsiteOptimizationModel>("WebsiteOptimization", schema);