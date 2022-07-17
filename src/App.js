import "./App.css";
// import AxiosComponent from "./components/Axios/Axios";
// import Formik from "./components/Formik/Formik";
// import Validation from "./components/Validation";
import Container from "@mui/material/Container";
// import ObjectCom from "./components/ObjectCom/ObjectCom";
import RootComponent from "./components/DynamicComponent";
import useCustomHooks from "./Hooks/useCustomHooks";

function App() {
  const [ isActive, handleActiveState2 ] = useCustomHooks();
  console.log(isActive);

  return (
    <div className="App">
      <Container>
        <button onClick={handleActiveState2}>Change Status</button>
        {/* <Formik /> */}
        {/* <FormValidation /> */}
        {/* <Validation /> */}
        {/* <AxiosComponent />
        <ObjectCom /> */}
        <RootComponent />
      </Container>
    </div>
  );
}

export default App;
