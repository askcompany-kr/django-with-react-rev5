import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "components/AppLayout";
import Home from "./Home";
import About from "./About";
import AccountsRoutes from "./accounts";

function Root() {
  return (
    <AppLayout>
      최상위 컴포넌트
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/accounts" component={AccountsRoutes} />
    </AppLayout>
  );
}

export default Root;
