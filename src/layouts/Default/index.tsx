import React from "react";


// actions

// components
// import SideMenu from "./SideMenu";
// import { useDispatch } from "react-redux";

interface IndexProps {
  children: any;
}
const Index = (props: IndexProps) => {
  // const dispatch = useDispatch();

  /*
  call dark/light mode
  */
  // const onChangeLayoutMode = (value: any) => {
    
  // };

  return (
    <div className="layout-wrapper d-lg-flex">
      {/* side menu */}
      {/* <SideMenu onChangeLayoutMode={onChangeLayoutMode} /> */}

      {props.children}
    
    </div>
  );
};

export default Index;
