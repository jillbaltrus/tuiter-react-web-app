import React from "react";
import "../index.css"

const WhoToFollowListItem = (
    {
      who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
  return(
      <li className="list-group-item height-60 border">
        <div className="mt-2 ms-2">
          <img className="float-left icon-pic" height={48} src={require(`../../../icons/${who.avatarIcon}`)}/>
          <div className="float-left ms-3">
            <div className="float-left fw-bold">{who.userName}</div>
            <i className="fas fa-circle ms-2"></i>
            <div className="">@{who.handle}</div>
          </div>
          <button className="btn btn-primary float-right me-3 border-radius-50">
            Follow
          </button>
        </div>
      </li>);
};
export default WhoToFollowListItem;