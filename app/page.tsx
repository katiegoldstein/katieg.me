import { TwinklingStars } from "@/components/twinkling-stars"
import { Header } from "@/components/header"
import { About } from "@/components/about"
import { ActionButtons } from "@/components/action-buttons"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <TwinklingStars />
      
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-4 pt-8">
          <Header />
          <About />
          <ActionButtons />
        </div>
        <Footer />
      </div>
    </main>
  )
}
