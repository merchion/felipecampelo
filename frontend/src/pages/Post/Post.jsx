import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostBySlug } from '../../services/api';
import './Post.scss';

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetchPostBySlug(slug);
        setPost(response.data.data);
      } catch (error) {
        console.error('Failed to fetch post', error);
      }
    };

    getPost();
  }, [slug]);

  function printTextBlocks(textBlocks) {
    return textBlocks.map((block, index) => {
      switch (block.type) {
        case "header":
          const HeaderTag = `h${block.data.level}`;
          return <HeaderTag key={index}>{block.data.text}</HeaderTag>;

        case "paragraph":
          return <p key={index}>{block.data.text}</p>;

        case "delimiter":
          return <hr key={index} className='delimiter' />;

        default:
          return null;
      }
    });
  }

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (!post) {
    return <></>;
  }

  // Tags
  const tagList = post[0].tags.map(tag => tag.tags_id?.tag_name).filter(tagName => tagName !== undefined);

  return (
    <div className="album py-5 bg-body-tertiary post-container">
      <div className="container">
        <Link to="/posts" className="btn btn-sm btn-primary">
          Go back
        </Link>

        <div className="row mb-5">
          <div className="col-8 m-auto">
            <div className="tag-list">
              {tagList.map((tag, index) => (
                <small key={index}>#{tag}</small>
              ))}
            </div>
            <div className="post-title">
              <h1>{post[0].title}</h1>
              <h2>{post[0].subtitle}</h2>
              <p className="mt-4">{formatDate(post[0].date_created)}</p>
            </div>
            <div className='post-content'>
              {printTextBlocks(post[0].text.blocks)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
