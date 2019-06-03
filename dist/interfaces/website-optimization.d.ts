export interface IStatusHistory {
    status: string;
    date: Date;
}
export interface IWebsiteOptimizationTestStatus {
    testId: string;
    startDate?: Date;
    endDate?: Date;
    duration?: number;
    status: string;
    statusHistory?: IStatusHistory[];
}
export interface IWebsiteOptimizationImportStatus {
    importId: string;
    startDate?: Date;
    endDate?: Date;
    duration?: number;
    status: string;
    statusHistory?: IStatusHistory[];
}
export interface IWebsiteAssetOptimizationStatus {
    startDate?: Date;
    endDate?: Date;
    duration?: number;
    status: string;
    statusHistory?: IStatusHistory[];
}
export interface IWebsiteCdnInvalidationStatus {
    startDate?: Date;
    endDate?: Date;
    duration?: number;
    status: string;
    statusHistory?: IStatusHistory[];
}
export interface IWebsiteOptimization {
    userId: string;
    websiteId: string;
    originTestStatus: IWebsiteOptimizationTestStatus;
    importStatus: IWebsiteOptimizationImportStatus;
    assetOptimizationStatus: IWebsiteAssetOptimizationStatus;
    cdnInvalidationStatus: IWebsiteCdnInvalidationStatus;
    interfaceTestStatus: IWebsiteOptimizationTestStatus;
    startDate?: Date;
    endDate?: Date;
    duration?: number;
    status: string;
}
