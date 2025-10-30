import { string } from "@deps";
import { geoJSONStruct } from "@model";
import { createUpdateAt } from "../../utils/createUpdateAt.ts";

export const pure_location = {
	name: string(),
	english_name: string(),

	area: geoJSONStruct("MultiPolygon"),
	center: geoJSONStruct("Point"),

	...createUpdateAt,
};

export const location_excludes = [
	"area",
	"center_location",
	"createdAt",
	"updatedAt",
];
