import { Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";

import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Route exact path="/" component={Home}></Route>
        </div>
    );
}

export default App;
