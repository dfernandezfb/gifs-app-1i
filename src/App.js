import Layout from "./components/Layout/Layout";
import GifsSearch from "./pages/GifsSearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* http://localhost:3333/contacto/argentina */}
          {/* <Route path='/contacto/argentina' element={<GifsSearch />}/> */}
          <Route path='/' element={<PrivateRoute><GifsSearch /></PrivateRoute>}/>
          <Route path='/*' element={<ErrorPage/> }/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
