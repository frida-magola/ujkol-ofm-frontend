"use client";
import Hero from "@/components/Home/HeroSection";
import { AproposDeUjkol } from "@/components/Home/AproposDeUJKOL";
import AcademicPrograms from "@/components/Home/AcademicPrograms";
import Faculty from "@/components/Home/Faculty";
import { StudentTestimonial } from "@/components/Home/Testimonial";
import { Events } from "@/components/Home/Events";
import { NewsArticles } from "@/components/Home/NewsArticles";
import Layout from "@/components/Layout";

function HomePage(props) {
  // onclick menu
  function openDropDownMenuMobile() {
    console.log("menu clicked");
  }
  return (
    <Layout onclick={openDropDownMenuMobile}>
      <Hero />
      <AproposDeUjkol />
      <AcademicPrograms />
      <Faculty />
      <StudentTestimonial />
      <Events />
      <NewsArticles />
    </Layout>
  );
}

export default HomePage;
