import { useState, useEffect } from 'react';
import { fetchLatestPosts } from '../../services/api';
import PostItem from '../PostItem/PostItem';

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await fetchLatestPosts();
        setPosts(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    getPosts();
  }, []);

  return (
    posts.map((post) => (
      <PostItem key={post.id} post={post} />
    ))
  );
}

export default LatestPosts;
