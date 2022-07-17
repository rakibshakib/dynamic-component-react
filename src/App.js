import "./App.css";
// import AxiosComponent from "./components/Axios/Axios";
// import Formik from "./components/Formik/Formik";
// import Validation from "./components/Validation";
import Container from "@mui/material/Container";
// import ObjectCom from "./components/ObjectCom/ObjectCom";
import RootComponent from "./components/DynamicComponent";

function App() {
  return (
    <div className="App">
      <Container>
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
