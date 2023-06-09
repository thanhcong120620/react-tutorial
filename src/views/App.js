import logo from "./logo.svg";
import "./App.scss";

import MyComponent from "./Example/MyComponent.js";
import ListTodo from "./Todos/ListTodo.js";
import Nav from "./Nav/Nav.js";
import Home from "./Nav/Home.js";
import ListUser from "./Users/ListUser.js";
import DetailUser from "./Users/DetailUser.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/todo" element={<ListTodo />} />
            <Route exact path="/about" element={<MyComponent />} />
            <Route exact path="/user-list" element={<ListUser />} />
            <Route exact path="/user-list/:id" element={<DetailUser />} />
          </Routes>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
