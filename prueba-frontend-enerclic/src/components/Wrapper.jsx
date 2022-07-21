import { Hidden, makeStyles } from "@material-ui/core";
import { useState } from "react";
import SideMenu from "./SideMenu";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Demanda from "./Demanda";
import Generacion from "./Generacion";
import Precios from "./Precios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
  },
}));

export default function Wrapper() {
  const classes = useStyles();
  const [abrir, setAbrir] = useState(false);
  const handleSideMenuToggle = () => {
    setAbrir(!abrir);
  };

  return (
    <Router>
      <div className={classes.root}>
        <Navbar handleSideMenuToggle={handleSideMenuToggle} />
        <Hidden xsDown>
          <SideMenu variant="permanent" open={true} />
        </Hidden>
        <Hidden smUp>
          <SideMenu variant="temporary" open={abrir} onClose={handleSideMenuToggle} />
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} /> 
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Demanda" element={<Demanda />} />
              <Route path="Generacion" element={<Generacion />} />
              <Route path="/Precios" element={<Precios />} />
              <Route path="*" element={<h1>Error 404: Not found</h1>} />
            </Routes>
        </main>
      </div>
    </Router>
  );
}
