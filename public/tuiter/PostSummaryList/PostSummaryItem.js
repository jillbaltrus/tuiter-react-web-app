const PostSummaryItem = (post) => {
  return (`
      <div class="list-group-item width-100p m-0 p-3 cyborg-grey-background">
      <div class="row">
        <div class="col-10">
          <div class="color-grey">${post.topic}</div>
          <div class="float-left fw-bold text-white">${post.userName}</div>
          <i class="fas fa-circle text-white float-left p-1"></i>
          <div class="float-left"> - ${post.time} </div>
          <br>
          <div class="fw-bold text-white">
            ${post.title}
          </div>
        </div>
        <div class="col-2 p-0 pe-2 float-right position-relative">
          <img class="width-100p rounded" src="${post.image}"/>
        </div>
        </div>
      </div>
`);
}
export default PostSummaryItem;