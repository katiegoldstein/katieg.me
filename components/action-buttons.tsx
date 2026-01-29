export function ActionButtons() {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
      <a
        href="mailto:katie.e.goldstein@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 uppercase no-underline text-center rounded-lg transition-all duration-200 hover:translate-y-[1px] active:translate-y-[7px]"
        style={{
          fontFamily: "var(--font-archivo-black), 'Archivo Black', sans-serif",
          backgroundColor: "var(--text)",
          color: "var(--shadow)",
          boxShadow: "0 5px 0 var(--shadow)",
          border: "1px solid var(--shadow)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--shadow)"
          e.currentTarget.style.color = "var(--text)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--text)"
          e.currentTarget.style.color = "var(--shadow)"
        }}
      >
        Say Hi!
      </a>
      <a
        href="/Katie_Goldstein_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        title="Katie Goldstein Resume"
        className="px-6 py-2 uppercase no-underline text-center rounded-lg transition-all duration-200 hover:translate-y-[1px] active:translate-y-[7px]"
        style={{
          fontFamily: "var(--font-archivo-black), 'Archivo Black', sans-serif",
          backgroundColor: "var(--text)",
          color: "var(--shadow)",
          boxShadow: "0 5px 0 var(--shadow)",
          border: "1px solid var(--shadow)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--shadow)"
          e.currentTarget.style.color = "var(--text)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--text)"
          e.currentTarget.style.color = "var(--shadow)"
        }}
      >
        Resume
      </a>
    </div>
  )
}
