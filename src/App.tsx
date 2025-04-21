import "./App.css";
import Title from "./components/Title";
function App() {
  return (
    <>
      <div className='min-h-screen w-full bg-[url("./assets/background-desktop.png")] bg-cover bg-center bg-no-repeat'>
        <div className='min-h-screen w-full bg-[url("./assets/pattern-lines.svg")] bg-cover bg-center bg-no-repeat'>
          <Title />
        </div>
      </div>
    </>
  );
}

export default App;
