import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@mantine/core";
import { AiOutlineRight, AiTwotoneStar } from "react-icons/ai";
import {
  HiCursorClick,
  HiLightningBolt,
  HiOutlineDownload,
  HiOutlineSearchCircle,
} from "react-icons/hi";
import { IoHeart } from "react-icons/io5";
import { SiVisualstudiocode } from "react-icons/si";
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import { CarbonAds } from "src/components/CarbonAds";
import { Footer } from "src/components/Footer";
import { Navbar } from "src/components/Navbar";
import { Producthunt } from "src/components/Producthunt";
import { Sponsors } from "src/components/Sponsors";
import { SupportButton } from "src/components/SupportButton";
import { baseURL } from "src/constants/data";
import { TABS } from "src/constants/previewSection";
import { PricingCards } from "../PricingCards";
import * as Styles from "./styles";

const SyntaxHighlighter = dynamic(() => import("react-syntax-highlighter/dist/cjs/prism-async"), {
  ssr: false,
});




const Home: React.FC = () => {
  return (
    <Link href="/editor">
    <Button color="grape" size="lg">
      GO TO EDITOR
      <AiOutlineRight strokeWidth="80" />
    </Button>
  </Link>
      
  );
};

export default Home;
