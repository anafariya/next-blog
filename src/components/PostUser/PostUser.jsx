import { getUser } from "@/lib/data";

const PostUser = async ({userId}) => {
  const user = await getUser(userId);
    return (
        <div>
        <p className="text-sm text-gray-600">Written by</p>
        <p className="font-semibold">{user?.username}</p>
      </div>
    )
}

export default PostUser