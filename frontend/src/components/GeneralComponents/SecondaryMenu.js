import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { MyContext } from '../../Context'

const SecondaryMenu = () => {
  const [current, setCurrent] = useState('Main')

   const handleClick = e => {
    setCurrent(e.key)
  }

    return (
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
        <Menu.Item key="Main">
          <MyContext.Consumer>
            {({state})=> (state.place === 'Becas' || state.place === 'becas' ? 
            <NavLink exact to="/becas">
              <Icon type="container" />
              <MyContext.Consumer>{({state})=>(state.place).toUpperCase()}</MyContext.Consumer>
            </NavLink> :               
            <NavLink exact to="/pc">
              <Icon type="container" />
              <MyContext.Consumer>{({state})=>state.place.toUpperCase()}</MyContext.Consumer>
            </NavLink>)}
          </MyContext.Consumer>
        </Menu.Item>

        <Menu.Item key="literatura">
        <MyContext.Consumer>
            {({state})=> (state.place === 'Becas' || state.place === 'becas' ? 
            <NavLink exact to="/becas/literatura">
                Literatura
            </NavLink> :               
            <NavLink exact to="/premios/literatura">
                Literatura
            </NavLink>)}
          </MyContext.Consumer>
        </Menu.Item>

        <Menu.Item key="cienciaytecnología">
        <MyContext.Consumer>
            {({state})=> (state.place === 'Becas' || state.place === 'becas' ? 
            <NavLink exact to="/becas/cienciaytecnologia">
                Ciencia y tecnología
            </NavLink> :               
            <NavLink exact to="/premios/cienciaytecnologia">
                Ciencia y tecnología
            </NavLink>)}
          </MyContext.Consumer>
        </Menu.Item>

        <Menu.Item key="educacion">
        <MyContext.Consumer>
            {({state})=> (state.place === 'Becas' || state.place === 'becas' ? 
            <NavLink exact to="/becas/educacion">
                Educación
            </NavLink> :               
            <NavLink exact to="/premios/educacion">
                Educación
            </NavLink>)}
          </MyContext.Consumer>
        </Menu.Item>

        <Menu.Item key="emprendimiento">
        <MyContext.Consumer>
            {({state})=> (state.place === 'Becas' || state.place === 'becas' ? 
            <NavLink exact to="/becas/emprendimiento">
                Emprendimiento
            </NavLink> :               
            <NavLink exact to="/premios/emprendimiento">
                Emprendimiento
            </NavLink>)}
          </MyContext.Consumer>
        </Menu.Item>

        <Menu.Item key="arteycultura">
        <MyContext.Consumer>
            {({state})=> (state.place === 'Becas' || state.place === 'becas' ? 
            <NavLink exact to="/becas/arteycultura">
                Arte y cultura
            </NavLink> :               
            <NavLink exact to="/premios/arteycultura">
                Arte y cultura
            </NavLink>)}
          </MyContext.Consumer>
        </Menu.Item>

        <Menu.Item key="otros">
        <MyContext.Consumer>
            {({state})=> (state.place === 'Becas' || state.place === 'becas' ? 
            <NavLink exact to="/becas/otros">
                Otros
            </NavLink> :               
            <NavLink exact to="/premios/otros">
                Otros
            </NavLink>)}
          </MyContext.Consumer>
        </Menu.Item>
      </Menu>
    )
  }

  export default SecondaryMenu
