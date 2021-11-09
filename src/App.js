import logo from './logo.svg';
import './App.css';
import Main from './pages/Main'
import Survey from './pages/Surveys'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="survey" element={<Survey />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
