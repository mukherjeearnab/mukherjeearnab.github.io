import { Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Publications from "./pages/Publications";

import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/publications" component={Publications}></Route>
        </div>
    );
}

export default App;
