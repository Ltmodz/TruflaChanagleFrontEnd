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

  const  [productName,setProductName] = useState('');

  return (
    <MainLayout>
        <Header>
          <Logo></Logo>
          <Search ProductsSearched={query => setProductName(query)}></Search>
        </Header>
        <MainContent>
          <Suspense fallback={<div>loading.....</div>}>
            <Store _productName={productName}></Store>
          </Suspense>
        </MainContent>
    </MainLayout>        
  );
}

export default App;
