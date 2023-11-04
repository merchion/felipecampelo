import { Link } from 'react-router-dom';
import './Header.scss';
import SearchInput from '../../components/SearchInput/SearchInput';

const Header = () => {
  return (
    <header className="p-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0">
            <img src="../../src/assets/images/logo.svg" alt="Logotipo" className="logo" />
          </Link>
          <SearchInput />
        </div>
      </div>
    </header>
  )
}

export default Header