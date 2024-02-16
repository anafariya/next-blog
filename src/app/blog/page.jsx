
import PostCard from "@/components/PostCard/PostCard";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {

  const postss = await getPosts();
  return (
    <div className="flex flex-wrap">
      {postss.map((post) => (
        <div key={post.id} className="w-30 m-5">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
