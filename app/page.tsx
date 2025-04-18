import { Heading } from "@radix-ui/themes";
import React from "react";
import Header from "./components/header";

const HomePage = () => {
  return (
    <main>
      <Heading>Pokemon Deck Builder</Heading>
      <Header />
    </main>
  );
};

export default HomePage;
