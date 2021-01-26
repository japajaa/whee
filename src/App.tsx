import React from 'react';
import ProductCard from './ProductCard';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import WheeAppBar from './WheeAppBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CartProvider } from "react-hook-cart";


// Mock data used in client. This should be coming from backend...
const mockData = [
  {
    title: "Circle",
    description: "Perfect choice when you don't need any corners.",
    price: "999 €",
    src: "./circle.svg",
    id: "circle1"
  },
  {
    title: "Rectangle",
    description: "For once, It's a great idea to think inside the box.",
    price: "899 €",
    src: "./rectangle.svg",
    id: "rectangle1"
  },
  {
    title: "Triangle",
    description: "A true classic with three elegant corners.",
    price: "1009 €",
    src: "./triangle.svg",
    id: "triangle1"
  }
]

// Create a theme for MaterialUI.
const wheeTheme = createMuiTheme({
  palette: {
    background: {
      default: '#ffffff'
    }
  },
  typography: {
    fontFamily: 'Playfair Display, Roboto, sans-serif, Helvetica',
    h4: {
      fontSize: '2.25rem',
      lineHeight: '3.75rem'
    }
  }
});

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={wheeTheme}>
        <CssBaseline />
        <WheeAppBar />
        <Container>
          {mockData.map((item: any) => <ProductCard key={item.id} id={item.id} src={item.src} title={item.title} description={item.description} price={item.price}/>)}
        </Container>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
