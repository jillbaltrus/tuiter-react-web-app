import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
  return (`
      <ul class="navigation-list-group ps-1 rounded cyborg-grey-background rounded">
        <li class="list-group-item fw-bold text-white p-2">
          Who to follow
        </li>
         ${
      who.map(who => {
        return(WhoToFollowListItem(who));
      }).join('')
  }
</ul>
`);
}

export default WhoToFollowList;
