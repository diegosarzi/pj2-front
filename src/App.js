import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header";
import BaseFormAluno from "./components/BaseFormAluno";
import ListAluno from "./components/ListAluno";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/aluno' element={<ListAluno url={'/pessoas'}/>} />
            <Route path='/aluno/cadastro' element={<BaseFormAluno />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
