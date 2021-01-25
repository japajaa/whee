import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import { useCart } from "react-hook-cart";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    quantityButton: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
    quantityText: {
      display:'inline-block', 
      width:'10px', 
      textAlign: 'center'
    }
  }),
);

interface CartDialogProps {
    onClose: () => void;
    open: boolean;
}

const CartDialog = ({ onClose, open }: CartDialogProps) => {
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const { totalItems, items, removeItem, updateItemQuantity } = useCart();

  return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="shopping-cart-title"
        fullWidth
      >
        <DialogTitle id="shopping-cart-title">Shopping cart</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <List dense>
              {items.map((item) => (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar variant="square" src={item.src} alt={item.title} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${item.title}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="delete" onClick={() => removeItem(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton className={classes.quantityButton} aria-label="remove" onClick={() => updateItemQuantity(item.id, (item.quantity ? (item.quantity - 1): 0))}>
                      <RemoveIcon />
                    </IconButton>
                    <span className={classes.quantityText}>{item.quantity}</span>
                    <IconButton className={classes.quantityButton} aria-label="add" onClick={() => updateItemQuantity(item.id,  (item.quantity ? (item.quantity + 1): 0))}>
                      <AddIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Proceed to checkout
          </Button>
          <Button autoFocus onClick={onClose}>
            Continue shopping
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  export default CartDialog;