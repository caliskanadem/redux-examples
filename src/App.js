import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux";

function App() {
  const store = createStore(reducer);
  //& store olusturduk
  return (
    <div className="app">
      {/* store ile uygulamayi sarmaladik */}
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
