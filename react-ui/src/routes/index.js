import { Route, Switch } from "react-router-dom";
import Contact from "./contact/contact";
import Credits from "./credits/credits";
import Home from "./home/home";
import Insights from "./insights/insights";
import Login from "./login/login";
import Ntask from "./ntask/ntask";
import Ntrack from "./ntrack/ntrack";
import Tasklist from "./tasklist/tasklist";
import Tasksum from "./tasksum/tasksum";
import E404 from "../components/E404"

const Routes = () => {

    return (
        <>
        <Switch>
          <Route 
            exact={true}
            path="/"
            render={() => <Home />}
          />
          <Route 
            exact={true}
            path="/ntrack"
            render={() => <Ntrack />}
          />
          <Route 
            exact={true}
            path="/ntask"
            render={() => <Ntask />}
          />
          <Route 
            exact={true}
            path="/tasklist"
            render={() => <Tasklist />}
          />
          <Route 
            exact={true}
            path="/tasksum"
            render={() => <Tasksum />}
          />
          <Route 
            exact={true}
            path="/insights"
            render={() => <Insights />}
          />
          <Route 
            exact={true}
            path="/login"
            render={() => <Login />}
          />
          <Route 
            exact={true}
            path="/contact"
            render={() => <Contact />}
          />  
          <Route 
            exact={true}
            path="/credits"
            render={() => <Credits />}
          />
          <Route 
            exact={true}
            path="*"
            render={() => <E404 />}
          />
        </Switch>
        </>
    );
};

export default Routes;