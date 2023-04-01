import React from "react";
import "../index.css"
import TuitStats from "../tuit-stats";
import {PatchCheckFill} from "react-bootstrap-icons"
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({
      tuit = {
        _id: -1,
        topic: '',
        username: '',
        title: '',
        time: '',
        image: '',
        liked: false,
        replies: '',
        retuits: '',
        likes: '',
        dislikes: '',
        handle: '',
        tuit: '',
      }
    }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return(
      <div className="list-group-item width-100p m-0 p-3 border">
        <div className={"row"}>
            <img className="col-2 h-25 rounded-circle" src={require(`../../../icons/${tuit.image}`)}/>
          <div className="col">
            <div>
              <div className="fw-bold float-left pe-2">{tuit.username}</div>
              <PatchCheckFill className="float-left mt-1 me-1"></PatchCheckFill>
              <div className="color-grey float-left">{tuit.handle}</div>
              <i className="fas fa-circle text-white float-left p-1"></i>
              <div className="float-left"> • {tuit.time} </div>
              <i className="bi bi-x-lg float-end"
                 onClick={() => deleteTuitHandler(tuit._id)}></i>
            </div>
            <br/>
            <div className={"mb-2"}>
              {tuit.tuit}
            </div>
            <TuitStats tuit={tuit}></TuitStats>
          </div>
        </div>
      </div>
  );
};
export default TuitItem;