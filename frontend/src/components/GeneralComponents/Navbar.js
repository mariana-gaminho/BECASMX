import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import SecondaryMenu from './SecondaryMenu';
import MenuC from './MenuC';
import { MyContext } from '../../Context'
import AuthService from '../../services/auth'
import { Button } from 'antd'


const Navbar = () => {
  const authService = new AuthService()
  const { logout } = useContext(MyContext)

  const handleLogout = () => {
    authService.logout()
      .then(response => {
        logout()
        localStorage.clear()
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
  <div>
      {/* NAVBAR QUE SIEMPRE APARECE */}
      <div className="navbar">
        <div className="logo">
          <NavLink exact to="/">
            <img src="/Icon.jpg" alt="icon"/>
          </NavLink>
        </div>
        <MyContext.Consumer>
          {({state}) => (
            (!state.user ? 
            <div className="links">
              <NavLink exact to="/" activeClassName = "nav-active">
                Home
              </NavLink>
              <NavLink exact to="/login" activeClassName = "nav-active">
                Login
              </NavLink>
              <NavLink exact to="/signup" activeClassName = "nav-active">
                Signup
              </NavLink>
            </div> :
            <div className="links">
            <NavLink exact to="/" activeClassName = "nav-active">
              Home
            </NavLink>
            <NavLink exact to="/profile" activeClassName = "nav-active">
              Profile
            </NavLink>
            <NavLink  exact to="/">
            <Button className="noBorder" type="ghost" onClick={handleLogout}>Logout</Button>
            </NavLink>
            </div>)
          )}
        </MyContext.Consumer>
      </div>
      
      {/* NAVBAR QUE APARECE DEPENDIENDO DE LA RUTA */}
      <MyContext.Consumer>{
        ({state}) => (state.place === 'Home' ? <MenuC/> : state.place === 'auth' ? <MenuC/>: <SecondaryMenu/>)
      }</MyContext.Consumer>
  </div>
  )
}

export default Navbar
