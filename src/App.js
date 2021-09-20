import { Route } from 'react-router';
import BackgroundColorChange from './Components/BackgroundColorChange';
import SimpleGreatingWebsiteReact from './Components/SimpleGreatingWebsiteReact';
import Home from './Home';
import CurrentDateAndTime from './Components/CurrentDateAndTime';
import DigitalClock from './Components/DigitalClock';
import IncrementAndDecrement from './Components/IncrementAndDecrement';
import IncrementAndDecrementCT from './Components/IncrementAndDecrementCT';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/backgroundcolorchange" component={BackgroundColorChange} />
      <Route path="/simplegreatingwebsitereact" component={SimpleGreatingWebsiteReact} />
      <Route path="/currentdateandtime" component={CurrentDateAndTime} />
      <Route path="/digitalclock" component={DigitalClock} />
      <Route path="/incrementanddecrement" component={IncrementAndDecrement} />
      <Route path="/incrementanddecrementct" component={IncrementAndDecrementCT} />
    </>
  );
}

export default App;
