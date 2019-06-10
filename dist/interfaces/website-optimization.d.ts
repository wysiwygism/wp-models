export interface IWebsiteOptimizationTestStatusResults {
    loadTime?: number;
    cdn?: number;
    cache?: number;
    compress?: number;
    gzip?: number;
    keepalive?: number;
    progressiveJpeg?: number;
    avg?: number;
}
export interface IWebsiteOptimizationTestStatus {
    testId?: string;
    startDate?: Date;
    endDate?: Date;
    duration?: number;
    status?: string;
    isSuccess: boolean;
    isStopped: boolean;
    results?: IWebsiteOptimizationTestStatusResults;
}
export interface IWebsiteOptimizationImportStatus {
    importId?: string;
    startDate?: Date;
    endDate?: Date;
    duration?: number;
    status?: string;
    isSuccess: boolean;
    isStopped: boolean;
}
export interface IWebsiteAssetOptimizationStatus {
    startDate?: Date;
    endDate?: Date;
    duration?: number;
    status?: string;
    isSuccess: boolean;
    isStopped: boolean;
}
export interface IWebsiteCdnInvalidationStatus {
    invalidationId?: string;
    startDate?: Date;
    endDate?: Date;
    duration?: number;
    status?: string;
    isSuccess: boolean;
    isStopped: boolean;
}
export interface IWebsiteOptimization {
    userId: string;
    websiteId: string;
    importStatus: IWebsiteOptimizationImportStatus;
    assetOptimizationStatus: IWebsiteAssetOptimizationStatus;
    cdnInvalidationStatus: IWebsiteCdnInvalidationStatus;
    interfaceTestStatus: IWebsiteOptimizationTestStatus;
    startDate?: Date;
    endDate?: Date;
    duration?: number;
    isRunning: boolean;
    isSuccess: boolean;
    isStopped: boolean;
    status?: string;
}
