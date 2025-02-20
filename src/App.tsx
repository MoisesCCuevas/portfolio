import * as React from "react";
import { AppDispatch } from "@Store/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@Store/store";
import { fetchData } from "@Store/slices/dataSlice";
import { fetchProjects } from "@Store/slices/projectsSlice";
import { fetchSkills } from "@Store/slices/skillsSlice";
import Navbar from "@Components/Navbar";
import NavbarMini from "@Components/NavbarMini";
import Home from "@Pages/Home";
import About from "@Pages/About";
import Projects from "@Pages/Projects";
import Skills from "@Pages/Skills";
import Loader from "@Components/Loader";
import "./styles.css";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.ui.loading);
  const theme = useSelector((state: RootState) => state.ui.theme);

  React.useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchProjects());
    dispatch(fetchSkills());
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center select-none ${theme}`}>
      {loading && <Loader />}
      <Navbar />
      <NavbarMini />
      <Home />
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

export default App;
