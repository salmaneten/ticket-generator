import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import BackgroundWrapper from "./components/BackgroundWrapper";
function App() {
  return (
    <BackgroundWrapper>
      <div className="max-w-4xl mx-auto pt-12 px-4 flex flex-col items-center justify-center z-20">
        <Title />
        <Form />
      </div>
    </BackgroundWrapper>
  );
}

export default App;
