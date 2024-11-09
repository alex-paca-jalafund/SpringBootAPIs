
import './App.css'
import CreateProudct from './Components/CreateForm/CreateProduct';
import UpdateProduct from './Components/CreateForm/UpdateProduct';
import ProductDetails from './Components/HomePage/ProductDetails';
import ProductList from './Components/HomePage/ProductsList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App () {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/createForm" element={<CreateProudct />} />
      <Route path = "/updateForm/:productId" element={<UpdateProduct/>}/>
      <Route path = "/productDetails/:productId" element= {<ProductDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App
