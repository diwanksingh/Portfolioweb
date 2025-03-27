
import Hero from '@/components/main /Hero'
import Projects from '@/components/main /Projects'
import Skills from '@/components/main /Skills'
import { StarsBackground } from "@/components/ui/stars-background";
import React from 'react';

function Page() {
  return (
    <main className="h-full w-full relative">
      
      <div className="flex h-full flex-col">
        <div className="h-screen relative">
          <Hero />
        </div>

        
        <div className="w-full h-[0.5px] bg-white"></div>

      
        <div className="bg-black relative z-10">
          <Skills />
          
          <Projects />
        
          <StarsBackground className='-z-10 pointer-events-none' />
          </div>
      </div>
    </main>
  );
}

export default Page;
