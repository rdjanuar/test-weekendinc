import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Heading, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useCaraousel } from "../hook";

export const Caraousel: React.FC<{ testimonial: Testimonial[] }> = ({
  testimonial,
}) => {
  const {
    handleMouseDown,
    handleMouseLeave,
    handleMouseMove,
    handleMouseUp,
    handleScroll,
    handlePrev,
    ref,
    handleNext,
  } = useCaraousel();
  return (
    <Flex
      justify="space-around"
      gap={{
        lg: 24,
        "2xl": 0,
      }}
    >
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
        cursor="pointer"
        justifyContent="center"
        alignItems="center"
        aria-label="prev"
        onClick={handlePrev}
        w="32px"
        h="32px"
        mt="11px"
        bg="white"
        rounded="full"
        borderColor="green"
        borderWidth={1}
      >
        <ArrowBackIcon />
      </Box>
      <HStack
        as={motion.ul}
        zIndex="999"
        overflowX="scroll"
        css={{
          "&::-webkit-scrollbar": {
            width: 0,
          },
          listStyle: "none",
        }}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
        position="absolute"
        top={-8}
        w={{
          base: "100%",
          lg: "621px",
        }}
        pl="25px"
        borderColor="green"
        borderWidth={{
          base: 0,
          lg: 1,
        }}
        h="194px"
        cursor="grab"
        left="50%"
        right="50%"
        transform="auto"
        translateX={{
          base: "-42%",
          lg: "-50%",
        }}
      >
        {testimonial.map((el) => (
          <Box
            key={el.id}
            as={motion.li}
            bg="white"
            w="247px"
            userSelect="none"
            h="140px"
            pointerEvents="none"
            minW="247px"
            p="20px"
          >
            <VStack align="start">
              <Heading fontWeight="black" fontSize="32px" lineHeight="37.54px">
                {el.by}
              </Heading>
              <Text
                fontSize="12px"
                lineHeight="14.08px"
                color="black"
                fontWeight="normal"
                letterSpacing="-0.43px"
              >
                {el.testimony}
              </Text>
            </VStack>
          </Box>
        ))}
      </HStack>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        aria-label="next"
        onClick={handleNext}
        w="32px"
        mt="11px"
        bg="white"
        h="32px"
        rounded="full"
        borderColor="green"
        borderWidth={1}
      >
        <ArrowForwardIcon />
      </Box>
    </Flex>
  );
};
