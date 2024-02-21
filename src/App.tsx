import {
  Routes,
  Route,
} from "react-router-dom";
import Desktop from "./pages/auth/Login";
import { NotFound, PrivateRoute } from "./components/Common";

function App() {

  return (
    <Routes>
        <Route path='/login' element={<Desktop />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
}
export default App;
