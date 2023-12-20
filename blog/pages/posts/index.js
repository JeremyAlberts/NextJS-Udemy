import AllPosts from "../../components/posts/all-posts";

export default function PostsPage() {
  const dummyData = [
    {
      title: "getting started",
      image: "getting-started-nextjs.png",
      date: new Date(),
      excerpt: "a little piece of text",
      slug: "getting-started",
    },
  ];

  return <AllPosts posts={dummyData} />;
}
