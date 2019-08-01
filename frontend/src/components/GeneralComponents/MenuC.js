import React, {Component} from 'react'
import { Menu, Icon } from 'antd'
import {NavLink} from 'react-router-dom'

const { SubMenu } = Menu

export default class MenuC extends Component {
  state = {
    current: '',
  }

  handleClick = e => {
    if(e.key === 'all'){
      this.setState({current:''})
    } else {
    this.setState({
      current: e.key
    })}
  }

  render(){
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
          <Menu.Item key='all'>
            <NavLink exact to="/all">
            <Icon type="smile" />Todos
            </NavLink>
          </Menu.Item>

        <SubMenu key="becas"
          title={   
            <span className="submenu-title-wrapper">
            <Icon type="container" />
            Becas
            </span>    
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="Todas">
              <NavLink exact to="/becas">
                Todas
              </NavLink>
            </Menu.Item>

            <Menu.Item key="Literatura">
              <NavLink exact to="/becas/literatura">
                Literatura
              </NavLink>
            </Menu.Item>

            <Menu.Item key="Ciencia y tecnología">
              <NavLink exact to="/becas/cienciaytecnologia">
                Ciencia y tecnología
              </NavLink>
            </Menu.Item>

            <Menu.Item key="Educación">
              <NavLink exact to="/becas/educacion">
                Educación
              </NavLink>
            </Menu.Item>

            <Menu.Item key="Emprendimiento">
              <NavLink exact to="/becas/emprendimiento">
                Emprendimiento
              </NavLink>
            </Menu.Item>

            <Menu.Item key="Arte y cultura">
              <NavLink exact to="/becas/arteycultura">
                Arte y cultura
              </NavLink>
            </Menu.Item>

            <Menu.Item key="Otros">
              <NavLink exact to="/becas/otros">
                Otros
              </NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu key="pc"
          title={
            <span className="submenu-title-wrapper">
              <Icon type="container" />
              Premios y Concursos
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="Todos">
              <NavLink exact to="/pc">
                Todos
              </NavLink>
            </Menu.Item>

            <Menu.Item key="Literatura">
              <NavLink exact to="/premios/literatura">
                Literatura
              </NavLink>
            </Menu.Item>

            <Menu.Item key="Ciencia y tecnología">
              <NavLink exact to="/premios/cienciaytecnologia">
                Ciencia y tecnología
              </NavLink>
            </Menu.Item>

            <Menu.Item key="Educación">
              <NavLink exact to="/premios/educacion">
                Educación
              </NavLink>
            </Menu.Item>

            <Menu.Item key="Emprendimiento">
              <NavLink exact to="/premios/emprendimiento">
                Emprendimiento
              </NavLink>
            </Menu.Item>

            <Menu.Item key="Arte y cultura">
              <NavLink exact to="/premios/arteycultura">
                Arte y cultura
              </NavLink>
            </Menu.Item>

            <Menu.Item key="Otros">
              <NavLink exact to="/premios/otros">
                Otros
              </NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    )
  }
}

