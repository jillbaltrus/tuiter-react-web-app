import React from "react";
import "../index.css"

const PostSummaryItem = (
    {
      post = {
        "topic": "Space",
        "username": "SpaceX",
        "time": "2h",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed", "image": "tesla.png"
      }
    }
) => {
  return(
      <div className="list-group-item width-100p m-0 p-3 border">
        <div className="row">
          <div className="col-10">
            <div
                className="color-grey float-left">{post.username}
            </div>
            <i className="fas fa-circle text-white float-left p-1"></i>
            <div className="float-left"> - {post.time} </div>
            <br/>
            <div className="fw-bold">{post.topic}</div>
              <div>
                {post.title}
              </div>
          </div>
          <div className="col-2 p-0 pe-2 float-right position-relative">
            <img className="width-100p rounded" src={require(`../../../icons/${post.image}`)}/>
          </div>
        </div>
      </div>
  );
};
export default PostSummaryItem;