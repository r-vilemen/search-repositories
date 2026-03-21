import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { useThemeStore } from "./stores/useThemeStore";
import GlobalStyle from "./styles/global";
import { darkTheme, lightTheme } from "./styles/theme";

const Routes = lazy(() => import("./routes"));

function App() {
  const theme = useThemeStore((state) => state.theme);
  const currentTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes />
          </Suspense>
        </ErrorBoundary>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
