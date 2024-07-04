import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './component/Home'
import Account from './component/Account'
import Privacy from './component/Privacy'
export default function App() {
  return (
   <>
   
   <Routes>

    <Route path='/' Component={Home}/>
<Route path='/account'Component={Account}/>
<Route path='/privacy' Component={Privacy} />
    </Routes>
   </>
  )
}
