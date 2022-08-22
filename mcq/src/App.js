import logo from './logo.svg';
import './App.css';
import Timer from './timer/Timer';
import Question from './question/Question';

function App() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          Column
        </div>
        <div class="col-6">
          <Question />
        </div>
        <div class="col-3">
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default App;
