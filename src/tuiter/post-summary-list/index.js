import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostSummaryItem from "./post-summary-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, []);
    return(
    <ul className="navigation-list-group rounded p-0 m-0">
      {
        tuits.map(post => <PostSummaryItem key={post._id} post={post}/>)
      }
    </ul>
);
};

export default PostSummaryList;