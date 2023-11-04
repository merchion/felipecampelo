import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
  },
})

// Get the latest 6 posts
export const fetchLatestPosts = () => API.get('/posts?fields=*,tags.tags_id.tag_name&sort[]=-date_created&limit=6');

// Count total posts
export const countPosts = async () => {
  const response = await API.get(`/posts`);
  return response;
};

// All posts with pagination
export const fetchPosts = async (offset = 0, limit = 10) => {
  if (offset != undefined && limit != undefined) {
    const response = await API.get(`/posts?fields=*,tags.tags_id.tag_name&sort[]=-date_created&offset=${offset}&limit=${limit}`);
    return response;
  }
};

// Retrieve a post by its Slug
export const fetchPostBySlug = async (slug) => {
  if (slug != undefined) {
    const response = await API.get(`/posts?fields=*,tags.tags_id.tag_name&filter[slug][_eq]=${slug}`);
    return response;
  }
};

// Retrieve posts related to the search query
export const searchPosts = async (query) => {
  if (query != undefined) {
    const response = await API.get(`/posts?fields=*,tags.tags_id.tag_name&sort[]=-date_created&search=${query}`);
    return response;
  }
};

// Count total posts in the search results
export const countSearchPosts = async (query) => {
  const response = await API.get(`/posts?search=${query}`);
  return response;
};