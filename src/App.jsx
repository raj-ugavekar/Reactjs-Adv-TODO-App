import "./App.css";
import { TodoContextProvider } from "./context/TodoContext";
import TodoContent from "./components/TodoContent";

function App() {

  return (
    <TodoContextProvider >
      <TodoContent/>
    </TodoContextProvider>
  );
}

export default App;
