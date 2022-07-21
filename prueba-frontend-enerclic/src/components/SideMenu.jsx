import { Drawer, makeStyles, Divider } from "@material-ui/core";
import Lista from "./Lista";

const drawerWidth = 200;

const estilos = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

export default function SideMenu(props) {
  const classes = estilos();

  return (
    <>
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant={props.variant}
        open={props.open}
        onClose={props.onClose ? props.onClose : null}
      >
        <div className={classes.toolbar} />
        <Divider />
        <Lista />
        <Divider />
      </Drawer>
    </>
  );
}
