import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Meta from "../../components/Meta";

const ArticleNestedRouting = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Meta title={`${article.title}`} description={article.body} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps = async context => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map(path => ({
    params: { id: path.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ArticleNestedRouting;
