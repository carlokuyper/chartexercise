import Header from './components/Header';
import ChartOne from './components/ChartOne';
import ChartTwo from './components/ChartTwo';
import ChartThree from './components/ChartThree';
import ChartFour from './components/ChartFour';
import ChartFive from './components/ChartFive'

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
       <Route path="/" element={<ChartOne />}/>
       <Route path="/ChartTwo" element={<ChartTwo/>}/>
       <Route path="/ChartThree" element={<ChartThree/>}/>
       <Route path="/ChartFour" element={<ChartFour/>}/>
       <Route path="/ChartFive" element={<ChartFive/>}/>
     </Routes>
    </div>
  );
}

export default App;
