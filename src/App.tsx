import { Route, Routes,  } from 'react-router-dom';
import People from './components/People';
import Person from './components/Person';

function App() {
  return (
    <main>
    
        <Routes>
          <Route path='/' element={<People/>}/>
          <Route path='/person/:name' element={<Person/>}/>
        </Routes>
     
    </main>
  );
}

export default App;
