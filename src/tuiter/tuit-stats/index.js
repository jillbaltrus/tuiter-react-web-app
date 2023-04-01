import React, {useState} from "react";
import { Chat, ArrowRepeat, Heart, Share, HeartFill, HandThumbsDownFill} from "react-bootstrap-icons";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
  const [numLikes, setNumLikes] = useState(tuit.likes);
  const [isLiked, setIsLiked] = useState(tuit.liked);
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    if (isLiked) {
      dispatch(updateTuitThunk({
        ...tuit,
        likes: tuit.likes - 1
      }));
      setNumLikes(tuit.likes);
    } else {
      dispatch(updateTuitThunk({
        ...tuit,
        likes: tuit.likes + 1
      }));
      setNumLikes(tuit.likes);
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
          <span onClick={() => dispatch(updateTuitThunk(
              {...tuit, likes: tuit.likes + 1}))}>
            <HeartFill className={"m-1 float-left"} color="red"></HeartFill>
          </span>
          <div className={"ms-1 float-left"}>
            {tuit.likes}
          </div>
        </div>
        <div className={"col-3"}>
          <span onClick={() => dispatch(updateTuitThunk({
            ...tuit, dislikes: tuit.dislikes + 1}))}>
            <HandThumbsDownFill className={"m-1 float-left"}></HandThumbsDownFill>
          </span>
          <div className={"ms-1 float-left"}>
            {tuit.dislikes}
          </div>
        </div>
        {/*<div className={"col-2"}>*/}
        {/*  <Share className={"m-1 float-left"}></Share>*/}
        {/*</div>*/}
      </div>
  );
};

export default TuitStats;