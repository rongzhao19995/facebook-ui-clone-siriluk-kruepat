import React, { useState } from "react";
import { ReactComponent as SearchSvg } from '../assets/icons/svg/search.svg';

export default function Search() {
  const [value, setValue] = useState("222");

  const onChangeSearch = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="svg-wrapper">
        <SearchSvg/>
      </div>
      <div className="search-wrapper">
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            placeholder="Search Facebook"
            onChange={onChangeSearch}
          />
          <input className="search__submit--hidden" type="submit" />
        </form>
      </div>
    </>
  );
}
