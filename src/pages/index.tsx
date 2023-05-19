import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import Hero from "~/assets/image/Hero.png";
import Lego from "~/assets/image/Lego.png";
import LegoFooter from "~/assets/image/LegoFooter.png";
import LegoSection from "~/assets/image/LegoSection.png";
import { Footer, Navbar } from "~/components";
import { Caraousel } from "~/fetures/caraousel";
import { http } from "~/lib";

export default function Home({ data }: { data: Data }) {
  return (
    <>
      <Head>
        <title>Weekend - INC</title>
      </Head>
      <Navbar />
      <Box
        as="main"
        bg="#EEBECE"
        pos="relative"
        h={{
          base: "100vh",
          lg: "100%",
        }}
        w="100%"
        overflow="auto"
      >
        <Image
          src={Hero.src}
          width={Hero.width}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "relative",
          }} // optional
          height={Hero.height}
          alt="hero"
        />
        <Flex justify="center">
          <Flex align="center" flexDir="column" pos="absolute" top="67px">
            <Text
              fontSize={{
                base: "52px",
                lg: "62px",
              }}
              lineHeight="51px"
              textAlign="center"
              fontWeight="black"
              color="white"
              m="auto"
            >
              WEEKEND FROM HOME
            </Text>
            <Text
              mt="20px"
              color="white"
              fontSize="16px"
              lineHeight="18.75px"
              fontWeight="semibold"
              fontStyle="italic"
            >
              Stay active with a little workout.
            </Text>
            <Image
              src={Lego.src}
              width={184}
              height={305}
              alt="lego"
              style={{
                marginTop: 67,
                objectFit: "cover",
              }}
            />
            <Button
              w="231px"
              position="absolute"
              h="58px"
              textColor="black"
              fontSize="16px"
              lineHeight="18.75px"
              fontWeight="normal"
              bottom="47px"
              rounded="29px"
              backgroundColor="white"
              dropShadow="0 20px 30px 0px rgba(249, 131, 171, 0.5)"
            >
              Let`s Go
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Box
        position="relative"
        as="section"
        bg="#EEBECE"
        overflow="auto"
        pb={10}
      >
        <Flex
          justify="end"
          as={motion.div}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
          }}
          transformOrigin="0 0"
        >
          <Image
            src={LegoSection.src}
            width={159}
            height={158}
            alt="lego-section"
            style={{
              alignSelf: "center",
            }}
          />
        </Flex>
        <Flex justify="center" mt="25.5px" mx="32px">
          <VStack align="end" spacing="20px">
            <Text
              align="end"
              fontSize={{
                base: "16px",
                md: "21px",
              }}
              lineHeight="32px"
              fontWeight="medium"
              w={{
                base: "311px",
                md: "46ch",
              }}
            >
              <chakra.span color="rgba(11, 36, 251, 1)" fontWeight="bold">
                Deffinition;
              </chakra.span>
              a practice or exercise to test or improve one&apos;s fitness for
              athletic competition, ability, or performance to exhaust
              (something, such as a mine) by working to devise, arrange, or
              achieve by resolving difficulties. Merriam-Webster.com Dictionary.
            </Text>
            <chakra.cite
              textAlign="end"
              fontSize="16px"
              lineHeight="18.75px"
              color="white"
              fontWeight="semibold"
            >
              -weekend team
            </chakra.cite>
          </VStack>
        </Flex>
        <Box
          position="relative"
          w="65%"
          mx={{
            base: 0,
            lg: "auto",
          }}
          display="flex"
          justifyContent="center"
        >
          <Box
            w="89px"
            h="89px"
            rounded="full"
            zIndex={0}
            bg="#0B24FB"
            position="absolute"
            bottom={{
              base: 5,
              lg: 10,
            }}
            left={{
              base: 10,
            }}
          />
          <Text
            ml={{
              base: "32px",
              md: 0,
            }}
            mt="84px"
            position="relative"
            zIndex="1"
            fontSize="32px"
            color="white"
            lineHeight="37.5px"
            align={{
              base: "start",
              md: "center",
            }}
            fontWeight="black"
            dropShadow="0 20px 30px 0px rgba(249, 131, 171, 0.5)"
          >
            Testimonial
          </Text>
        </Box>
      </Box>

      <Box bg="black" h="100%" position="relative">
        <Caraousel testimonial={data.testimonial} />

        <Flex flexDirection="column" gap="67px">
          <VStack
            spacing="30px"
            mx="32px"
            align={{
              base: "start",
              sm: "center",
            }}
          >
            <Text
              fontSize="32px"
              mt="calc(67px * 3.25)"
              color="white"
              fontWeight="black"
              lineHeight="37.5px"
            >
              POV
            </Text>
            <Text
              color="white"
              align={{
                base: "start",
                md: "center",
              }}
              fontSize="16px"
              lineHeight="24px"
              maxW={{
                base: "311px",
                md: "619px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </Text>
          </VStack>
          <VStack
            spacing="30px"
            mx="32px"
            align={{
              base: "start",
              sm: "center",
            }}
          >
            <Text
              fontSize="32px"
              mt="67px"
              color="white"
              fontWeight="black"
              lineHeight="37.5px"
            >
              Resource
            </Text>
            <Text
              color="white"
              align={{
                base: "start",
                md: "center",
              }}
              fontSize="16px"
              lineHeight="24px"
              maxW={{
                base: "311px",
                md: "619px",
              }}
            >
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best
            </Text>
          </VStack>
          <VStack
            spacing="30px"
            mx="32px"
            align={{
              base: "start",
              sm: "center",
            }}
          >
            <Text
              fontSize="32px"
              mt="67px"
              color="white"
              fontWeight="black"
              lineHeight="37.5px"
            >
              Help & Tips
            </Text>
            <Stack
              direction={{
                base: "column",
                md: "row",
              }}
              spacing={2}
            >
              {data.tips.map((el) => (
                <Box
                  key={el.id}
                  w="full"
                  position="relative"
                  h="177.5px"
                  borderColor="green"
                  borderWidth={1}
                >
                  <Image
                    src={el.image}
                    width={311}
                    height={176}
                    alt="list"
                    style={{
                      maxWidth: "311px",
                      width: "100%",
                      height: "176px",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    position="absolute"
                    bottom={0}
                    bg="rgba(0, 0, 0, 0.5)"
                    h="72px"
                    w="full"
                    py="17px"
                    pl="25px"
                    pr="20px"
                    display="flex"
                    alignItems="center"
                  >
                    <Text
                      fontSize="16px"
                      w="90%"
                      color="white"
                      overflowWrap="break-word"
                      whiteSpace="pre-line"
                      lineHeight="18.75px"
                      fontWeight="bold"
                    >
                      {el.title}
                    </Text>
                    <Box
                      w="32px"
                      display="flex"
                      justifyContent="center"
                      h="32px"
                      rounded="full"
                      alignItems="center"
                      borderColor="green"
                      bg="white"
                      borderWidth={1}
                    >
                      <ArrowForwardIcon color="#0B24FB" />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Stack>
            <VStack
              spacing="30px"
              mx="32px"
              align={{
                base: "start",
                md: "center",
              }}
            >
              <Text
                fontSize="32px"
                mt="67px"
                color="white"
                fontWeight="black"
                lineHeight="37.5px"
              >
                You’re all set.
              </Text>
              <Text
                align={{
                  base: "start",
                  md: "center",
                }}
                color="white"
                fontSize="16px"
                lineHeight="24px"
                w={{
                  base: "311px",
                  lg: "619px",
                }}
              >
                The wise man therefore always holds in these matters to this
                principle of selection.
              </Text>
            </VStack>
          </VStack>
          <Box w="253px" h="337px">
            <Image
              src={LegoFooter.src}
              width={LegoFooter.width}
              height={LegoFooter.height}
              alt="lego-footer"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const testimonial = await http<{ name: string }>("GET", {
    url: "testimonial",
  });
  const tips = await http<{ name: string }>("GET", {
    url: "help-tips",
  });

  return {
    props: {
      data: {
        testimonial,
        tips,
      },
    },
  };
};
