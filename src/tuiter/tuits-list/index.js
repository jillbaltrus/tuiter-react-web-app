import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
  const tuitsArray = useSelector(state => state.tuits)
  return(
      <ul className="navigation-list-group rounded p-0 m-0">
        {
          tuitsArray.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)
        }
      </ul>
  );
};

export default TuitsList;