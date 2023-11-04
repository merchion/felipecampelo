import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const query = searchParams.get('query');
    setSearchTerm(query);
  }, [searchParams]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    if (searchTerm.trim()) {
      // Trigger the search action if searchTerm is not empty
      searchAction(searchTerm);
    }
  };

  const searchAction = (query) => {
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <form className="col-12 col-lg-auto" role="search" onSubmit={handleSearchSubmit}>
      <input
        type="search"
        className="form-control"
        placeholder="Find something cool..."
        aria-label="Search"
        onChange={handleSearchChange}
        value={searchTerm}
      />
    </form>
  );
};

export default SearchInput;
