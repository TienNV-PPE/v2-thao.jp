import { Fragment } from "react";
import { Routes, Route } from "react-router-dom"

import Home from "@pages/home";
import LoTrinh from "@pages/lo-trinh";

// import { Col, DatePicker } from "antd";
// import { Text } from "./components/text";
// import MasterLayout from "@layouts/masterLayout";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route key={1} path="/lo-trinh" element={ <LoTrinh/> } />
        <Route key={2} path="/" element={ <Home/> } />
      </Routes>
      {/*<MasterLayout/>*/}
      {/*<div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <Text title="Hello AsurRaa" />
          <DatePicker />
        </div>
      </div>*/}
    </Fragment>
  );
};

export default App;
