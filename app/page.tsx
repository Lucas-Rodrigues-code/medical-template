import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/nav-bar";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return <main className={styles.main}><Box height={800}></Box></main>;
}
