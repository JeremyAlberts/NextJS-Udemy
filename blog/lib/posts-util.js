import fs from "fs";
import path from "path";
import matter from "grey-matter";

const directory = path.join(process.cwd(), "posts");

export function getPostData(fileName) {
  const filePath = path.join(directory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, "");

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const files = fs.readdirSync(directory);

  const allPosts = files.map((file) => getPostData(file));

  const sorted = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sorted;
}

function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featured = allPosts.filter((post) => post.isFeatured);

  return featured;
}
