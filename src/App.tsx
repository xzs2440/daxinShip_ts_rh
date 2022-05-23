import React from "react";
// import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu
          defaultIndex={"0"}
          onSelect={(index) => {
            console.log(index);
          }}
          mode="vertical"
          defaultOpenSubMenus={['3']}
        >
          <MenuItem>daxin1</MenuItem>
          <MenuItem disabled>daxin2</MenuItem>
          <MenuItem>daxin3</MenuItem>
          <SubMenu title="daxinDrop">
            <MenuItem>drop 1</MenuItem>
            <MenuItem>drop 2</MenuItem>
            <MenuItem>drop 3</MenuItem>
          </SubMenu>
        </Menu>

        <hr />
        <code>const a=33</code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
