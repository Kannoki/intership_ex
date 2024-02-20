import {
  Routes,
  Route,
} from "react-router-dom";
import Desktop from "./pages/Desktop";
import { Grid } from 'antd';
import { useAppDispatch } from "./app/hooks";
import { useEffect, useState } from "react";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
    </Routes>
  );
}
export default App;
