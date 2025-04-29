import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundWrapper from "./components/BackgroundWrapper";
import HomePage from "./pages/HomePage";
import TicketConfirmation from "./pages/TicketConfirmation";
function App() {
  return (
    <Router basename="/ticketGenerator">
      <BackgroundWrapper>       
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ticket" element={<TicketConfirmation />} />
          </Routes>
      </BackgroundWrapper>
    </Router>
  );
}

export default App;