"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import InputTask from "./components/InputTask";

export default function Home() {
  return (
    <div>
      <InputTask />
    </div>
  );
}
