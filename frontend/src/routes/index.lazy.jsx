import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarCard from "../components/CarCard";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  <Row className="bg-body-tertiary">
    <div>Hi</div>
    <CarCard />
  </Row>;
}
