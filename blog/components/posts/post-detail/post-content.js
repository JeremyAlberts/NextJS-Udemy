import PostHeader from "./post-header";
import classes from './post-content.module.css'
import ReactMarkdown from 'react-markdown'

const dummyData = {
  title: "getting started",
  image: "getting-started-nextjs.png",
  date: new Date(),
  slug: "getting-started",
  content: "# This is a post",
};

export default function PostContent() {
  const imagePath = `/images/posts/${dummyData.slug}/${dummyData.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={dummyData.title} image={imagePath} />
      <ReactMarkdown>{dummyData.content}</ReactMarkdown>
    </article>
  );
}
