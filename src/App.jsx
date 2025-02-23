import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Components/Home/Home'
import { Instructions } from './Components/Instructions/Instructions'
import { Quiz } from './Components/Quiz/Quiz'
import { V1 } from './Visual/V1'
import { RW1 } from './ReadWrite/RW1'
import { K1 } from './Kinesthetic/K1'
import { A1 } from './Auditory/A1'



function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/instructions" element={<Instructions />}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/v1" element={<V1 />}/>
        <Route path="/rw1" element={<RW1 />}/>
        <Route path="/k1" element={<K1 />}/>
        <Route path="/a1" element={<A1 />}/>
      </Routes>
    </Router>

  )
}


export default App


