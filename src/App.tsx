import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Cursor } from "./components/Cursor";
import { Navbar } from "./components/Navbar";
import { Dock } from "./components/Dock";
import { CommandPalette } from "./components/CommandPalette";
import { AskMeAnything } from "./components/AskMeAnything";

import { Hero } from "./sections/Hero";
import { Journey } from "./sections/Journey";
import { AstraStack } from "./sections/AstraStack";
import { Projects } from "./sections/Projects";
import { Research } from "./sections/Research";
import { Achievements } from "./sections/Achievements";
import { Connect } from "./sections/Connect";
import { Footer } from "./sections/Footer";

const queryClient = new QueryClient();

function App() {
  useSmoothScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="bg-background text-foreground min-h-screen selection:bg-primary/30 selection:text-white">
          <Cursor />
          <Navbar />
          <CommandPalette />
          
          <main>
            <Hero />
            <Journey />
            <AstraStack />
            <Projects />
            <Research />
            <Achievements />
            <Connect />
          </main>

          <Footer />
          <Dock />
          <AskMeAnything />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
