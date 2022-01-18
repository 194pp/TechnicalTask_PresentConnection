import React from "react";
import classes from "./App.module.css";
import {Outlet, useNavigate} from "react-router-dom";
import MyButton from './components/ui/MyButton/MyButton';

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.App}>
      <MyButton title='Posts' solid onClick={() => navigate('/posts')}/>
      <MyButton title='Create new post' solid onClick={() => navigate('/create')}/>
      <Outlet />
    </div>
  );
}

export default App;
