import { Provider } from "react-redux";
import store from "./redux/store";
import Image from "./Components/Image";
import Controles from "./Components/Controles";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Image />
        <Controles />
      </div>
    </Provider>
  );
}

export default App;
