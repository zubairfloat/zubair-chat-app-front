import React, { useEffect } from 'react';
import Routes from './routes/index'
import {useDispatch , useSelector} from 'react-redux'
import './App.css';

function App() {
  const dispatch = useDispatch();
  const {layoutMode} = useSelector((state: any) => ({
    layoutMode: state.layout.layoutMode
  }))

  useEffect(() => {
    const getLayoutMode = localStorage.getItem("layoutMode");
    if(getLayoutMode) {
      
    }

  }, [layoutMode , dispatch])
  console.log(layoutMode)
  return  <Routes />
}

export default App;
