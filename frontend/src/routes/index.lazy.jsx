import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there any token
    if (!token) {
      navigate({ to: "/login" });
    }
  }, [navigate, token]);

  return (
    <div className="p-2">
      <h3>Welcome To Wakanda App!</h3>
    </div>
  );
}
