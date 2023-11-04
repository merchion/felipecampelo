import { useState, useEffect } from 'react';
import { fetchPosts, countPosts } from '../../services/api';
import PostItem from '../PostItem/PostItem';

const Posts = ({ updateTotalPosts, page = 1, limit = 10 }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const offset = (page > 1) ? ((page - 1) * limit) : 0;

          const { data } = await fetchPosts(offset, limit);
          setPosts(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    getPosts();
  }, [page, limit]);

  useEffect(() => {
    const getPostsAmount = async () => {
      try {
        const { data } = await countPosts();
        updateTotalPosts(data.data.length); // Update the total number of posts to send it to the PostList page
      } catch (error) {
        console.error(error);
      }
    }

    getPostsAmount();
  }, [updateTotalPosts]);

  return (
    posts.map((post) => (
      <PostItem key={post.id} post={post} />
    ))
  );
}

export default Posts;
