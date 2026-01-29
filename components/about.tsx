export function About() {
  return (
    <div
      className="text-center w-[85%] max-w-2xl text-white mb-8"
      style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
    >
      <p className="pb-4">
        Hi there! I&apos;m Katie, BizOps @
        <a
          href="https://vooma.ai/"
          className="text-white underline hover:text-[var(--shadow)] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vooma
        </a>{" "}
        (AI logistics startup), venture scout @
        <a
          href="https://www.av.vc"
          className="text-white underline hover:text-[var(--shadow)] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          AVG
        </a>
        , and children&apos;s book author.
      </p>
      <p className="pb-4">Currently living in the Bay Area.</p>
      <p className="pb-4">
        I get excited about pugs, volunteering, learning new things, and
        Japanese toilets.
      </p>
      <p className="pb-4">Ask me about what I&apos;m reading!</p>
    </div>
  )
}
