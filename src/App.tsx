import * as React from "react";
import { AppDispatch } from "./store/store";
import { useDispatch } from "react-redux";
import { fetchData } from "./store/slices/dataSlice";
import Layout from "@Components/Layout";
import Navbar from "@Components/Navbar";
import "./styles.css";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <Layout>
      <Navbar />
      <h1>Hello, World! :v</h1>
    </Layout>
  );
};

export default App;
