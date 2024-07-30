"use client";
import { Flex, Grid, Image, Text, Wrap } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper/modules";
import useWindowSize from "@/hooks/useWindowSize";
import WhyUs from "./why-us";

export default function Services() {
  const { width } = useWindowSize();

  return (
    <Flex w={"100%"} pb={50} direction={"column"}>
      <Text
        color={"#062126"}
        fontFamily={"'Poppins', sans-serif"}
        fontSize={{ base: "16px", md: "48px" }}
        mb={15}
      >
        Nossos serviços
      </Text>
      <Swiper
        slidesPerView={width < 1024 ? 2 : 3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mySwiperSlide">
          <Flex direction={"column"} alignItems={"flex-start"}>
            <Image src="assets/services/Rectangle5.png" alt="service" />
            <Text
              mt={5}
              color={"#062126"}
              fontFamily={"'Poppins', sans-serif"}
              fontSize={{ base: "16px", md: "24px" }}
            >
              Cuidado imediato
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <Flex direction={"column"} alignItems={"flex-start"}>
            <Image src="assets/services/Rectangle6.png" alt="service" />
            <Text
              mt={5}
              color={"#062126"}
              fontFamily={"'Poppins', sans-serif"}
              fontSize={{ base: "16px", md: "24px" }}
            >
              Cuidado dental
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <Flex direction={"column"} alignItems={"flex-start"}>
            <Image src="assets/services/Rectangle7.png" alt="service" />
            <Text
              mt={5}
              color={"#062126"}
              fontFamily={"'Poppins', sans-serif"}
              fontSize={{ base: "16px", md: "24px" }}
            >
              Dental
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide className="mySwiperSlide">
          <Flex direction={"column"} alignItems={"flex-start"}>
            <Image src="assets/services/Rectangle7.png" alt="service" />
            <Text
              mt={5}
              color={"#062126"}
              fontFamily={"'Poppins', sans-serif"}
              fontSize={{ base: "16px", md: "24px" }}
            >
              Centro de diagnóstico
            </Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
      <Text
        color={"#062126"}
        fontFamily={"'Poppins', sans-serif"}
        fontSize={{ base: "16px", md: "48px" }}
        my={15}
      >
        Por que a gente?
      </Text>
      <WhyUs />
    </Flex>
  );
}
