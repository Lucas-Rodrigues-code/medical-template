import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/nav-bar";
import { Flex } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${poppins.className}`}>
        <Flex
          justifyContent="center"
          direction={"column"}
          marginX={250}
          bg={"blue"}
        >
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </Flex>
      </body>
    </html>
  );
}
