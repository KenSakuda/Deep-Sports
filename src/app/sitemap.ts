import { MetadataRoute } from "next";
import { getArticleList } from "@/app/_libs/microcms";
import { SITEMAP_LIMIT } from "@/app/_constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getArticleList({
    limit: SITEMAP_LIMIT,
    fields: "id,revisedAt",
  });

  const baseUrl = process.env.BASE_URL as string;

  return [
    {
      url: baseUrl,
      lastModified: data.contents[0].revisedAt,
    },
    ...data.contents.map((content) => ({
      url: `${baseUrl}/articles/${content.id}`,
      lastModified: content.revisedAt,
    })),
  ];
}
