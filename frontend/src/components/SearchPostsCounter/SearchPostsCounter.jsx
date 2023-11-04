import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { countSearchPosts } from '../../services/api';

const SearchPostsCounter = (props) => {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');

    const getPosts = async () => {
      try {
        const { data } = await countSearchPosts(query);
        setPosts(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    getPosts();
  }, [searchParams]);

  if (props.show == 'amount') {
    return posts.length;
  }
  
  let postCounterMessage;
  if (posts.length === 0) {
    postCounterMessage = <span>No results found for your search... sorry mate!</span>;
  } else if (posts.length === 1) {
    postCounterMessage = <span>At least <strong className="border-bottom border-4">1 article</strong> we could find!</span>;
  } else {
    postCounterMessage = <span>Great, I've found <strong className="border-bottom border-4">{posts.length} articles</strong> for you. Enjoy!</span>;
  }

  return postCounterMessage;
}

export default SearchPostsCounter