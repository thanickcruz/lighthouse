import WelcomePage from '../pages/WelcomePage'; 
import InsuranceOptions from '../pages/InsuranceOptions'; 
import FormPage2 from '../pages/FormPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<WelcomePage />} /> 
      <Route path="/form" element={<FormPage2 />} /> 
      <Route path="/insurance-options" element={<InsuranceOptions />} /> 
      </Routes>
    </Router>
  );
};

export default App;
