import { BrowserRouter, Route, Routes, } from "react-router-dom";
import PATH from "./constants/path"
import Navbar from "./components/common/navbar";
import Home from "./pages/home/Home";
const App = () => {
  return (
    <BrowserRouter>
      <>  
       <Navbar /> 
       {/* <Hero /> */}
        <Routes>
          <Route path={PATH.home} element={<Home />} />
          
        </Routes>
      
   
     
      </>
    </BrowserRouter>
  );
}

export default App
