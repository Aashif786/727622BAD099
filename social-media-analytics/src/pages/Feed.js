import React, { useState, useEffect } from "react";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('http://20.244.56.144/evaluation-service/users/:userid/posts');
            const data = await response.json();
            const sortedPosts = data.sort((a, b) => b.id - a.id);
            setPosts(sortedPosts);
        };
        fetchPosts();

        const interval = setInterval(fetchPosts, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container mt-4 mrg">
            <h1 className='text-center'>Feed</h1>
        </div>
    );
};

export default Feed;