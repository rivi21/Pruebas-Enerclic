import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2), //Espaciado a la derecha del icono. Cada número suma 8px. un 3 suponen 24px
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          aria-label="menu"
          color="inherit"
          onClick={() => props.handleSideMenuToggle()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Datos REE 2021
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
