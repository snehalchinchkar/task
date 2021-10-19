import React from 'react'
import {BrowserRouter ,Switch, Route } from 'react-router-dom'
import Adduser from './component/adduser'
import Delete from './component/delete'
import Edituser from './component/edituser'
import Home from './component/home'
import Nav from './component2/nav'
import Coursal from './component2/coursal'
import Wwe from './component2/card'
import Footer from './component2/footer'
const app = () => {
    return (
        
        // <BrowserRouter>
        // <switch>
        // <Route exact path='/' component={Home}/>
        // <Route exact path='/add' component={Adduser}/>
        // <Route exact path='/edit/:id' component={Edituser}/>
       
        // </switch>
     // </BrowserRouter>
     <>
<Nav/>
<Coursal/>
<Wwe/>
<Footer/>
     </>       
        
    )
}

export default app


