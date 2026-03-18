import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              backgroundColor: "#282a36",
              color: "#fff",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <h1>Algo deu errado</h1>
            <p style={{ color: "#ff7043", marginTop: "1rem" }}>
              {this.state.error?.message}
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                marginTop: "2rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#ff7043",
                border: "none",
                borderRadius: "6px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Recarregar Página
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
