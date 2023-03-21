import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import "./index.css"
import HomeComponent from "./home";

const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter({active}) {
  return (
      <Provider store={store}>
        <div className="row mt-3">
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar active={active}/>
          </div>
          <div className="col-10 col-lg-7 col-xl-6">
            {active === 'explore' ? <ExploreComponent/> : '' }
            {active === 'home' ? <HomeComponent/> : '' }
          </div>
          <div
              className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList/>
          </div>
        </div>
      </Provider>
  )
}

export default Tuiter