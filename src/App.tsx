import * as React from "react";
import { AppDispatch } from "@Store/store";
import { useDispatch } from "react-redux";
import { fetchData } from "@Store/slices/dataSlice";
import Layout from "@Components/Layout";
import Navbar from "@Components/Navbar";
import Home from "@Pages/Home";
import "./styles.css";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <Layout>
      <Navbar />
      <Home />
    </Layout>
  );
};

export default App;
