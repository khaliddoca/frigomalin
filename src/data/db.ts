import Dexie, { type Table } from "dexie";
import type { StockItem } from "../domain/types";

export class FrigoMalinDatabase extends Dexie {
	stockItems!: Table<StockItem, string>;

	constructor() {
		super("FrigoMalinDatabase");

		this.version(1).stores({
			stockItems:
				"id, name, barcode, expiresOn, dateKind, location, status, addedOn, [status+expiresOn]",
		});
	}
}

export const db = new FrigoMalinDatabase();
