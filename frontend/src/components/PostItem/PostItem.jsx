import { Link } from 'react-router-dom';
import './PostItem.scss'

const PostItem = (props) => {
  function calculateReadingTime(text) {
    const averageWordLength = 6; // Average length of a word in characters (including space)
    const wordsPerMinute = 200; // Average reading speed

    const wordCount = text.length / averageWordLength;
    const readingTimeMinutes = wordCount / wordsPerMinute;
    let readingTime = Math.ceil(readingTimeMinutes);

    const response = (readingTime == 1) ? `${readingTime} min` : `${readingTime} mins`

    return response;
  }

  // Resume text
  const resumeText = (props.post.resume.length > 100) ? `${props.post.resume.substring(0, 100)}...` : props.post.resume;

  // Tags
  const tagList = props.post.tags.map(tag => tag.tags_id?.tag_name).filter(tagName => tagName !== undefined);

  return (
    <div key={props.post.id} className="col post-item">
      <div className="card">
        <div className="card-body">
          <h4 className="title">{props.post.title}</h4>
          <h6 className="subtitle">{props.post.subtitle}</h6>
          <p className="resume my-4">{resumeText}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-muted m-0">Reading time: {calculateReadingTime(props.post.resume)}</p>
            <Link to={`/posts/${props.post.slug}`} className='d-flex align-items-center btn btn-sm btn-primary btn-continue'>
              read more...
            </Link>
          </div>
          <div
            className={`tag-list ${(tagList.length) ? 'border-top mt-4 pt-3' : ''}`}
            dangerouslySetInnerHTML={{ __html: tagList.map(tagName => `<small>#${tagName}</small>`).join('') }}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;