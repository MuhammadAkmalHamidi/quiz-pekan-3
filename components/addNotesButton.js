import { Flex } from "@chakra-ui/react";

export default function AddNotesButton() {
  return (
    <Flex
      borderRadius={"10px"}
      _hover={{
        transform: "scale(1.03)",
        transition: "0.3s",
        cursor: "pointer",
      }}
      h={"300px"}
      px={"20px"}
      py={"15px"}
      bg={"gray.300"}
      w={"30%"}
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={"100px"}
      fontWeight={"thin"}
      color={"white"}
    >
      +
    </Flex>
  );
}
