import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    
    // Determine if the NavBar and SideBar should be displayed
    const showNavAndSidebar = location.pathname !== '/login';

    return (
      <>
        {/* Conditionally render NavBar and SideBar */}
        {showNavAndSidebar && (
          <>
            <NavBar />
            <SideBar />
          </>
        )}

        <Container>
          {/* Outlet renders the component based on the current route */}
          <Outlet />
        </Container>

        {/* Debugging tool for router */}
        <TanStackRouterDevtools />
      </>
    );
  },
});
