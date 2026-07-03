import React from 'react'
import PostTitle from './PostTitle';
import PostBody from './PostBody';
type postProps = {
    title:string;
    body:string;
}

function Post({title,body}:postProps) {
  return (
    <>
      <PostTitle title={title}></PostTitle>
      <PostBody body={body}></PostBody>
    </>
  )
}

export default Post
