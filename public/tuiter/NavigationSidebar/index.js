const NavigationSidebar = () => {
  return (`
      <div class="row">
        <div class="list-group mb-2 p-0 pe-lg-3 pe-xl-0 rounded">
          <a href="#" class="list-group-item list-group-item-action height-40">
            <i class="fab fa-twitter float-left m-1"></i>
          </a>
          <a href="#" class="list-group-item list-group-item-action height-40">
            <i class="fas fa-home float-left m-1"></i>
            <div class="float-left d-none d-xl-block">Home</div>
          </a>
          <a href="../explore/index.html" class="list-group-item list-group-item-action active height-40">
            <i class="fas fa-hashtag float-left m-1"></i>
            <div class="float-left d-none d-xl-block">Explore</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action height-40">
            <i class="fas fa-bell float-left m-1"></i>
            <div class="float-left d-none d-xl-block">Notifications</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action height-40">
            <i class="fas fa-envelope float-left m-1"></i>
            <div class="float-left d-none d-xl-block">Messages</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action height-40">
            <i class="fas fa-bookmark float-left m-1"></i>
            <div class="float-left d-none d-xl-block">Bookmarks</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action height-40">
            <i class="fas fa-list float-left m-1"></i>
            <div class="float-left d-none d-xl-block">Lists</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action height-40">
            <i class="fas fa-user float-left m-1"></i>
            <div class="float-left d-none d-xl-block">Profile</div>
          </a>
          <a href="#" class="list-group-item list-group-item-action height-40">
            <i class="fas fa-circle float-left m-1"></i>
            <div class="float-left d-none d-xl-block">More</div>
          </a>
        </div>
      </div>
      <div class="row">
        <button class="btn btn-primary width-100p">
          Tuit
        </button>
      </div>
`);
}

export default NavigationSidebar;