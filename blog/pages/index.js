import { Fragment } from "react";
import Hero from "../components/UI/hero";
import PostList from "../components/posts/post-list";

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <PostList />
    </Fragment>
  );
}
