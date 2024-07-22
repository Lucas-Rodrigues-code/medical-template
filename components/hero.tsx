"use client";
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoPeople } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { PiTextItalicDuotone } from "react-icons/pi";
import { SlCalender, SlEnvolopeLetter } from "react-icons/sl";

export default function Hero() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
        lg: "repeat(2, 1fr)",
      }}
      gap={["2%", "2%", "1%", "1%", "1%", "25%"]}
      mt={90}
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={10}
    >
      <Box display={{ base: "flex", md: "flex", lg: "none" }}>
        <Image src="assets/hero/hero2.png" alt="hero" />
      </Box>
      <Box
        display={{ base: "flex", md: "block" }}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Text
          as={"h1"}
          color={"#062126"}
          fontFamily={"'Poppins', sans-serif"}
          fontSize={{ base: "48px", md: "72px" }}
          fontWeight={"700"}
          lineHeight={"1.2"}
        >
          Sinta conforto
          <br /> Seja saudável
        </Text>
        <Text
          color={"#062126"}
          fontFamily={"'Poppins', sans-serif"}
          fontSize={{ base: "16px", md: "20px" }}
          mt={30}
        >
          Nossa equipe profissional cuidará de você,
          <br /> valorizamos seu tempo e saúde.
        </Text>
        <Box
          w={{ base: "366px", md: "624px" }}
          h={{ base: "372px", md: "233px" }}
          bg={"#F4F5F4"}
          borderRadius={"20PX"}
          mt={30}
        >
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            w={"624px"}
            h={"233px"}
            padding={30}
            gap={10}
          >
            <Flex>
              <SlCalender color="#CF7D4E" size={30} />
              <Stack
                ml={2}
                fontFamily={"'Poppins', sans-serif"}
                fontSize={"16px"}
                color={"#384D52"}
              >
                <Text fontWeight={"700"}>Faça um agendamento</Text>
                <Text fontSize={"14px"}>Selecione o melhor dia para você</Text>
              </Stack>
            </Flex>
            <Flex>
              <IoPeople color="#CF7D4E" size={30} />
              <Stack
                ml={2}
                fontFamily={"'Poppins', sans-serif"}
                fontSize={"16px"}
                color={"#384D52"}
              >
                <Text fontWeight={"700"}>Ache o melhor médico</Text>
                <Text fontSize={"14px"}>Ache o melhor médico em um minuto</Text>
              </Stack>
            </Flex>
            <Flex>
              <MdLocationOn color="#CF7D4E" size={30} />
              <Stack
                ml={2}
                fontFamily={"'Poppins', sans-serif"}
                fontSize={"16px"}
                color={"#384D52"}
              >
                <Text fontWeight={"700"}>Visite a clínica</Text>
                <Text fontSize={"14px"}>Cuide dos seus problemas</Text>
              </Stack>
            </Flex>
            <Flex>
              <SlEnvolopeLetter color="#CF7D4E" size={30} />
              <Stack
                ml={2}
                fontFamily={"'Poppins', sans-serif"}
                fontSize={"16px"}
                color={"#384D52"}
              >
                <Text fontWeight={"700"}>Pergunte</Text>
                <Text fontSize={"14px"}>Faça perguntas a qualquer momento</Text>
              </Stack>
            </Flex>
          </Grid>
        </Box>
        <Button
          w={"297px"}
          h={"67px"}
          borderRadius={"30px"}
          mt={30}
          bg="#24BEE0"
          _hover={{ bg: "green.500" }}
        >
          Fazer agendamento
        </Button>
      </Box>

      <Box display={{ base: "none", md: "none", lg: "flex" }}>
        <Image src="assets/hero/hero.png" alt="hero" w={"473px"} h={"821px"} />
      </Box>
    </Grid>
  );
}
