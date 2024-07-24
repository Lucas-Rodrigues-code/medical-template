import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/nav-bar";
import { Box } from "@chakra-ui/react";
import Hero from "../components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
    </main>
  );
}
