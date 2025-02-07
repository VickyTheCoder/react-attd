import Active from './components/Active';
import LoginScreen from './components/LoginForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (<div>
  <Router>
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/active" element={<Active />} />
    </Routes>
</Router></div>);
}

export default App;