"use client";
import { createDeck } from "@/db";
import { Button, Flex, TextField } from "@radix-ui/themes";
import React from "react";

const DeckCreator = () => {
  const [name, setName] = React.useState("");

  const onCreateDeck = async () => {
    if (name.trim() === "") return;
    createDeck(name);
  };
  return (
    <Flex gap={"2"}>
      <TextField.Root
        type="text"
        placeholder="Name your deck"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={(e) => {
          if (e.key !== "Enter") return;
          onCreateDeck();
        }}
        size="3"
        style={{ flexGrow: 1 }}
      >
        <Button onClick={() => onCreateDeck()} size="3">
          Create a New Deck
        </Button>
      </TextField.Root>
    </Flex>
  );
};

export default DeckCreator;
