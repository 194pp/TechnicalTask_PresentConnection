import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GetPosts from "./components/routes/GetPosts";
import RouteBack from "./components/routes/RouteBack";
import NewPostForm from "./components/createPost/NewPostForm";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/posts" element={<GetPosts/>}>
            <Route path=":userId" element={<RouteBack/>}/>
          </Route>
          <Route path="/create" element={<NewPostForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
