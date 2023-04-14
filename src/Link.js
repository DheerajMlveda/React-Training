import React from "react";

function Link(props) {
  return (
    <a style={{margin:'30px'}}
      onClick={(event) => {
        event.preventDefault();
        window.history.pushState({}, "", props.pathname);
        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
      }}
      href={props.pathname}
    >                               
      {props.children}
    </a>
  );
}

export default Link;
