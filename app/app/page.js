"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import InputTask from "./components/InputTask.jsx";
// import ItemList from "./components/ItemList";

export default function Home() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center vh-10">
      <h1>To-Do-List</h1>
      <div id="color" className="h-50 w-75 border border-3 border-secondary">
        <InputTask />
      </div>
    </div>
  );
}
