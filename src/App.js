import React from 'react';
import MainLayout from './styled_components/MainLayout';
import SideBar from './styled_components/SideBar';
import Widget from './styled_components/Widget';
import './App.css';
import DepartmentList from './components/Departments/DepartmentList';

function App() {
    return ( <
        MainLayout >
        <
        SideBar >
        <
        DepartmentList > < /DepartmentList> <
        /SideBar> <
        /MainLayout>        
    );
}

export default App;