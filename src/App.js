import React from "react";
import Search from "./Search";
import Table from "./Table";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "   Jsx; Class component; hook; Lifecycle Method",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Selector; Action; Connect; Reducer; Provider",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    author: "   Accessbility; Block; Doctype; Sematic",
    num_comments: 2,
    points: 5,
    objectID: 2,
  },
  {
    title: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    author:
      "   Box Model; Position property; Flexbox; Grid system; Sass; Mixin",
    num_comments: 2,
    points: 5,
    objectID: 3,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onDismiss = (id) => {
    const updatedList = this.state.list.filter((item) => item.objectID !== id);
    this.setState({ list: updatedList });
  };

  render() {
    const { searchTerm, list } = this.state;

    return (
      <div>
        <div>
          <Search value={searchTerm} onChange={this.onSearchChange}>
            Search
          </Search>
        </div>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

export default App;
