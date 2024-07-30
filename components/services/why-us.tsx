import { Flex, Image, Text, Wrap } from "@chakra-ui/react";
type Service = {
  title: string;
  description: string;
  image: string;
};
const data: Service[] = [
  {
    title: "Diagnóstico de DNA",
    description:
      "Temos orgulho em anunciar que fornecemos diagnósticos de alta qualidade para DNA",
    image: "assets/services/dna.svg",
  },
  {
    title: "Seguro",
    description:
      "Você pode adquirir nosso seguro para não se preocupar com dificuldades financeiras no futuro.",
    image: "assets/services/insurance.svg",
  },
  {
    title: "Suporte médico",
    description:
      "Temos uma grande quantidade de medicamentos de alta qualidade da Alemanha",
    image: "assets/services/medical.svg",
  },
  {
    title: "Conquistas do laboratório",
    description:
      "O iMedical tem 12 conquistas laboratoriais que têm impacto mundial na medicina.",
    image: "assets/services/lab.svg",
  },
  {
    title: "Limpeza 24/7",
    description:
      "Nós nos preocupamos em ter quartos limpos e seguros para nossos pacientes.",
    image: "assets/services/clean.svg",
  },
  {
    title: "Rotina de treinamento",
    description:
      "Nossos médicos ajudarão você a obter uma rotina de treinamento pessoal para obter os melhores resultados",
    image: "assets/services/routine.svg",
  },
];

export default function WhyUs() {
  return (
    <Wrap pb={50} spacing="20px" align="center" justify="center">
      {data.map((item) => (
        <Flex
          w={372}
          h={304}
          direction={"column"}
          _hover={{ bg: "#FFF" }}
          alignItems={"flex-start"}
          justifyContent={"center"}
          p={10}
          borderRadius={20}
        >
          <Image src={item.image} alt="service" w={100} h={100} />
          <Text
            mt={5}
            color={"#062126"}
            fontFamily={"'Poppins', sans-serif"}
            fontSize={{ base: "16px", md: "24px" }}
          >
            {item.title}
          </Text>
          <Text
            mt={5}
            color={"#062126"}
            fontFamily={"'Poppins', sans-serif"}
            fontSize={{ base: "16px", md: "16px" }}
          >
            {item.description}
          </Text>
        </Flex>
      ))}
    </Wrap>
  );
}
