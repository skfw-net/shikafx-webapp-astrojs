import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "@/theme";

"use client";

export default function Mui({ children }: { children?: React.ReactNode }): React.JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {children}
      </ThemeProvider>
    </>
  );
}