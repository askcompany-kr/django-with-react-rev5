import React from "react";
import { Input, Menu } from "antd";
import { Link } from "react-router-dom";
import "./AppLayout.scss";
import Logo from "assets/logo.png";
import Stories from "./Stories";
import SuggestionList from "./SuggestionList";

function AppLayout({ children }) {
  return (
    <div className="app">
      <div className="header">
        <h1 className="page-title">
          <img src={Logo} alt="logo" />
        </h1>
        <div className="search">
          <Input.Search />
        </div>
        <div className="topnav">
          <Menu mode="horizontal">
            <Menu.Item>
              <Link to="/accounts/login">로그인</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/accounts/signup">회원가입</Link>
            </Menu.Item>
            <Menu.Item>프로필</Menu.Item>
          </Menu>
        </div>
      </div>

      <div className="content">{children}</div>
      <div className="sidebar">
        <Stories style={{ marginBottom: "1rem" }} />
        <SuggestionList />
      </div>
      <div className="footer">&copy; 2020. Ask Company.</div>
    </div>
  );
}

export default AppLayout;
