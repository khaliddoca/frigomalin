import { describe, expect, it } from "vitest";
import { seedStockItems } from "./seed";

function dateFromToday(dayOffset: number): string {
	const date = new Date();
	date.setHours(12, 0, 0, 0);
	date.setDate(date.getDate() + dayOffset);

	const year = String(date.getFullYear()).padStart(4, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}

describe("seedStockItems", () => {
	it("contains 40 products with relative ISO dates", () => {
		expect(seedStockItems).toHaveLength(40);
		expect(seedStockItems.every((item) => /^\d{4}-\d{2}-\d{2}$/.test(item.expiresOn))).toBe(true);
	});

	it("covers the required expiration cases and varied stock statuses", () => {
		expect(seedStockItems.some((item) => item.expiresOn === dateFromToday(-1))).toBe(true);
		expect(seedStockItems.some((item) => item.expiresOn === dateFromToday(0))).toBe(true);
		expect(seedStockItems.some((item) => item.expiresOn > dateFromToday(0))).toBe(true);
		expect(
			seedStockItems.some(
				(item) => item.dateKind === "DDM" && item.expiresOn < dateFromToday(0) && item.status === "in-stock",
			),
		).toBe(true);
		expect(new Set(seedStockItems.map((item) => item.status)).size).toBeGreaterThan(1);
		expect(new Set(seedStockItems.map((item) => item.location)).size).toBe(3);
		expect(new Set(seedStockItems.map((item) => item.unit)).size).toBeGreaterThan(3);
	});
});