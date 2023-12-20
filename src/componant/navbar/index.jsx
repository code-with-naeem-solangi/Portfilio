import React from 'react'
import "./index.css"
import { Link, NavLink } from 'react-router-dom';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const Nav = () => {
  
const items = [
  {
    label: <Link to={"/"}>Home</Link>,
    key: '0',
  },
  {
    label: <Link to={"/about"}>About Me</Link>,
    key: '1',
  },
  {
    label:  <Link to={"/portfiliao"}>Portfolio</Link>,
    key: '2',
  },
  {
    label:  <Link to={"/contact"}>Contact</Link>,
    key: '3',
  },
];
  return (
    <div>
        <div className="nav">
        <div>
          <h2  style={{ cursor: "pointer" }}>PORTFILIO</h2>
        </div>

        <div className="navcon">
        <NavLink
          to="/"
          className={"mrgn"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "",
              textDecoration: "none",
              padding: isActive ? "2px" : "",
              fontSize: isActive ? "20px" : "",
            };
          }}
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className={"mrgn"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "",
              textDecoration: "none",
              padding: isActive ? "2px" : "",
              fontSize: isActive ? "20px" : "",
            };
          }}
        >
          ABOUT ME
        </NavLink>
        <NavLink
          to="/portfiliao"
          className={"mrgn"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "",
              textDecoration: "none",
              padding: isActive ? "2px" : "",
              fontSize: isActive ? "20px" : "",
            };
          }}
        >
          PORTFILIO
        </NavLink>
        <NavLink
          to="/contact"
          className={"mrgn"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "",
              textDecoration: "none",
              padding: isActive ? "2px" : "",
              fontSize: isActive ? "20px" : "",
            };
          }}
        >
          CONTACT
        </NavLink>
        </div>
        <button className="btn">HIRE ME</button>
      </div>
      {/* mobile nav */}
      <Dropdown  className='mobileview'
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <MenuOutlined/>
      </Space>
    </a>
  </Dropdown>
    </div>
  )
}

export default Nav;