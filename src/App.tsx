import { Github } from 'lucide-react'
import type { ReactNode } from 'react'

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
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

function Feature({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="font-mono">
      <div className="mb-1 text-xs uppercase tracking-[0.2em] text-[#22c55e]">
        <span className="opacity-70">&gt;</span> {label}
      </div>
      <div className="text-sm leading-relaxed text-[#e6e6e6]/70">{desc}</div>
    </div>
  )
}

export default function App() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0b0b0f] text-[#e6e6e6]">
      <div className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl">

          <section className="text-center">
            <img
              src="/logo.jpg"
              alt="polyterm logo"
              className="mx-auto mb-8 block h-24 w-24 rounded-[24%]"
            />
            <h1 className="m-0 text-[clamp(2.25rem,6vw,3.75rem)] font-light tracking-[0.15em]">
              polyterm
            </h1>
            <p className="mt-3 text-[0.7rem] uppercase tracking-[0.28em] opacity-50 sm:text-xs">
              the bloomberg terminal for polymarket
            </p>
          </section>

          <p className="mx-auto mt-12 max-w-lg text-center text-[0.95rem] leading-relaxed text-[#e6e6e6]/75">
            Prediction markets move fast. Mouse-driven web UIs don't.
            Polyterm is a keyboard-native trading terminal for Polymarket —
            real-time order books, live positions, and one-keystroke execution,
            in a single Rust binary.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
            <Feature label="fast" desc="Keyboard-first. Vim-style bindings. No mouse." />
            <Feature label="live" desc="Real-time streaming of markets, books, and fills." />
            <Feature label="portable" desc="One static binary. Linux, macOS, Windows." />
            <Feature label="rust" desc="Zero-overhead core for sub-millisecond response." />
          </div>

          <div className="mt-20 text-center">
            <p className="mb-6 font-mono text-[0.65rem] uppercase tracking-[0.35em] opacity-40">
              coming soon
            </p>
            <div className="flex justify-center gap-6">
              <SocialLink href="https://github.com/polyterm" label="GitHub">
                <Github className="h-6 w-6" strokeWidth={1.5} />
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
      </div>
    </main>
  )
}
