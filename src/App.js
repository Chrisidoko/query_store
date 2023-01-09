import React, { useState } from "react";
import Home from "./pages/Home";
import "./global_styles/main.scss";
import Navbar from "./components/NavBar/Navbar";
import CardPost from "./components/CardPost/CardPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  }); // this are for passing some function

  return (
    <BrowserRouter>
      <>
        <Navbar />
        {/**my Navbar component. ps: independent of the pages  */}
        <QueryClientProvider client={client}>
          {/* Wrapping in QueryClientProvider so that every component will have access to react query */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<CardPost />} />
          </Routes>
        </QueryClientProvider>
      </>
    </BrowserRouter>
  );
}

export default App;
