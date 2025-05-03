import { Box } from "@chakra-ui/react";

const BoxDemo = () => {
  return (
    <>
      <Box background="blue" width="100%" padding="4" color="white">
        This is the Box
      </Box>
      <br />
      <Box bg="gray" w="100%" p="4" color="white" _hover={{ bg: "red" }}>
        Hover on me!
      </Box>
    </>
  );
};

export default BoxDemo;
