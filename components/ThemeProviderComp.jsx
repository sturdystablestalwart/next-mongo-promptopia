"use client";
import { ThemeProvider } from "next-themes";

const ThemeProviderComp = ({ children, session }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderComp;
