import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

export type Blog = {
	title: string;
	content: string;
	eyecatch?: MicroCMSImage;
	category?: { id: string; name: string } & MicroCMSListContent;
} & MicroCMSListContent;

const client = createClient({
	serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: import.meta.env.MICROCMS_API_KEY,
});

export async function getBlogs() {
	const response = await client.getList<Blog>({
		endpoint: "blogs",
		queries: { orders: "-publishedAt", limit: 100 },
	});
	return response;
}

export async function getBlogDetail(contentId: string) {
	const response = await client.getListDetail<Blog>({
		endpoint: "blogs",
		contentId,
	});
	return response;
}
