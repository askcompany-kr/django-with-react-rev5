import React from "react";
import { Card } from "antd";

export default function Stories({ style }) {
  return (
    <Card title="Stories" size="small" style={style}>
      Stories from people you follow will show up here.
    </Card>
  );
}
