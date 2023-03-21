import React from "react";
import {House, Search, Bell, Bookmark, Envelope, EmojiSmile, Clipboard, ThreeDots} from "react-bootstrap-icons";

const NavigationSidebar = ({ active = 'explore' }) => {
  return (
    <div className="list-group">
      <a href="tuiter.html" className="list-group-item">Tuiter</a>
      <a href="/home" className={`list-group-item ${active === 'home' ? 'active':''}`}>
        <House className={"m-1 mb-2"} size={20}/>
        Home </a>
      <a href="/tuiter" className={`list-group-item ${active === 'explore' ? 'active':''}`}>
        <Search className={"m-1 mb-2"} size={20}/>
          Explore </a>
      <a href="notifications.html" className={`list-group-item ${active === 'notifications'?'active':''}`}>
        <Bell className={"m-1 mb-2"} size={20}/>
        Notifications </a>
      <a href="messages.html" className={`list-group-item ${active === 'messages'?'active':''}`}>
        <Envelope className={"m-1 mb-2"} size={20}/>
        Messages </a>
      <a href="bookmarks.html" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
        <Bookmark className={"m-1 mb-2"} size={20}/>
        Bookmarks </a>
      <a href="lists.html" className={`list-group-item ${active === 'lists'?'active':''}`}>
        <Clipboard className={"m-1 mb-2"} size={20}/>
        Lists </a>
      <a href="profile.html" className={`list-group-item ${active === 'profile'?'active':''}`}>
        <EmojiSmile className={"m-1 mb-2"} size={20}/>
        Profile </a>
      <a href="more.html" className={`list-group-item ${active === 'more'?'active':''}`}>
        <ThreeDots className={"m-1 mb-2"} size={20}/>
        More </a>
    </div>
  );
};

export default NavigationSidebar;