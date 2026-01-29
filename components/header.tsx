export function Header() {
  const name = "KATIE GOLDSTEIN!"
  
  return (
    <h1
      className="font-[var(--font-archivo-black)] text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-normal text-center max-w-[80vw] w-auto mb-8 md:mb-12"
      style={{
        fontFamily: "var(--font-archivo-black), 'Archivo Black', sans-serif",
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
      {name.split("").map((char, i) => (
        <span key={i} aria-hidden="true">
          {char}
        </span>
      ))}
      <span className="sr-only">Katie Goldstein!</span>
    </h1>
  )
}
