import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import {Checkout} from './components/Checkout'
import {ItemDetailsContainer} from './components/ItemDetailsContainer'
import { NotFound } from './components/NotFound'





export const App = () => {
  return (

      <BrowserRouter>
      <Navbar />
        <Routes>        
          <Route path='/' element={<ItemListContainer />} /> 
          <Route path='/Category/:cid' element={<ItemListContainer />} /> 
          <Route path='/product/:pid' element={<ItemDetailsContainer />} /> 
          <Route path='/Checkout' element={<Checkout />} /> 
          <Route path='*' element={<NotFound />} /> 
        </Routes>
      </BrowserRouter>
      
      

     

  )
}



