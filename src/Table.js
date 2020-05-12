import React from "react";

const Table = ({ list, pattern, onDismiss }) => (
  <div>
    {list
      .filter((item) =>
        item.author.toLowerCase().includes(pattern.toLowerCase())
      )
      .map((item) => {
        return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            {/* <span>{item.num_comments}</span>
            <span>{item.points}</span> */}
            <span>
              <button onClick={() => onDismiss(item.objectID)} type="button">
                Dismiss
              </button>
            </span>
          </div>
        );
      })}
  </div>
);

export default Table;
