import classes from "./featured-posts.module.css";
import PostsGrid from "./post-grid";

export default function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
