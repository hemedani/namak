import { type ActFn, ObjectId, TInsertRelations } from "@deps";
import { user } from "../../../mod.ts";
import { throwError } from "@lib";
import { hash } from "@da/bcrypt";
import { user_relations } from "@model";

export const registerUserFn: ActFn = async (body) => {
	const {
		set: {
			nationalCard,
			avatar,
			province,
			city,
			city_zone,
			first_name,
			last_name,
			email,
			password,
			father_name,
			gender,
			birth_date,
			summary,
			address,
			createdAt,
			updatedAt,
		},
		get,
	} = body.details;

	const foundedUserWithEmail = await user.findOne({
		filters: { email },
	});

	if (foundedUserWithEmail) {
		return throwError("این کاربر قبلا ثبت  نام کرده است");
	}

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
		});

	city &&
		(relations.city = {
			_ids: new ObjectId(city as string),
		});

	city_zone &&
		(relations.city_zone = {
			_ids: new ObjectId(city_zone as string),
		});

	const registeredUser = await user.insertOne({
		doc: {
			first_name,
			last_name,
			email,
			password: await hash(password),
			father_name,
			gender,
			birth_date,
			summary,
			address,
			level: "Ordinary",
			is_verified: false,
			createdAt,
			updatedAt,
		},
		relations,
		projection: get,
	});

	return registeredUser ? registeredUser : throwError("کاربر ایجاد نشد");
};
