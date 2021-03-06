import {IWebsiteStats} from "./website-stats";
import {IWebsiteSettings} from "./website-settings";
import {IWebsiteBundles} from "./website-bundles";
import {IWebsiteTestResults} from "./website-test-results";
import {IWebsiteCdn} from "./website-cdn";
import {IWebsiteStatusHistory} from "./website-status-history";
import {IWebsiteActiveTask} from "./website-active-task";
import {IWebsiteScripts} from "./website-scripts";

export interface IWebsiteImported {
    websiteId: string;
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
    activeTask?: IWebsiteActiveTask;
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
    statusHistory?: IWebsiteStatusHistory[];
    createdAt?: Date;
    modifiedAt?: Date;
}