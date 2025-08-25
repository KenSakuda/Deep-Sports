import { Tagtype } from "@/app/_libs/microcms";
import Link from "next/link";

type Props = {
  tag: Tagtype;
};

export default function Tag({ tag }: Props) {
  return <Link href={`/tag/${tag.id}`}>{tag.name}</Link>;
}
