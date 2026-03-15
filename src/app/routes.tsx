import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { FormPage } from "./components/FormPage";
import { Footer } from "./components/Footer";

// Layout wrapper component to include footer on all pages
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <HomePage />
      </RootLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <RootLayout>
        <LoginPage />
      </RootLayout>
    ),
  },
  {
    path: "/form",
    element: (
      <RootLayout>
        <FormPage />
      </RootLayout>
    ),
  },
]);
