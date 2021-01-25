import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useCart } from "react-hook-cart";
import CartDialog from './CartDialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cartButton: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      color: "#ebebeb",
      backgroundColor: "#000000"
    },
    title: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center'
    },
    inlineText: {
      display: 'inline',
      fontFamily: 'Playfair Display',
      fontStyle: 'italic',
      fontSize: '16px',
      paddingLeft: theme.spacing(6)
    },
    whee: {
      display: 'inline',
      fontFamily: 'Pacifico',
      fontSize: '66px'
    },
    appBar: {
      background: `linear-gradient(-135deg, #e2e2e2 30px, transparent 0) 0 30px, linear-gradient(135deg, #e2e2e2 30px, ${theme.palette.background.default} 0) 0 30px, linear-gradient(0deg, pink 0%, green 100%)`,
      backgroundPosition: "left bottom",
      backgroundColor: "#e2e2e2",
      backgroundRepeat: "repeat-x",
      backgroundSize: "60px 60px",
      boxShadow: "none",
      height: '150px',
      color: '#000000'
    }
  }),
);

const WheeAppBar = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const hideDescription = useMediaQuery(theme.breakpoints.down('xs'));
  const { totalItems } = useCart();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <div className={classes.title}>
            <Typography variant="h6" className={classes.whee}>
              whee
            </Typography>
            {!hideDescription ? 
            <Typography variant="h6" className={classes.inlineText}>
              The most definitive shape store in the world
            </Typography> : null }
          </div>
          <Typography variant="body2" className={classes.inlineText}>
            {totalItems === 0 ? 'No items in cart' : `${totalItems} item(s) in cart`}
          </Typography>
          <IconButton className={classes.cartButton} aria-label="shoppingCart" onClick={handleClickOpen}>
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <CartDialog open={open} onClose={handleClose} />
    </>
  );
}
  
  export default WheeAppBar;