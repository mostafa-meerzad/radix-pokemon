import { Heading } from "@radix-ui/themes";
import React from "react";
import Header from "./components/header";
import {getUser} from "@workos-inc/authkit-nextjs"
const HomePage = async () => {

  const {user} = await getUser
  return (
    <main>
      <Heading>Pokemon Deck Builder</Heading>
      <Header />
    </main>
  );
};

export default HomePage;
