import Image from "next/image";
import Link from "next/link";

interface Post {
  img?: string;
  createdAt?: Date;
  title: string;
  body: string;
  slug: string;
}

interface Props {
  post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="flex flex-col gap-20 mb-20">
      <div className="flex">
        {post.img && (
          <div className="w-90 h-400 relative">
            <Image src={post.img} alt="" width={250} height={500} className="cover" />
          </div>
        )}
        <p className="text-xs rotate-270"> {post.createdAt?.toString().slice(4, 16)} </p>
      </div>
      <div>
        <h1 className="text-24 mb-5 w-90">{post.title}</h1>
        <p className="text-20 mb-5 w-90">{post.body}</p>
        <Link href={`/blog/${post.slug}`} passHref>
          <p className="underline">Read More</p>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
