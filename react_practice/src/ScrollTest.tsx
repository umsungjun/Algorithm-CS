import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fakeStoreAPI } from "./api/fakeStoreAPi";
let page = 1;
const ScrollTest = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async () => {
      await fakeStoreAPI.get(page);
    };
  }, []);

  const fetchMoreData = async () => {
    page++;
    await fakeStoreAPI.get(page);
  };
  return (
    <div>
      <h1>Infinity Scroll Example</h1>
      <InfiniteScroll
        dataLength={100}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {/* {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))} */}
      </InfiniteScroll>
    </div>
  );
};

export default ScrollTest;
