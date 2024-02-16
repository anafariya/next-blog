import Image from "next/image";
import PostUser from "@/components/PostUser/PostUser";
import { getPost } from "@/lib/data";
import { Suspense } from "react";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.slug,
    description: post.description,
  };
};

const SingleBlogPage = async ({ params }) => {
 const {slug} = params
  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);

  return (
    <div className="flex gap-12">
     <div className="flex-2 flex flex-col gap-6">
     {post.img&&( <div className="flex gap-2 items-center">
          <Image
            src={post.img}
            alt="Main Image"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>)}
        <h1>{post.title}</h1>
        {post && (
          <Suspense fallback={<div>Loading...</div>} >
            <PostUser userId={post.userId}/>
          </Suspense>
        )}
        <div>
          <p className="text-sm text-gray-600">Published on</p>
          <p>
            {post.createdAt?.toString().slice(4,16)}
          </p>
        </div>
        <div className="text-lg">
          {post.description}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
