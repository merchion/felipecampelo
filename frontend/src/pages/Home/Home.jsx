import { Link } from 'react-router-dom';

import LatestPosts from '../../components/LatestPosts/LatestPosts';

const Home = () => {
  return (
    <main className="mt-3">
      <div className="container h-100 p-5 text-bg-dark rounded-3 d-flex justify-content-center text-center">
        <h1 className="h4" style={{ fontWeight: '300', lineHeight: '1.7', padding: '0 10rem' }}>
          Software architecture is the <span className="featured-word-dark">blueprint</span> of <span className="featured-word-dark">innovation</span>, <span className="featured-underline-dark">where logic meets creativity</span>, and where <span className="featured-underline-dark">challenges transform into solutions</span>.
        </h1>
      </div>
      <div className="album p-5 bg-body-tertiary mt-3">
        <div className="container">
          <div className="row mb-2">
            <div className="col-12">
              <h2 className="h4">Latest posts</h2>
              <p>
                <Link to="posts">See all posts</Link>
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3">
            {<LatestPosts />}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home