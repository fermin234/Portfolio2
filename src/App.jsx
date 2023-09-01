import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ListProjects from "./components/Projects/ListProjects";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";


function App() {

  const [status, setStatus] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (status) {
        setStatus(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [status]);

  return (
    <>
      <Router>
        <Navbar status={status} setStatus={setStatus} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Proyectos" component={ListProjects} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
