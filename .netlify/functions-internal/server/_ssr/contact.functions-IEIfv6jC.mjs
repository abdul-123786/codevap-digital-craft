import { r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-BrCn0fsX2.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.functions-IEIfv6jC.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var contactSchema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(100),
	email: stringType().trim().email("Enter a valid email address").max(255),
	phone: stringType().trim().max(30).optional().or(literalType("")),
	company: stringType().trim().max(120).optional().or(literalType("")),
	projectType: stringType().trim().min(1, "Select a project type").max(60),
	budget: stringType().trim().min(1, "Select a budget range").max(60),
	timeline: stringType().trim().min(1, "Select a timeline").max(60),
	message: stringType().trim().min(10, "Tell us a little more").max(1e3)
});
var submitContact_createServerFn_handler = createServerRpc({
	id: "1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd",
	name: "submitContact",
	filename: "src/lib/contact.functions.ts"
}, (opts) => submitContact.__executeServer(opts));
var submitContact = createServerFn({ method: "POST" }).validator((data) => contactSchema.parse(data)).handler(submitContact_createServerFn_handler, async ({ data }) => {
	console.info("[contact] enquiry received", {
		projectType: data.projectType,
		budget: data.budget,
		hasPhone: Boolean(data.phone)
	});
	return { ok: true };
});
//#endregion
export { submitContact_createServerFn_handler };
