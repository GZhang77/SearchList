import React from "react";

const Search = props => {
  return (
    <form>
      {props.children}
      <input type="search" value={props.value} onChange={props.onChange} />
    </form>
  );
};

export default Search;
