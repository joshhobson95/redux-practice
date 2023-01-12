
import './App.css';

function App() {
  return (
    <div className="App">

      <div>
        <p>Redux dispatches Actions. Actions have a type and a payload. The type is describing what "type" of action this is and the payload is the actual data//functions being dispatched. For exmaple type: could be Preform_Task and payload could be "Learn Redux"</p>
        <p>Actions passes these tasks to reducers, that then passes the data/functions to a unmuateable store. Then we can use the useReducer hook to grab things from the store. This allows us to grab data from anywhere is the project without having to pass data with props.</p>
        <p>Redux is only used in bigger projects where lots of data needs to be passed around to lots of components.</p>
        <span>We are going to use Redux Toolkit!! This is the newest and easiest way to use Redux.</span>

      </div>

      
    </div>
  );
}

export default App;
