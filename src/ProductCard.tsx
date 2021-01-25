import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useCart } from "react-hook-cart";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: `${theme.spacing(2)}px auto`,
      padding: theme.spacing(1),
      maxWidth: '800px',
      boxShadow: 'none',
      position: 'relative'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 2
    },
    content: {
      flex: '1 0 auto',
      maxWidth: '353px',
      paddingTop: '0px'
    },
    cover: {
      width: 125,
      height: 125
    },
    headerText: {
        fontStyle: 'italic',
        paddingBottom: '0px'
    },
    button: {
        borderRadius: '0px', 
        border: '2px solid black', 
        fontSize: '18px', 
        fontWeight: 700,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    }
  }),
);

interface ProductCardProps {
    title: string;
    description: string;
    price: string;
    src: string;
    id: string;
}

const ProductCard = ({title, description, price, src, id}: ProductCardProps) => {

    const classes = useStyles();
    const theme = useTheme();
    const noImage = useMediaQuery(theme.breakpoints.down('xs'));

    const { addItem } = useCart();    
    return (
      <Card className={classes.root}>
        {noImage ? null : <CardMedia className={classes.cover} image={src} />}
        <div className={classes.details}>
            <CardHeader disableTypography title={<Typography variant="h4" style={{fontWeight: 700}}>{title}</Typography>} className={classes.headerText}/>
            <CardContent className={classes.content}><Typography variant="body2">{description}</Typography></CardContent>
        </div>
        <div className={classes.details} style={{flexGrow: 0, paddingBottom: '24px'}}>
            <Typography variant="h4" style={{textAlign: 'right'}}>{price}</Typography>
            <Button variant="outlined" className={classes.button} onClick={()=>addItem({id: id, price: parseInt(price), title:title, src: src}, 1)}>Add to cart</Button>
        </div>
      </Card>
    );
  }
  
  export default ProductCard;