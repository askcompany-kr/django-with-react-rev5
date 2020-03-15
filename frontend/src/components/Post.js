import React from "react";
import { Card } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Identicon1 from "assets/identicon1.png";

function Post({ post, style }) {
  const { caption, location, photo } = post;
  return (
    <div style={style}>
      <Card
        hoverable
        cover={<img src={photo} alt={caption} />}
        actions={[<HeartOutlined />]}
      >
        <Card.Meta
          avatar={
            <div style={{ display: "grid" }}>
              <img src={Identicon1} alt="avatar" style={{ width: "32px" }} />
              <small>username</small>
            </div>
          }
          title={location}
          description={caption}
        />
      </Card>
    </div>
  );
}

export default Post;
