import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableData from "./Component/TableData";


function App() {

  return (
    <>
    <BrowserRouter>
    <div className="App" >
      <Routes>

      <Route path="/" element={<TableData/>}/>

      </Routes>

    </div>
    
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
