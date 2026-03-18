import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ErrorBoundary } from "./components/ErrorBoundary";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

const Routes = lazy(() => import("./routes"));

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Suspense
            fallback={
              <div style={{ backgroundColor: "#282a36", height: "100vh" }} />
            }
          >
            <Routes />
          </Suspense>
        </ErrorBoundary>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
