import './App.css';
import UseState from './components/Hooks/useState/UseState';
import UseEffect from './components/Hooks/UseEffect/UseEffect';
import UseRef from './components/Hooks/UseRef/UseRef';
import UseTransition from './components/Hooks/UseTransition/UseTransition';
import UseImperativeHandle from './components/Hooks/UseImperativeHandler/UseImperativeHandle';
import UseDifferendValue from './components/Hooks/UseDifferedValue/UseDifferendValue';
import UseLayoutEffect from './components/Hooks/UseLayoutEffect/UseLayoutEffect';
import UseMemo from './components/Hooks/UseMemo/UseMemo';

function App() {
  return (
    <div className="App">
      <center>
      <UseState/><hr/>
     <UseEffect/><hr/>
     <UseRef/><hr/>
     <UseTransition/><hr/>
     <UseImperativeHandle/><hr/>
     <UseDifferendValue/><hr/>
     <UseLayoutEffect/><hr/>
     <UseMemo/>

      </center>
   
    </div>
  );
}

export default App;
