import React from "react";
import { Box, Text, HStack, VStack } from "@chakra-ui/react";
import Icon from "~/assets/image/Icon.png";
import { ChakraImage } from "../shared";

export const Navbar = () => {
  return (
    <Box
      bg="white"
      h="67px"
      display="flex"
      alignItems="center"
      zIndex="modal"
      px={{
        base: "24px",
        lg: 0,
      }}
      justifyContent={{
        base: "start",
        lg: "space-around",
      }}
      position="sticky"
      top={0}
      w="full"
    >
      <HStack spacing="13px">
        <ChakraImage src={Icon.src} width={33} height={33} alt="icon" />
        <VStack align="start" spacing={0}>
          <Text fontSize="12px" lineHeight="14.06px" color="black">
            Good Morning
          </Text>
          <Text
            fontSize="16px"
            lineHeight="18.75px"
            color="black"
            fontWeight="bold"
          >
            Fellas
          </Text>
        </VStack>
      </HStack>
      <div />
    </Box>
  );
};
