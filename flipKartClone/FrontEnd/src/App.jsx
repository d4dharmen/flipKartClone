import "./App.css";
import HomePage from "./pages/homePage/home";
import { LoginPage } from "./pages/loginPage/Login";

function App() {
  return (
    <>
      <HomePage />
      <div className="loginBox">
        <LoginPage />
      </div>
    </>
  );
}

export default App;
