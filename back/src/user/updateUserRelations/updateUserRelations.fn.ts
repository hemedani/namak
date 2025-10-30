import { type ActFn, ObjectId, type TInsertRelations } from "@deps";
import type { user_relations } from "@model";
import { user } from "../../../mod.ts";

export const updateUserRelationsFn: ActFn = async (body) => {
	const {
		set: { _id, avatar, nationalCard, province, city, city_zone },
		get,
	} = body.details;

	const relations: TInsertRelations<typeof user_relations> = {};

	nationalCard &&
		(relations.national_card = {
			_ids: new ObjectId(nationalCard as string),
		});

	avatar &&
		(relations.avatar = {
			_ids: new ObjectId(avatar as string),
		});

	province &&
		(relations.province = {
			_ids: new ObjectId(province as string),
			relatedRelations: {
				users: true,
			},
		});

	city &&
		(relations.city = {
			_ids: new ObjectId(city as string),
			relatedRelations: {
				users: true,
			},
		});

	city_zone &&
		(relations.city_zone = {
			_ids: new ObjectId(city_zone as string),
			relatedRelations: {
				users: true,
			},
		});

	/*
	 * 	@LOG @DEBUG @INFO
	 * 	This log written by ::==> {{ `` }}
	 *
	 * 	Please remove your log after debugging
	 */
	console.log(" ============= ");
	console.group("relations ------ ");
	console.log();
	console.info({ relations }, " ------ ");
	console.log();
	console.groupEnd();
	console.log(" ============= ");

	return await user.addRelation({
		filters: { _id: new ObjectId(_id as string) },
		relations,
		projection: get,
		replace: true,
	});
};
