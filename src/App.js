import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ShopContainer from "./components/ShopContainer";
import CountClick from "./components/CountClick";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShopContainer />
        <CountClick />
      </div>
    </Provider>
  );
}

export default App;
