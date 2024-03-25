import React from "react";
import { createEmotionCache } from './utils/create-emotion-cache';
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import VideoLionLoader from "./components/VideoLionLoader";
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from "./theme";

const clientSideEmotionCache = createEmotionCache();

function App() {
  const [loading, setLoading] = React.useState(true);
  const theme = lightTheme();

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ?
          <VideoLionLoader /> :
          <RouterProvider router={router} />
        }
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
