import './App.css';
import NavBar from "./component/Navbar";
import AppRouter from "./component/AppRouter";
import Container from '@material-ui/core/Container';
import React from "react";


function App() {
  return (
   <div>
     <NavBar />
     <Container>
       <AppRouter />
     </Container>
   </div>
  );
}

export default App;
