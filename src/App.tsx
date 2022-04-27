import React from 'react';
import Routing from './routing/Routing';
import { ClothesProvider } from './contexts/ClothesContext';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
   
    <div className="App" style = {{maxWidth:"30rem", margin: "4rem auto"}}>      
        <ClothesProvider>
          <Routing/>
        </ClothesProvider>      
    </div>
  );
}

export default App;
