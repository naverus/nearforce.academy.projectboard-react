import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ProjectBoard from "./components/ProjectBoard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProjectTask from "./components/ProjectTask/AddProjectTask";
import UpdateProjectTask from "./components/ProjectTask/UpdateProjectTask";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={ProjectBoard} />
        <Route exact path="/addProjectTask" component={AddProjectTask} />
        <Route exact path="/updateProjectTask" component={UpdateProjectTask} />
      </div>
    </Router>
  );
}

export default App;
