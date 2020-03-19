import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import PostList from "components/PostList";
import AppLayout from "components/AppLayout";
import StoryList from "components/StoryList";
import SuggestionList from "components/SuggestionList";

function Home() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/posts/new");
  };

  const sidebar = (
    <>
      <Button
        type="primary"
        block
        style={{ marginBottom: "1rem" }}
        onClick={handleClick}
      >
        새 포스팅 쓰기
      </Button>
      <StoryList style={{ marginBottom: "1rem" }} />
      <SuggestionList />
    </>
  );

  return (
    <AppLayout sidebar={sidebar}>
      <PostList />
    </AppLayout>
  );
}

export default Home;
