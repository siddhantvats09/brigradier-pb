/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SSBSection from "./SSBSection";
import ResultsSection from "./ResultsSection";
import SelectionBanner from "./SelectionBanner";
import TestimonialSlider from "./TestimonialSlider";
import AssessorsSection from "./AssessorsSection";
import SSBAccordion from "./SSBAccordion";
import WhyChooseUs from "./WhyChooseUs";
import FAQSection from "./FAQSection";
import GallerySectionV2 from "./GallerySectionV2";

const Mainui = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <SSBSection></SSBSection>
      <ResultsSection></ResultsSection>
      <SelectionBanner></SelectionBanner>
      <TestimonialSlider></TestimonialSlider>
      <AssessorsSection></AssessorsSection>
      <SSBAccordion></SSBAccordion>
      <GallerySectionV2></GallerySectionV2>
      <WhyChooseUs></WhyChooseUs>
      <FAQSection></FAQSection>
    </>
  );
};

export default Mainui;
