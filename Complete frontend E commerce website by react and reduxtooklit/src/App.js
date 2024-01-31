import React from 'react'
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Carts from './Pages/Carts';
import Loginpage from './Pages/Loginpage';
import Shop from './Pages/Shop';
import Shopcategories from './Pages/Shopcategories';
import Product from './Pages/Product';
import Footer from './Component/Footer/Footer';
import banner_mens from './Component/Assets/banner_mens.png'
import banner_women from './Component/Assets/banner_women.png'
import banner_kids from './Component/Assets/banner_kids.png'
import all_product from './Component/Assets/all_product'
import Store from './Store/Store';
import {Provider} from 'react-redux'
const App = () => {

  return (
   
    <div>
      <Provider  store={Store}>

    
      <BrowserRouter>   
<Navbar></Navbar>
<Routes>
  <Route path='/carts' element={<Carts/>}></Route>
  <Route path='/login' element={<Loginpage/>}></Route>
  <Route path='/' element={<Shop/>}></Route>
  <Route path='/men' element={<Shopcategories category="men"  name={banner_mens} />  } ></Route>
  <Route path='/women' element={<Shopcategories category="women"   name={banner_women}  />}></Route>
  <Route path='/kid' element={<Shopcategories category="kid" name={banner_kids}   />}></Route>
  <Route path='/product' element={<Product/>}>
  <Route path=':productid' element={<Product/>}/>
</Route>

</Routes>
<Footer></Footer>

</BrowserRouter>
</Provider>
    </div>
  )
}



export default App;
