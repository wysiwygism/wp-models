"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let websiteOptimizationTestStatusSchema = new mongoose_1.Schema({
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
    isSuccess: {
        type: Boolean,
        required: true
    },
    isStopped: {
        type: Boolean,
        required: true
    }
}, { _id: false });
let websiteOptimizationImportStatusSchema = new mongoose_1.Schema({
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
    isSuccess: {
        type: Boolean,
        required: true
    },
    isStopped: {
        type: Boolean,
        required: true
    }
}, { _id: false });
let websiteAssetOptimizationStatusSchema = new mongoose_1.Schema({
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
    isSuccess: {
        type: Boolean,
        required: true
    },
    isStopped: {
        type: Boolean,
        required: true
    }
}, { _id: false });
let websiteCdnInvalidationStatusSchema = new mongoose_1.Schema({
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
    isSuccess: {
        type: Boolean,
        required: true
    },
    isStopped: {
        type: Boolean,
        required: true
    }
}, { _id: false });
let schema = new mongoose_1.Schema({
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
exports.WebsiteOptimization = mongoose_1.model("WebsiteOptimization", schema);
