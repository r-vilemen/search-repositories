export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    shape: string;
    shapeSecondary: string;
    deep: string;
    success: string;
    deeper: string;
    alert: string;
    background: string;
    card: string;
  };
  text: {
    placeholder: string;
    input: string;
    default: string;
    title: string;
  };
  shadow: {
    btn: string;
    server: string;
    wrapper: string;
    filter: string;
    inputFilter: string;
    notifications: string;
    equipament: string;
    scroll: string;
    card: string;
  };
}

export const darkTheme: Theme = {
  colors: {
    primary: "#CED4DA",
    secondary: "#878A99",
    shape: "#212529",
    shapeSecondary: "#292E32",
    deep: "#1A1D21",
    success: "#0F7013",
    deeper: "#7C848A",
    alert: "#d73333",
    background: "#1A1D21",
    card: "#212529",
  },
  text: {
    placeholder: "#878A99",
    input: "#CED4DA",
    default: "#fff",
    title: "#fff",
  },
  shadow: {
    btn: "0px 3px 4px 1px rgba(0, 0, 0, 0.3)",
    server: "0px 5px 6px 2px rgba(0, 0, 0, 0.3)",
    wrapper: "0px 0px 25px 5px rgba(0, 0, 0, 0.3)",
    filter: "0px 5px 6px 1px rgba(0, 0, 0, 0.3)",
    inputFilter: "0px 4px 6px 1px rgba(0, 0, 0, 0.3)",
    notifications: "0px 0px 20px 2px rgb(0, 0, 0, 0.3)",
    equipament: "0px 4px 7px 2px rgb(0, 0, 0, 0.3)",
    scroll: "0px 4px 7px 2px rgb(0, 0, 0, 0.3)",
    card: "0px 4px 10px 2px rgba(0, 0, 0, 0.4)",
  },
};

export const lightTheme: Theme = {
  colors: {
    primary: "#495057",
    secondary: "#6c757d",
    shape: "#ffffff",
    shapeSecondary: "#f8f9fa",
    deep: "#f1f3f5",
    success: "#0F7013",
    deeper: "#adb5bd",
    alert: "#d73333",
    background: "#f1f3f5",
    card: "#ffffff",
  },
  text: {
    placeholder: "#6c757d",
    input: "#212529",
    default: "#212529",
    title: "#212529",
  },
  shadow: {
    btn: "0px 3px 4px 1px rgba(0, 0, 0, 0.15)",
    server: "0px 5px 6px 2px rgba(0, 0, 0, 0.1)",
    wrapper: "0px 0px 25px 5px rgba(0, 0, 0, 0.1)",
    filter: "0px 5px 6px 1px rgba(0, 0, 0, 0.1)",
    inputFilter: "0px 4px 6px 1px rgba(0, 0, 0, 0.1)",
    notifications: "0px 0px 20px 2px rgba(0, 0, 0, 0.1)",
    equipament: "0px 4px 7px 2px rgba(0, 0, 0, 0.1)",
    scroll: "0px 4px 7px 2px rgba(0, 0, 0, 0.1)",
    card: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
  },
};
