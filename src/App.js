import React  from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = (props) => {
  // debugger;
  return (
      <div className="app-wrapper">
        <Header {...props.HeaderPage}/>
        <Menu {...props.MenuPage}/>
        <Main {...props.MainPage}/>
        <Footer {...props.FooterPage}/>
      </div>
  );
}

export default App;
