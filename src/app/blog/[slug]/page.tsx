import Image from 'next/image';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

const SingleBlogPage = () => {
  const author = {
    name: 'John Doe',
    avatar: 'https://images.pexels.com/photos/12993218/pexels-photo-12993218.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  };
  const publishedOn = new Date().toLocaleDateString();

  return (
    <div className="flex gap-12">
      <div className="flex-1 relative h-[calc(100vh - 200px)]">
        <div className="w-full h-full">
          <Image src="https://images.pexels.com/photos/12993218/pexels-photo-12993218.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" layout="fill" className="object-cover" />
        </div>
      </div>
      <div className="flex-2 flex flex-col gap-6">
        <div className="flex gap-2 items-center">
          <Image src="https://images.pexels.com/photos/12993218/pexels-photo-12993218.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Main Image" width={200} height={200} className="rounded-lg" />
          <div>
            <p className="text-sm text-gray-600">Written by</p>
            <p className="font-semibold">{author.name}</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600">Published on</p>
          <p>{publishedOn}</p>
        </div>
        <div className="text-lg">
          {lorem.generateParagraphs(10)}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
