import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const ScrollTest = () => {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, index) => index)
  );

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems((prevItems) =>
        prevItems.concat(
          Array.from({ length: 20 }, (_, index) => index + prevItems.length)
        )
      );
    }, 1500);
  };

  return (
    <div style={{ fontSize: "2.5rem" }}>
      <h1>Infinity Scroll Example</h1>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default ScrollTest;
