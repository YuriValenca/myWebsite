import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={App()} />
    </Routes>
  );
}

export default RoutesComponent;
