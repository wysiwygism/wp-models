export interface IWebsiteOptimizationTestStatus {
    testId: string;
    startDate?: Date;
    endDate?: Date;
    duration?: number;
    status?: string;
    isSuccess: boolean;
    isStopped: boolean;
}

export interface IWebsiteOptimizationImportStatus {
    importId: string;
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