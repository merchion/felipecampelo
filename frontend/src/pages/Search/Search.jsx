import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PostItem from '../../components/PostItem/PostItem';
import SearchPostsCounter from '../../components/SearchPostsCounter/SearchPostsCounter';
import { searchPosts } from '../../services/api';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const query = searchParams.get('query');
    
    if (query) {
      const getPosts = async () => {
        try {
          const { data } = await searchPosts(query);
          setPosts(data.data);
        } catch (error) {
          console.error(error);
        }
      }

      getPosts();
    }
  }, [searchParams]);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h2>Search results</h2>
            <h5><SearchPostsCounter show="message" /></h5>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
          {posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
