import React from "react";
import { createEmotionCache } from './utils/create-emotion-cache';
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import ImageLionLoader from "./components/ImageLionLoader";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const clientSideEmotionCache = createEmotionCache();

function App() {
  const [loading, setLoading] = React.useState(true);

  const theme = createTheme({
    typography: {
      fontFamily: 'Krub, sans-serif',
    },
  });

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ?
          <ImageLionLoader /> :
          <RouterProvider router={router} />
        }
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
