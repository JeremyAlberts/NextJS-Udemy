import { Fragment } from "react";
import Hero from "../components/UI/hero";
import FeaturedPosts from "../components/posts/featured-posts";

export default function HomePage() {
  const dummyData = [
    {
      title: "getting started",
      image: "getting-started-nextjs.png",
      date: new Date(),
      excerpt: "a little piece of text",
      slug: "getting-started",
    },
  ];
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={dummyData} />
    </Fragment>
  );
}
