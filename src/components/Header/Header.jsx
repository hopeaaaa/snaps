/* import filters from "../../data/tags.json"; */
import Icon from "../../assets/icons/Filter.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.scss";
import axios from "axios";

const Header = (props) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState([]);

  async function getTags() {
    const response = await axios.get("http://localhost:3000/tags");
    console.log("header response:", response.data);
    setFilters(response.data);
    console.log(filters);
  }

  useEffect(() => {
    getTags();
  }, []);

  return (
    <header className="header">
      <nav className="header__container">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1 className="header__title">Snaps</h1>
        </Link>
        <div className="header__btncontainer">
          <button
            className={`header__filtersbtn ${
              isFiltersOpen ? "header__filtersbtn--active" : ""
            }`}
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            Filters
            <span className={`icon ${isFiltersOpen ? "open" : ""}`}>
              <img src={Icon} alt="filters icon" className="header__ficon" />
            </span>
          </button>
        </div>
      </nav>
      <div className={`header__fcontainer ${isFiltersOpen ? "open" : ""}`}>
        <h2 className="header__ftitle">Filters</h2>
        <div className="header__fgrid">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`header__ftag ${
                props.activeFilter === filter ? "header__ftag--active" : ""
              }`}
              onClick={() => props.handleFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
