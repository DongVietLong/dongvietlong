import React from "react";

export default function UserInfo(props) {
  let className = "";

  className += props.isBig ? "button-big" : "button-small";
  className += ` button-${props.type || "default"}`;
  return (
    <button className={className}>
      <span>{props.name}</span>
    </button>
  );
}
