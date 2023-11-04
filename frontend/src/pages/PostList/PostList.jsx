import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import './PostList.scss';
import Posts from '../../components/Posts/Posts';
import PostCounter from '../../components/PostCounter/PostCounter';

const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);
  const [totalPosts, setTotalPosts] = useState(0);
  const limit = 10;

  useEffect(() => {
    const pageParam = Number(searchParams.get('page'));
    setCurrentPage(pageParam > 0 ? pageParam : 1);
  }, [searchParams]);

  // Callback to update the total number of posts
  const updateTotalPosts = useCallback((total) => {
    setTotalPosts(total);
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalPosts / limit);
  
  // Function to change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber });
  };

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h2>Posts</h2>
            <h5><PostCounter show="message" /></h5>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3">
          {<Posts page={currentPage} limit={limit} updateTotalPosts={updateTotalPosts} />}
        </div>

        {/* Pagination Controls */}
        <div className="pagination">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className='btn btn-primary'>
            Previous
          </button>
          {/* Here you can map through an array of page numbers and render page number buttons */}
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages && currentPage <= totalPages} className='btn btn-primary ms-2'>
            Next
          </button>
        </div>

      </div>
    </div>
  )
}

export default PostList