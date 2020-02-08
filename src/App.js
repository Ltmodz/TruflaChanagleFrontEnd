import React from 'react';
import MainLayout from './styled_components/MainLayout';
import SideBar from './styled_components/SideBar';
import Widget from './styled_components/Widget';
import './App.css';
import DepartmentList from './components/Departments/DepartmentList';
import Header from './styled_components/Header/Header';
import Logo from './styled_components/Header/Logo';

function App() {
  return (
    <MainLayout>
        <Header>
          <Logo></Logo>
        </Header>
        <SideBar>
            <DepartmentList></DepartmentList>
        </SideBar>
    </MainLayout>        
  );
}

export default App;
