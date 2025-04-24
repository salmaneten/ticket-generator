import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import BackgroundWrapper from "./components/BackgroundWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicketConfirmation from "./components/TicketConfirmation";
function App() {

  return (
    <BrowserRouter basename="/ticketGenerator">
      <BackgroundWrapper>
        <div className="max-w-4xl mx-auto pt-12 px-4 pb-10 flex flex-col items-center justify-center z-20 relative">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Title />
                  <Form />
                </>
              }
            />
            <Route path="/ticket" element={<TicketConfirmation />} />
          </Routes>
        </div>
      </BackgroundWrapper>
    </BrowserRouter>
  );
}

export default App;
