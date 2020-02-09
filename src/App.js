import React, { Suspense, useState } from 'react';
import MainLayout from './styled_components/Layout/MainLayout'; 
import axios from 'axios';
import './App.css';
import Header from './styled_components/Header/Header';
import Logo from './styled_components/Header/Logo';
import Search from './components/Search/Search';
import MainContent from './styled_components/Layout/MainContent';
//lazy loading the components
const Store = React.lazy(() => import('./components/Store/Store'));

function App() {

  const  [products,setProducts] = useState([]);
  const handleSearch = (query)=>
  {
      
      axios.get(`http://localhost:3001/products?q=${query}`).then(response=>{
          console.log(response.data);
          setProducts(response.data);
      })
  }
  return (
    <MainLayout>
        <Header>
          <Logo></Logo>
          <Search ProductsSearched={handleSearch}></Search>
        </Header>
        <MainContent>
          <Suspense fallback={<div>loading.....</div>}>
            <Store _products={products}></Store>
          </Suspense>
        </MainContent>
    </MainLayout>        
  );
}

export default App;
