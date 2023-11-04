import { useState, useEffect } from 'react';
import { countPosts } from '../../services/api';

const PostCounter = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await countPosts();
        setPosts(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    getPosts();
  }, []);

  if (props.show == 'amount') {
    return posts.length;
  }
  
  let postCounterMessage;
  if (posts.length === 0) {
    postCounterMessage = <span>I haven't written any articles yet. How lazy!</span>;
  } else if (posts.length === 1) {
    postCounterMessage = <span>I only wrote <strong className="border-bottom border-4">1 article</strong>. The first of many!</span>;
  } else {
    postCounterMessage = <span>I have written <strong className="border-bottom border-4">{posts.length} articles</strong> so far. Let's continue.</span>;
  }

  return postCounterMessage;
}

export default PostCounter