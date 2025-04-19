import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import Header from "./components/header";
import {
  getSignInUrl,
  getSignUpUrl,
  withAuth,
} from "@workos-inc/authkit-nextjs";
import Link from "next/link";
import DeckCreator from "@/components/deck-creator";
import { getDecks } from "@/db";

const HomePage = async () => {
  const { user } = await withAuth();
  const signInUrl = await getSignInUrl();
  const signupUrl = await getSignUpUrl();
  const decks = await getDecks();

  if (!user) {
    return (
      <>
        <Link href={signupUrl}>Sign up</Link>
        <Link href={signInUrl}> Sing in</Link>
      </>
    );
  }
  return (
    <main>
      {/* <Heading>Pokemon Deck Builder</Heading> */}
      <Header />
      <Heading>Pokemon Deck Builder</Heading>
      <DeckCreator />

      <Flex direction={"column"} gap={"3"}>
        {decks.map((deck) => (
          <Card key={deck.id} my="2">

            <Link href={`/deck/${deck.id}`}>
            <Heading as="h2">{deck.name}</Heading> </Link>
            <Box p="2">
              {decks.length > 2 ? (<Text>Cards Here</Text>): <Box mb={"3"}>
                <Text>No Pokemon in this deck, yet. You should add </Text>
                </Box>}
            </Box>
          </Card>
        ))}
      </Flex>
    </main>
  );
};

export default HomePage;
