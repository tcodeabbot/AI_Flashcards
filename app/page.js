// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to the Next.js Flashcard Generator</h1>
//       <Image
//         src="/flashcards.jpg"
//         alt="Flashcards"
//         width={800}
//         height={500}
//       />
//     </div>
//   );
// }

import Head from "next/head";
import GradientWrapper from "app/ui/GradientWrapper";
import CTA from "app/ui/CTA";
import Features from "app/ui/Features";
import FooterCTA from "app/ui/FooterCTA";
import Hero from "app/ui/Hero";
import LogoGrid from "app/ui/LogoGrid";
import Testimonials from "app/ui/Testimonials";
import ToolKit from "app/ui/ToolKit";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      <LogoGrid />
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <ToolKit />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <FooterCTA />
    </>
  );
}
