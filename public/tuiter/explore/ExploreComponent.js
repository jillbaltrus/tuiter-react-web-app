import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
  return(`
<div class="row">
        <div class="col-11 position-relative">
          <input class="form-control ps-5"
                 placeholder="Search Tuiter"
                 type="text">
          <i class="fas fa-search position-absolute top-11-left-30"></i>
        </div>
        <div class="col-1 p-0">
          <i class="fas fa-cog fa-2x width-100p" style="color: royalblue"></i>
        </div>
      </div>

      <ul class="nav nav-tabs mt-2 mb-2">
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="d-none d-md-block nav-item">
          <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
      </ul>
      <div class="position-relative">
        <img class="width-100p pb-2" src="../icons/spacexstarship.png"/>
        <h3 class="fw-bold fs-50 position-absolute bottom-5-left-5 color-cyborg-grey">SpaceX's Starship</h3>
      </div>
      
${PostSummaryList()}
`);
}
export default ExploreComponent;