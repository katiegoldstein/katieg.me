export function Footer() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/katie-goldstein/",
      icon: "linkedin",
      label: "LinkedIn",
    },
    {
      href: "https://calendly.com/katie-e-goldstein/katies-coffee-chats",
      icon: "calendar",
      label: "Schedule a chat",
    },
    {
      href: "https://medium.com/@katiegoldstein3",
      icon: "medium",
      label: "Medium",
    },
    {
      href: "http://goodreads.com/katiegisme",
      icon: "goodreads",
      label: "Goodreads",
    },
  ]

  return (
    <footer className="flex justify-center pb-8 pt-4">
      <ul className="flex flex-row flex-wrap justify-center gap-8 sm:gap-12 list-none">
        {socialLinks.map((link) => (
          <li key={link.icon}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--shadow)] transition-colors text-2xl"
              aria-label={link.label}
            >
              <SocialIcon icon={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "linkedin":
      return (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    case "calendar":
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 14l2 2 4-4"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      )
    case "goodreads":
      return (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.01 2.04c-3.63 0-6.56 3.12-6.56 6.96 0 3.84 2.93 6.95 6.56 6.95 1.8 0 3.43-.74 4.62-1.94v1.62c0 2.75-2.06 4.99-4.62 4.99-1.78 0-3.36-1.01-4.16-2.52l-2.04.84c1.15 2.16 3.42 3.63 6.2 3.63 3.72 0 6.67-3.05 6.67-6.94V2.37h-2.05v1.72c-1.19-1.2-2.82-1.94-4.62-1.94v-.11zm-.01 2.04c2.55 0 4.63 2.07 4.63 4.92s-2.08 4.91-4.63 4.91c-2.55 0-4.56-2.06-4.56-4.91s2.01-4.92 4.56-4.92z" />
        </svg>
      )
    default:
      return null
  }
}
