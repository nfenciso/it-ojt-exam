import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ArticleList from "./pages/ArticleList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<ArticleList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
