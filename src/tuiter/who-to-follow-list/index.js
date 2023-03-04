import React from "react";
import whoArray from './who.json'; import WhoToFollowListItem from "./who-to-follow-list-item";
import "../index.css"

const WhoToFollowList = () => { return(
    <ul className="navigation-list-group ps-1 rounded">
      <li className="list-group-item p-2 border x-lg-text">
        Who to follow
      </li>
      {
        whoArray.map(who =>
            <WhoToFollowListItem key={who._id} who={who}/>
        ) }
    </ul> );
};

export default WhoToFollowList;