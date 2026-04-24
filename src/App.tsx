import { Github } from 'lucide-react'
import type { ReactNode } from 'react'

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.19-2.712 4.94-4.465c.215-.19-.047-.296-.332-.106l-6.107 3.845-2.633-.82c-.572-.18-.582-.572.12-.847l10.287-3.965c.476-.174.892.107.738.844z" />
    </svg>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener"
      className="inline-flex text-[#e6e6e6] opacity-50 transition duration-200 hover:-translate-y-0.5 hover:opacity-100"
    >
      {children}
    </a>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0b0f] text-center text-[#e6e6e6]">
      <div>
        <img
          src="/logo.jpg"
          alt="polyterm logo"
          className="mx-auto mb-6 block h-auto w-[clamp(96px,18vw,140px)] rounded-[24%]"
        />
        <h1 className="m-0 text-[clamp(2rem,6vw,4rem)] font-light tracking-[0.15em]">polyterm</h1>
        <p className="text-[0.9rem] uppercase tracking-[0.2em] opacity-60">coming soon</p>
        <div className="mt-10 flex justify-center gap-6">
          <SocialLink href="https://github.com/polyterm" label="GitHub">
            <Github className="h-7 w-7" strokeWidth={1.5} />
          </SocialLink>
          <SocialLink href="https://x.com/PolyTermOne" label="X">
            <XIcon />
          </SocialLink>
          <SocialLink href="https://t.me/PolyTermOne" label="Telegram">
            <TelegramIcon />
          </SocialLink>
        </div>
      </div>
    </div>
  )
}
