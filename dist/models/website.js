"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let activeTaskSchema = new mongoose_1.Schema({
    taskId: {
        type: String,
        required: true
    },
    taskName: {
        type: String,
        required: false
    },
    taskProgress: {
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    }
}, { _id: false });
let scriptsSchema = new mongoose_1.Schema({
    poweredBy: {
        type: Boolean,
        required: true
    },
    monetization: {
        type: Boolean,
        required: true
    }
}, { _id: false });
let statusHistorySchema = new mongoose_1.Schema({
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
}, { _id: false });
let settingsSchema = new mongoose_1.Schema({
    encoding: {
        type: String,
        required: true,
        default: "utf8"
    },
    isMobile: {
        type: Boolean,
        required: true,
        default: false
    },
    importSpeed: {
        type: Number,
        required: false,
        default: 0
    },
    isDynamic: {
        type: Boolean,
        required: false,
        default: false
    }
}, { _id: false });
let cdnSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: false
    },
    domainName: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
        required: true,
        default: false
    },
    isInvalidating: {
        type: Boolean,
        required: true,
        default: false
    }
}, { _id: false });
let testResultSchema = new mongoose_1.Schema({
    total: {
        type: Number,
        required: false
    },
    cache: {
        type: Number,
        required: false
    },
    keepalive: {
        type: Number,
        required: false
    },
    gzip: {
        type: Number,
        required: false
    },
    compress: {
        type: Number,
        required: false
    },
    progressive: {
        type: Number,
        required: false
    },
    cdn: {
        type: Number,
        required: false
    },
    size: {
        type: Number,
        required: false
    },
    docTime: {
        type: Number,
        required: false
    },
    loadTime: {
        type: Number,
        required: false
    }
}, { _id: false });
let testResultsSchema = new mongoose_1.Schema({
    origin: {
        type: testResultSchema,
        required: false
    },
    originPsi: {
        type: testResultSchema,
        required: false
    },
    originMobilePsi: {
        type: testResultSchema,
        required: false
    },
    _interface: {
        type: testResultSchema,
        required: false
    },
    _interfacePsi: {
        type: testResultSchema,
        required: false
    },
    _interfaceMobilePsi: {
        type: testResultSchema,
        required: false
    }
}, { _id: false });
let statsSchema = new mongoose_1.Schema({
    assets: {
        type: Number,
        required: false,
        default: 0
    },
    rawSize: {
        type: Number,
        required: false,
        default: 0
    },
    optimizedSize: {
        type: Number,
        required: false,
        default: 0
    }
}, { _id: false });
let referenceSchema = new mongoose_1.Schema({
    bundleId: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    md5: {
        type: String,
        required: true
    }
}, { _id: false });
let includeSchema = new mongoose_1.Schema({
    js: [{ type: referenceSchema }],
    css: [{ type: referenceSchema }]
}, { _id: false });
let schema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    hostname: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    isActivating: {
        type: Boolean,
        required: true,
        default: false
    },
    isDeactivating: {
        type: Boolean,
        required: true,
        default: false
    },
    settings: {
        type: settingsSchema,
        required: true
    },
    isOptimized: {
        type: Boolean,
        required: true,
        default: false
    },
    isOptimizing: {
        type: Boolean,
        required: true,
        default: false
    },
    isFullOptimizing: {
        type: Boolean,
        required: true,
        default: false
    },
    isAnalyzing: {
        type: Boolean,
        required: true,
        default: false
    },
    isAnalyzed: {
        type: Boolean,
        required: true,
        default: false
    },
    isImporting: {
        type: Boolean,
        required: true,
        default: false
    },
    isImported: {
        type: Boolean,
        required: true,
        default: false
    },
    isTestingOrigin: {
        type: Boolean,
        required: true,
        default: false
    },
    isTestingInterface: {
        type: Boolean,
        required: true,
        default: false
    },
    isDNSConfigured: {
        type: Boolean,
        required: true,
        default: false
    },
    cdn: {
        type: cdnSchema,
        required: false
    },
    totals: {
        type: mongoose_1.Schema.Types.Mixed,
        required: false
    },
    originWptTestResults: {
        type: mongoose_1.Schema.Types.Mixed,
        required: false
    },
    interfaceWptTestResults: {
        type: mongoose_1.Schema.Types.Mixed,
        required: false
    },
    acmCert: {
        type: String,
        required: false
    },
    stats: {
        type: statsSchema,
        required: false
    },
    bundles: {
        type: includeSchema,
        required: false
    },
    lastFullOptimizationDate: {
        type: Date,
        required: false
    },
    lastFullOptimizationDurationSec: {
        type: Number,
        required: false
    },
    lastFullOptimizationStatus: {
        type: String,
        required: false
    },
    lastOptimizationDate: {
        type: Date,
        required: false
    },
    lastOptimizationDurationSec: {
        type: Number,
        required: false
    },
    lastAnalyzeDurationSec: {
        type: Number,
        required: false
    },
    lastImportDurationSec: {
        type: Number,
        required: false
    },
    lastImportDate: {
        type: Date,
        required: false
    },
    lastImportStatus: {
        type: String,
        required: false
    },
    lastOptimizationStatus: {
        type: String,
        required: false
    },
    lastOptimizationStatusMsg: {
        type: String,
        required: false
    },
    lastOptimizationStatusUrl: {
        type: String,
        required: false
    },
    testResults: {
        type: testResultsSchema,
        required: false
    },
    crawlId: {
        type: String,
        required: false
    },
    activeTask: {
        type: activeTaskSchema,
        required: false
    },
    scripts: {
        type: scriptsSchema,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    statusDate: {
        type: Date,
        required: true
    },
    statusHistory: {
        type: [statusHistorySchema],
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
exports.Website = mongoose_1.model("Website", schema);
