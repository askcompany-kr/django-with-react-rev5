import React from "react";
import { Card } from "antd";
import Suggestion from "./Suggestion";

export default function SuggestionList() {
  return (
    <Card title="Suggestions for you" size="small">
      <Suggestion />
      <Suggestion />
      <Suggestion />
      <Suggestion />
      <Suggestion />
    </Card>
  );
}
