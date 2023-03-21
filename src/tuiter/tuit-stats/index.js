import React, {useState} from "react";
import { Chat, ArrowRepeat, Heart, Share, HeartFill } from "react-bootstrap-icons";

const TuitStats = ({tuit}) => {
  const [numLikes, setNumLikes] = useState(tuit.likes);
  const [isLiked, setIsLiked] = useState(tuit.liked);

  const handleLikeClick = () => {
    if (isLiked) {
      setNumLikes(numLikes - 1)
    } else {
      setNumLikes(numLikes + 1);
    }
    setIsLiked(!isLiked);
  }

  return(
      <div className={"row"}>
        <div className={"col-3"}>
          <Chat className={"m-1 float-left"}></Chat>
          <div className={"ms-1 float-left"}>
            {tuit.replies}
          </div>
        </div>
        <div className={"col-3"}>
          <ArrowRepeat className={"m-1 float-left"}></ArrowRepeat>
          <div className={"ms-1 float-left"}>
            {tuit.retuits}
          </div>
        </div>
        <div className={"col-3"}>
          <span onClick={() => handleLikeClick()}>
                      {isLiked ?
                          <HeartFill className={"m-1 float-left"} color="red"></HeartFill> :
                          <Heart className={"m-1 float-left"}></Heart>}
          </span>
          <div className={"ms-1 float-left"}>
            {numLikes}
          </div>
        </div>
        <div className={"col-3"}>
          <Share className={"m-1 float-left"}></Share>
        </div>
      </div>
  );
};

export default TuitStats;