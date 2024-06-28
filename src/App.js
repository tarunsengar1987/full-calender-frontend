import './App.css';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";
import persistStore from "redux-persist/es/persistStore";
import Calanader from './components/Calanader';

function App() {
  const persisted = persistStore(store);

  return (

    <Provider store={store}>
      <PersistGate persistor={persisted}>
        <Calanader/>
      </PersistGate>
    </Provider>
  );
}

export default App;
