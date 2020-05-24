import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

const App = (props) => {
  return (
    <div className="app-wrapper">
        <Header />
        <Form />
    </div>
  );
}

export default App;
