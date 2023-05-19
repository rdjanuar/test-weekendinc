import React from "react";
import { Box, Text, chakra } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#0B24FB"
      h="67px"
      w="full"
      display="flex"
      justifyContent={{
        base: "space-between",
        lg: "space-around",
      }}
      alignItems="center"
      px="24px"
    >
      <Text
        fontSize="12px"
        lineHeight="14.08px"
        fontWeight="normal"
        color="white"
      >
        <chakra.span fontWeight="bold">wknd</chakra.span>@
        {new Date().getFullYear()}
      </Text>
      <Box
        w="94px"
        h="18px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        rounded="9px"
        borderColor="white"
        borderWidth={1}
      >
        <Text
          fontSize="10px"
          color="white"
          lineHeight="11.72px"
          fontWeight="light"
        >
          alpha version 0.1
        </Text>
      </Box>
    </Box>
  );
};
