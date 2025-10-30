import { object, objectIdValidation, optional } from "@deps";
import { selectStruct } from "../../../mod.ts";
import { user_pure } from "@model";

export const registerUserValidator = () => {
	const { level, is_verified, ...rest } = user_pure;

	return object({
		set: object({
			...rest,
			nationalCard: optional(objectIdValidation),
			avatar: optional(objectIdValidation),
			province: optional(objectIdValidation),
			city: optional(objectIdValidation),
			city_zone: optional(objectIdValidation),
		}),
		get: selectStruct("user", 1),
	});
};
