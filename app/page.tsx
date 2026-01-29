import Link from "next/link"

export default function Home() {
  const name = "KATIE GOLDSTEIN!"

  return (
    <main className="relative min-h-screen">
      {/* Twinkling Stars Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 z-[2]"
          style={{
            background: "black url(/media/stars.png) repeat",
          }}
        />
        <div 
          className="absolute inset-0 z-[3] w-[10000px]"
          style={{
            background: "transparent url(/media/twinkling.png) repeat",
            backgroundSize: "1000px 1000px",
            animation: "move-background 70s linear infinite",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-4 pt-8">
          {/* Header - Name with 3D shadow effect */}
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12 font-[var(--font-archivo-black)]">
            {name.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block"
                style={{
                  color: "var(--text)",
                  textShadow: `
                    6px 6px var(--shadow),
                    5px 5px var(--shadow), 5.5px 5.5px var(--shadow), 5.25px 5.25px var(--shadow), 5.75px 5.75px var(--shadow),
                    4px 4px var(--shadow), 4.5px 4.5px var(--shadow), 4.25px 4.25px var(--shadow), 4.75px 4.75px var(--shadow),
                    3px 3px var(--shadow), 3.5px 3.5px var(--shadow), 3.25px 3.25px var(--shadow), 3.75px 3.75px var(--shadow),
                    2px 2px var(--shadow), 2.5px 2.5px var(--shadow), 2.25px 2.25px var(--shadow), 2.75px 2.75px var(--shadow),
                    1px 1px var(--shadow), 1.5px 1.5px var(--shadow), 1.25px 1.25px var(--shadow), 1.75px 1.75px var(--shadow),
                    0.5px 0.5px var(--shadow), 0.25px 0.25px var(--shadow), 0.75px 0.75px var(--shadow)
                  `,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>

          {/* About Section */}
          <div className="text-center max-w-2xl mx-auto text-white font-[var(--font-montserrat)] space-y-4 mb-8">
            <p>
              Hi there! I'm Katie, BizOps @
              <Link href="https://vooma.ai/" target="_blank" className="underline hover:text-[var(--shadow)] transition-colors">
                Vooma
              </Link>{" "}
              (AI logistics startup), venture scout @
              <Link href="https://www.av.vc" target="_blank" className="underline hover:text-[var(--shadow)] transition-colors">
                AVG
              </Link>
              , and children's book author.
            </p>
            <p>Currently living in the Bay Area.</p>
            <p>I get excited about pugs, volunteering, learning new things, and Japanese toilets.</p>
            <p>Ask me about what I'm reading!</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center items-center">
            <Link
              href="mailto:katie.e.goldstein@gmail.com"
              target="_blank"
              className="uppercase font-[var(--font-archivo-black)] px-6 py-2 rounded-lg border border-[var(--shadow)] transition-all duration-200"
              style={{
                backgroundColor: "var(--text)",
                color: "var(--shadow)",
                boxShadow: "0 5px 0 var(--shadow)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--shadow)"
                e.currentTarget.style.color = "var(--text)"
                e.currentTarget.style.transform = "translate(0, 1px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--text)"
                e.currentTarget.style.color = "var(--shadow)"
                e.currentTarget.style.transform = "translate(0, 0)"
              }}
            >
              Say Hi!
            </Link>
            <Link
              href="/Katie_Goldstein_Resume.pdf"
              target="_blank"
              className="uppercase font-[var(--font-archivo-black)] px-6 py-2 rounded-lg border border-[var(--shadow)] transition-all duration-200"
              style={{
                backgroundColor: "var(--text)",
                color: "var(--shadow)",
                boxShadow: "0 5px 0 var(--shadow)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--shadow)"
                e.currentTarget.style.color = "var(--text)"
                e.currentTarget.style.transform = "translate(0, 1px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--text)"
                e.currentTarget.style.color = "var(--shadow)"
                e.currentTarget.style.transform = "translate(0, 0)"
              }}
            >
              Resume
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center pb-8">
          <ul className="flex gap-8 list-none">
            <li>
              <Link href="https://www.linkedin.com/in/katie-goldstein/" target="_blank" className="text-white hover:text-[var(--shadow)] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link href="https://calendly.com/katie-e-goldstein/katies-coffee-chats" target="_blank" className="text-white hover:text-[var(--shadow)] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="sr-only">Calendar</span>
              </Link>
            </li>
            <li>
              <Link href="https://medium.com/@katiegoldstein3" target="_blank" className="text-white hover:text-[var(--shadow)] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                <span className="sr-only">Medium</span>
              </Link>
            </li>
            <li>
              <Link href="http://goodreads.com/katiegisme" target="_blank" className="text-white hover:text-[var(--shadow)] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.01 2.76c-3.58 0-5.19 2.59-5.19 5.74 0 3.03 1.56 5.86 5.16 5.86 3.73 0 5.12-2.78 5.12-5.89 0-3.29-1.63-5.71-5.09-5.71zm6.49 15.16c-.35 2.06-2.21 3.84-6.37 3.84-5.51 0-7.06-3.25-7.06-5.97V2.24h2.58v2.18c1.02-1.56 2.78-2.42 4.98-2.42 4.05 0 6.73 2.87 6.73 7.13 0 3.86-2.23 7.08-6.27 7.08-1.9 0-3.55-.68-4.56-1.99v3.38c0 1.63.98 3.21 4.08 3.21 2.56 0 3.99-1.11 4.29-2.89h1.6z"/>
                </svg>
                <span className="sr-only">Goodreads</span>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </main>
  )
}
