import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router';
import './App.css';
import ArticleList from "./pages/ArticleList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<ArticleList />} />
        </Routes>
        <Navigate to='/' />
      </BrowserRouter>
    </div>
  );
}

export default App;
