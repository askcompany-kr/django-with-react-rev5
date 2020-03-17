import React, { useState, useEffect } from "react";
import { Card } from "antd";
import Suggestion from "./Suggestion";
import Axios from "axios";
import { useAppContext } from "store";
import "./SuggestionList.scss";

export default function SuggestionList({ style }) {
  const {
    store: { jwtToken }
  } = useAppContext();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchUserList() {
      const apiUrl = "http://localhost:8000/accounts/suggestions/";
      const headers = { Authorization: `JWT ${jwtToken}` };
      try {
        const { data } = await Axios.get(apiUrl, { headers });
        setUserList(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserList();
  }, []);

  return (
    <div style={style}>
      <Card title="Suggestions for you " size="small">
        {userList.map(suggestionUser => (
          <Suggestion
            key={suggestionUser.username}
            suggestionUser={suggestionUser}
          />
        ))}
      </Card>
    </div>
  );
}
