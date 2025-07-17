import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import Header from "./partials/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
