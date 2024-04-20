import React from "react";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import CustomTitleBar from "./components/layout/CustomTitleBar";
import Sidebar from "./components/layout/Sidebar";
import { Dashboard } from "./components/test/Dashboard";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" className="p-10">
      <CustomTitleBar />
      <Sidebar />
      {/* <Dashboard /> */}
    </ThemeProvider>
  );
}

export default App;
