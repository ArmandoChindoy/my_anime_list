import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAnimeByQuery } from "../reducers/anime";

const MainNavbar = () => {
  const dispatch = useDispatch();
  const [query, setquery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAnimeByQuery(query));
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">My anime list</a>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setquery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
