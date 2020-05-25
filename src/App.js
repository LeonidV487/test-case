import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

const App = (props) => {
  return (
    <div className="app-wrapper">
        <Header />
        <Form />
        <Footer />
    </div>
  );
}

export default App;
