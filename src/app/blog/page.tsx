import PostCard from '@/components/PostCard/PostCard'
import React from 'react'

function BlogPage() {
  return (
    <div className='flex flex-wrap'>
      <div className='w-30 m-5'>
      <PostCard/>
      </div>
      <div className='w-30 m-5'>
      <PostCard/>
      </div>
      <div className='w-30 m-5'>
      <PostCard/>
      </div>
      <div className='w-30 m-5'>
      <PostCard/>
      </div>
      
    </div>
  )
}

export default BlogPage