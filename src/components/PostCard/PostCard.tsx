import Image from "next/image"
import Link from "next/link"

const PostCard = () => {
    return (
        <div className="flex flex-col gap-20 mb-20">
            <div className="flex">
                <div className="w-90 h-400 relative">
                    <Image src="https://images.pexels.com/photos/15550423/pexels-photo-15550423/free-photo-of-hand-holding-a-chocolate-lollipop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={250} height={250} className="cover"/>
                </div>
                <p className="text-xs rotate-270">Current date</p>
            </div>
            <div>
                <h1 className="text-24 mb-5 w-90">Title</h1>
                <p className="text-20 mb-5 w-90">Description</p>
                <Link className="underline" href="/blog/SinglePostPage">Read More</Link>
            </div>
        </div>
    )
}

export default PostCard