import React, {useEffect,useContext} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/AuthComponents/Login';
import Signup from './components/AuthComponents/Signup';
import Navbar from './components/GeneralComponents/Navbar';
import Becas from './components/BecasComponents/Becas';
import Premios from './components/PremiosComponents/Premios';
import All from './components/BPC/All';
import DetailBeca from './components/BecasComponents/DetailBeca'
import DetailPremio from './components/PremiosComponents/DetailPremio'
import ByField from './components/BPC/ByField';
import Profile from './components/AuthComponents/Profile';
import CreateBeca from './components/BecasComponents/CreateBeca';
import CreatePremio from './components/PremiosComponents/CreatePremio';
import EditBeca from './components/BecasComponents/EditBeca';
import AuthService from './services/auth'
import {MyContext} from './Context'
import EditPremio from './components/PremiosComponents/EditPremio';

const Router = () => {
  const {login, changeIsLogged} = useContext(MyContext)
  useEffect(() => {
    const service = new AuthService()
      const getProfile = async () => {
        const {data: {user}} = await service.profile()
        login(user)
      }
      getProfile()
  }, [changeIsLogged, login])
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/all" component={All}/>
        <Route exact path="/becas" component={Becas}/>
        <Route exact path="/pc" component={Premios}/>
        <Route exact path="/beca/:id" component={DetailBeca}/>
        <Route exact path="/pc/:id" component={DetailPremio}/>
        <Route exact path="/createBeca" component={CreateBeca}/>
        <Route exact path="/createPremio" component={CreatePremio}/>
        <Route exact path="/editBeca/:id" component={EditBeca}/>
        <Route exact path="/editPremio/:id" component={EditPremio}/>
        <Route exact path="/:type/:field" component={ByField}/>
      </Switch>
    </BrowserRouter>
)}

export default Router
