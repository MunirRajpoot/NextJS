'use client'
import React from 'react'

const Post = ({params}) => {
    return (
        <>
        <h2>Blog : {params.posts[0]}</h2>
            <h2>Posts: {params.posts[1]}</h2>
        </>
    )
}

export default Post
