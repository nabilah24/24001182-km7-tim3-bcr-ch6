import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Navbar */}
      <NavBar />

      <Container>
        {/* Outlet is to detect the pathname or url and then render the component by pathname or url */}
        <Outlet />
      </Container>

      {/* This is for debugging router */}
      <TanStackRouterDevtools />
    </>
  ),
});
