import './App.css';
import useRouterElement from './hooks/useRouterElement';

function App() {
  const routerElement = useRouterElement();
  return <div className=''>{routerElement}</div>;
}

export default App;
