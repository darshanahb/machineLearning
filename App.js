import { BrowserRouter, Route, Routes } from "react-router-dom";
import TabData from "./components/common/Tabs/TabData";
import FileReaderComponent from "./components/Data/FileReaderComponent";
import DescribeTab from "./components/common/Tabs/DescribeTab";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Login from "./components/UserAuth/Login";
import ErrorBoundary from "./components/ErrorHandling/ErrorBoundary";
import MainDashBoard from "./components/common/Tabs/MainDashBoard";

function App() {
  return (
    <>
    <ErrorBoundary>
      {/* Routes component */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainDashBoard />}>
            <Route path="/" element={<FileReaderComponent />}></Route>
            <Route path="dataComponent" element={<TabData />}></Route>
            <Route path="describe" element={<DescribeTab />}></Route>
          </Route>
          <Route path="/profile" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer 
        position="bottom-left"
        autoClose={2000}
        />
        </ErrorBoundary>
    </>
  );
}

export default App;
