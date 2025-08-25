// import { Metadata } from "next";
// import Layout from "@/app/_components/Layout";
// import Main from "@/app/_components/Main";
// import Sub from "@/app/_components/Sub";
// import Ad from "@/app/_components/Ad";
// import { TOP_ARTICLE_LIST_LIMIT } from "@/app/_constants";
// import { getArticleList, getTagDetail } from "@/app/_libs/microcms";
// import Cards from "@/app/_components/Cards";
// import Ranking from "@/app/_components/Ranking";
// import SearchField from "@/app/_components/SearchField";
// import { notFound } from "next/navigation";
// import { ReadMore } from "@/app/_components/ReadMore";

// type Props = {
//   params: {
//     tagId: string;
//   };
// };

// export const revalidate = 60;

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const tag = await getTagDetail(params.tagId);
//   return {
//     title: tag.name,
//   };
// }

// export default async function Page({ params }: Props) {
//   const filters = `tags[contains]${params.tagId}`;
//   const data = await getArticleList({
//     limit: TOP_ARTICLE_LIST_LIMIT,
//     filters,
//   });
//   const tag = await getTagDetail(params.tagId).catch(() => notFound());
//   return (
//     <Layout>
//       <Main>
//         <h1>{tag.name}</h1>
//         <Cards articles={data.contents} />
//         <ReadMore filters={filters} totalCount={data.totalCount} />
//       </Main>
//       <Sub>
//         <Ad />
//         <SearchField />
//         <Ranking />
//         <Ad />
//       </Sub>
//     </Layout>
//   );
// }
