import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import BarChartIcon from "@material-ui/icons/BarChart";
import ShowChartIcon from "@material-ui/icons/ShowChart";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.palette.text.inherit,
  },
}));

export default function Lista() {
  const classes = useStyles();

  return (
    <List>
      <Link to="/Demanda" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
          <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="Demanda" />
        </ListItem>
      </Link>
      <Link to="/Generacion" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="Generación" />
        </ListItem>
      </Link>
      <Link to="/Precios" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
          <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Precios" />
        </ListItem>
      </Link>
    </List>
  );
}
