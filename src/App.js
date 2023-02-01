import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import Korzinka from './pages/Korzinka/Korzinka';
// import Login from './pages/Login/Login';
const App = () => {
  const [count ,setCount] = React.useState(0);

  return (
    <Routes>
      <Route path='/' element={<MainLayout count={count}/>} >
        <Route index element = { <Home setCount = {setCount} />} />
        <Route path = '/korzinka' element={< Korzinka setCount = {setCount} />} />
        {/* <Route path='/login' element={<Login />}/> */}
      </Route>
      <Route path='*' element={<h2>Page is not defined...</h2>}></Route>

    </Routes>
  )
}

export default App;
