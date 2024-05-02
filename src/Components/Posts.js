import React, { useState, useEffect } from 'react'
import ImageUpload from './ImageUpload';
import Post from './Post';
import './Posts.css';
import { db } from '../Firebase'; 
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';


function Posts({ user }) {
    const navigate = useNavigate("");
    const [posts, setPosts] = useState([]);

    document.title = 'Facebook';

    if (user === undefined) {
        navigate("/login")
    }

    

    console.log(posts)
    
    return (
        <div className="posts">
            <ImageUpload />
            {
                posts.map(({ id, post }) => (
                    < Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl} noLikes={post.noLikes} postUserId={post.uid} />
                ))
            }
        </div>
    )
}

export default Posts