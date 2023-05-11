import "./App.css";
import MuiLogin from "./component/MuiLogin/MuiLogin";
import DataProvider from "./context/DataProvider";
import HomePage from "./pages/homePage/home";
import { LoginPage } from "./pages/loginPage/Login";

function App() {
  return (
    <> 
    <DataProvider>

      <HomePage />
     {/* < MuiLogin /> */}
    </DataProvider>
   
      

     
    </>
  );
}

export default App;
