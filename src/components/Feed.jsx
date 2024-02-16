import React, { useContext, useEffect } from 'react';
import { Context } from '../context/contextApi';
import LeftNav from './LeftNav';
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResult } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  },[]);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      {/*  grow is used to allow a flex item to grow to fill any available space */}
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 ">
        {/* The .map() method allows you to run a function on each item in the array, returning a new array as the result. */}
          
          {!loading && Array.isArray(searchResult) && searchResult.map((item) => {
            if (item.type !== "video") {return false;}              
            return (
              <VideoCard 
                key={item?.video?.videoId}
                video={item?.video}
              />
            );
          })}


        </div>
      </div>
    </div>
  );
};

export default Feed