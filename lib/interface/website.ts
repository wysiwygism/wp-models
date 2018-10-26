import {IWebsiteStats} from "./website-stats";
import {IWebsiteSettings} from "./website-settings";
import {IWebsiteBundles} from "./website-bundles";
import {IWebsiteTestResults} from "./website-test-results";
import {IWebsiteCdn} from "./website-cdn";
import {IWebsiteScripts} from "./website-scripts";

export interface IWebsite {
    userId: string;
    name: string;
    url: string;
    hostname: string;
    ip: string;
    active: boolean;
    isActivating: boolean;
    isDeactivating: boolean;
    settings: IWebsiteSettings;
    isOptimized: boolean;
    isOptimizing: boolean;
    isFullOptimizing: boolean;
    isAnalyzing: boolean;
    isAnalyzed: boolean;
    isImporting: boolean;
    isImported: boolean;
    isTestingOrigin: boolean;
    isTestingInterface: boolean;
    isDNSConfigured: boolean;
    cdn?: IWebsiteCdn,
    acmCert?: string,
    stats?: IWebsiteStats;
    totals?: any;
    originWptTestResults?: any;
    interfaceWptTestResults?: any;
    bundles?: IWebsiteBundles;
    crawlId?: string;
    scripts: IWebsiteScripts;
    lastOptimizationDate?: Date;
    lastOptimizationDurationSec?: number;
    lastAnalyzeDurationSec?: number;
    lastImportDate?: Date;
    lastImportDurationSec?: number;
    lastImportStatus?: string;
    lastOptimizationStatus?: string;
    lastOptimizationStatusMsg?: string;
    lastOptimizationStatusUrl?: string;
    lastFullOptimizationDate?: Date;
    lastFullOptimizationDurationSec?: number;
    lastFullOptimizationStatus?: string;
    testResults?: IWebsiteTestResults;
    status: string;
    statusDate: Date;
    createdAt?: Date;
    modifiedAt?: Date;
}