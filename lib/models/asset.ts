import {Document, Schema, Model, model} from "mongoose";
import {IAsset} from "../interface/asset";

export interface IAssetModel extends IAsset, Document {

}

let referenceSchema = new Schema({
    assetId: {
        type: String,
        required: true
    },
    bundleId: {
        type: String,
        required: false
    }
}, {_id: false});

let includePathBundlesSchema = new Schema({
    assets: [{type: referenceSchema}],
    md5: {type: String, required: true},
    position: {type: String, required: true},
    path: {type: String, required: true}
}, {_id: false});

let includeBundlesSchema = new Schema({
    bundles: [{type: String}],
    pathBundles: [{type: includePathBundlesSchema}]
}, {_id: false});

let includeSchema = new Schema({
    js: includeBundlesSchema,
    css: includeBundlesSchema,
    images: includeBundlesSchema,
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
    cloneId: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true
    },
    encoding: {
        type: String,
        required: false
    },
    mimetype: {
        type: String,
        required: true
    },
    parseError: {
        type: Boolean,
        required: false,
        default: false
    },
    parseErrorData: {
        type: Object,
        required: false
    },
    isMobile: {
        type: Boolean,
        required: false,
        default: false
    },
    isDynamic: {
        type: Boolean,
        required: false,
        default: false
    },
    is404: {
        type: Boolean,
        required: false,
        default: false
    },
    isRemoved: {
        type: Boolean,
        required: false,
        default: false
    },
    optimizationLevel: {
        type: Number,
        required: false,
        default: 0
    },
    data: {
        type: String,
        required: false
    },
    optimizedData: {
        type: String,
        required: false
    },
    md5Url: {
        type: String,
        required: false
    },
    crawlId: {
        type: String,
        required: false
    },
    include: {
        type: includeSchema,
        required: false
    },
    isOriginal: {
        type: Boolean,
        required: false,
        default: false
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    isNewAsset: {
        type: Boolean,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
});

export const Asset: Model<IAssetModel> = model<IAssetModel>("Asset", schema);