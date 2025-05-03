"use client";

import { Button, Box } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { Toaster } from "@/components/ui/toaster";

import { For, HStack } from "@chakra-ui/react";
const ToastDemo = () => {
  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          toaster.create({
            description: "File saved successfully",
            type: "loading",
          })
        }
      >
        Show Toast
      </Button>
      <Box m={2} />
      <HStack>
        <For each={["success", "error", "warning", "info"]}>
          {(type) => (
            <Button
              size="sm"
              variant="outline"
              key={type}
              onClick={() =>
                toaster.create({
                  title: `Toast status is ${type}`,
                  type: type,
                })
              }
            >
              {type}
            </Button>
          )}
        </For>
      </HStack>
    </>
  );
};
export default ToastDemo;
