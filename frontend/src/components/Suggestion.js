import React from "react";
import "./Suggestion.scss";
import { Button } from "antd";
import Identicon1 from "assets/identicon1.png";

export default function Suggestion({ user, onFollow }) {
  return (
    <div className="suggestion">
      <div className="identicon">
        <img src={Identicon1} />
      </div>
      <div className="user-name">username</div>
      <div className="action">
        <Button onClick={onFollow}>Follow</Button>
      </div>
    </div>
  );
}
