import "../styles/search-bar.css";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <input className="search-bar-term" placeholder="Type city name..." />
        <button className="search-bar-button">
          <BiSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
