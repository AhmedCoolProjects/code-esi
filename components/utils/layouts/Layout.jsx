import { useMemo } from "react";
import { THEME } from "constants/Colors";
import { Container, CssBaseline, Fab } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Footer from "./Footer";
import { useReactiveVar } from "@apollo/client";
import { isDarkModeVar } from "apollo/ApolloClient";
import { AssignmentRounded } from "@mui/icons-material";
import LeftLayout from "./LeftLayout";
import { useRouter } from "next/router";
import TopHeader from "../TopHeader";
import BottomFooter from "../BottomFooter";

function Layout({ children }) {
  const router = useRouter();
  const isDark = useReactiveVar(isDarkModeVar);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? "dark" : "light",
          primary: THEME.primary,
          secondary: THEME.secondary,
        },
      }),
    [isDark]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <div className="grid grid-cols-12 w-full gap-2">
          <div className="flex-col h-screen col-span-0 md:col-span-3 hidden md:flex  p-3 border-r-[1px] border-gray-400">
            <LeftLayout />
          </div>
          <div className="flex-col h-screen scrollbar-custom overflow-y-auto col-span-12 md:col-span-9 p-3 ">
            <TopHeader />
            {children}
            <BottomFooter />
          </div>
          <Fab
            onClick={() => router.push("/forms")}
            style={{
              zIndex: "1000",
              bottom: 12,
              right: 12,
              position: "fixed",
            }}
            variant="extended"
          >
            <AssignmentRounded color="primary" sx={{ mr: 1 }} />
            Forms
          </Fab>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Layout;
