const WhoToFollowListItem = (who) => {
  return(`
        <li class="list-group-item height-60">
          <div>
            <img class="float-left icon-pic" src=${who.avatarIcon}/>
            <div class="float-left ms-3">
              <div class="float-left fw-bold text-white">${who.userName}</div>
              <i class="fas fa-circle ms-2 text-white"></i>
              <div class="text-white">@${who.handle}</div>
            </div>
            <button class="btn btn-primary float-right me-3">
              Follow
            </button>
          </div>
        </li>
`);
}
export default WhoToFollowListItem;
