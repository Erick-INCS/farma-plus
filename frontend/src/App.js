import "./App.css";
import Login from "./components/login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/menu/menu";

function App() {
    return (
        <BrowserRouter>
	    <div className="App">
		<Switch>
		    <Route path="/login">
			<Login></Login>
		    </Route>

		    <Route path="/">
			<Menu></Menu>
		    </Route>
		</Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
