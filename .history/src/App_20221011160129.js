import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Alert message="Wellcome To Home"/>
          <div className="container m-11">

          <Routes>
            {/* <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route> */}
          </Routes>
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;
