import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"
const PostSummaryList = () => {
  return (`
  <ul class="navigation-list-group rounded p-0 m-0">
           ${posts.map(post => {
    return(PostSummaryItem(post));
  }).join('')
  }
</ul>
`);
}

export default PostSummaryList;
