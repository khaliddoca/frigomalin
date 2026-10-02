export type DateKind = "DLC" | "DDM";

export type ISODate = `${number}-${number}-${number}`;

export type StockUnit = "g" | "kg" | "ml" | "L" | "piece" | "pack";

export type StockLocation = "fridge" | "pantry" | "freezer";

export type StockStatus = "in-stock" | "consumed" | "discarded";

export interface StockItem {
	id: string;
	name: string;
	barcode?: string;
	quantity: number;
	unit: StockUnit;
	expiresOn: ISODate;
	dateKind: DateKind;
	location: StockLocation;
	addedOn: ISODate;
	status: StockStatus;
}
