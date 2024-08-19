'use client';
import React from "react";
import Head from 'next/head';
import Image from "next/image";
import FlipCard from '@/app/_components/flipcard';
import Card from '@/app/_components/card';
import styled from 'styled-components';
import { Jomhuria, Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: '300',
});

const jomhuria = Jomhuria({
    subsets: ["latin"],
    weight: "400"
});

const CustomText = styled.h1`
    font-family: ${jomhuria.style.fontFamily};
    font-size: 200px; 
    color: #20C459;
    text-shadow: 
        -1px -1px 0 black,  
         1px -1px 0 black,
        -1px 1px 0 black,
         1px 1px 0 black;
    margin-top: -70px;
    margin-bottom: -70px;
`;

const QuicksandText = styled.h2`
    font-family: ${quicksand.style.fontFamily};
    font-size: 40px;
    font-weight: 300;
    margin-bottom: 20px;
`;

interface BoxProps {
  bgColor?: string;
}

const Box = styled.div<BoxProps>`
  background-color: ${props => props.bgColor || '#f7f7f7'}; 
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  max-width: 1200px;
  width: 100%; 
`;

const HomePage: React.FC = () => {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>{`
            html, body, #__next {
              height: 100%;
              margin: 0;
              padding: 0;
              background-color: transparent; 
            }
            body {
              box-sizing: border-box;
            }
          `}</style>
        </Head>
        <div className="flex flex-col min-h-screen w-full">
          <section id="login" className="flex items-center justify-center w-full" style={{ minHeight: '100vh', padding: '0' }}>
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-bold mb-2 text-center">
                Ace your aptitude examinations with
              </h2>
              <CustomText> AptSense. </CustomText>
              <button className="w-auto mt-4" aria-label="Get Started">
                <Image
                  src={"/Frame5.png"}
                  alt="Get Started button"
                  width={300}
                  height={70}
                  className="inline-block"
                />
              </button>
            </div>

            <div className="mt-10 hidden sm:flex">
              <Image
                src={"/machine-learning.png"}
                alt="AptSense Robot"
                width={300}
                height={300}
                quality={100}
              />
            </div>
          </section>

          <section id="features" className="py-20 w-full flex justify-center">
            <Box>
              <div className="container mx-auto text-center">
                <QuicksandText className="text-3xl font-bold mb-10">Features</QuicksandText>
                <div className="flex justify-center gap-8 flex-wrap">
                  <Card title="Feature One" description="A quick brown fox jumps over the lazy dog." />
                  <Card title="Feature Two" description="A quick brown fox jumps over the lazy dog." />
                  <Card title="Feature Three" description="A quick brown fox jumps over the lazy dog." />
                </div>
              </div>
            </Box>
          </section>

          <section id="pricing" className="py-20 w-full flex justify-center">
            <Box bgColor="#000">
              <div className="container mx-auto text-center text-white">
                <QuicksandText className="text-3xl font-bold mb-10">Pricing</QuicksandText>
                <div className="flex justify-center gap-8">
                  <FlipCard front="Basic" back="$99.99" buttonText="Purchase" />
                  <FlipCard front="Intermediate" back="$199.99" buttonText="Purchase" />
                  <FlipCard front="Advanced" back="$299.99" buttonText="Purchase" />
                </div>
              </div>
            </Box>
          </section>
        </div>
      </>
    );
};

export default HomePage;
