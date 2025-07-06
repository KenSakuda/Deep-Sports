"use client";

import { FC, useState, useCallback } from "react";
import { getArticleList, Article } from "@/app/_libs/microcms";
import { DETAIL_ARTICLE_LIST_LIMIT } from "@/app/_constants";
import Cards from "@/app/_components/Cards";

type Props = {
  filters?: string;
  q?: string;
  totalCount: number;
};

export const ReadMore: FC<Props> = ({ filters, q, totalCount }) => {
  const [contents, setContents] = useState<Article[]>([]);
  const [offset, setOffset] = useState<number>(DETAIL_ARTICLE_LIST_LIMIT);
  const getNextContents = useCallback(async () => {
    const data = await getArticleList({
      limit: DETAIL_ARTICLE_LIST_LIMIT,
      offset,
      filters,
      q,
    });
    setContents((prev) => [...prev, ...data.contents]);
    setOffset((prev) => prev + DETAIL_ARTICLE_LIST_LIMIT);
  }, [offset, filters, q]);

  if (totalCount <= DETAIL_ARTICLE_LIST_LIMIT) {
    return null;
  }

  return (
    <div>
      <Cards articles={contents} />
      {totalCount > offset && (
        <button onClick={getNextContents}>もっと読む</button>
      )}
    </div>
  );
};
