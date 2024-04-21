import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import RootLayout from "./components/layout/RootLayout";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<ChatPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Route>
  )
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" className="p-10">
      {isLoggedIn ? (
        <RouterProvider router={appRouter} />
      ) : (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      )}
    </ThemeProvider>
  );
}

export default App;
