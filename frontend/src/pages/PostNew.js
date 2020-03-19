import React from "react";
import { Card } from "antd";
import PostNewForm from "components/PostNewForm";
import "./PostNew.scss";

export default function PostNew() {
  return (
    <div className="PostNew">
      <Card title="새 포스팅 쓰기">
        <PostNewForm />
      </Card>
    </div>
  );
}
