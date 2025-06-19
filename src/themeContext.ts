import { createContext } from "react";

type Theme = {
    theme: "light" | "dark",
    updateTheme: () => void
}

const ThemeContext = createContext<Theme>({
    theme: "dark",
    updateTheme: () => {}
});


export default ThemeContext;