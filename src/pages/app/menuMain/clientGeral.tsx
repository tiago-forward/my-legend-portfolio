import { NavLinkMain } from '@/components/navLinks/navLinkMain'
import HighlightsHome from '@/components/sections/highlights/highlightsHome'
import { Button } from '@/components/ui/button'

export function ClientGeral() {
  return (
    <>
      <section
        aria-labelledby="welcome-section"
        className="flex flex-col items-center md:items-start"
      >
        <header>
          <nav>
            <ul className="flex gap-4 pt-2 uppercase">
              <li>
                <NavLinkMain
                  to="/"
                  className="px-2 text-[#f1ede1] transition duration-300"
                >
                  Geral
                </NavLinkMain>
                <div className="h-px w-full [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(199,160,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
              </li>
              <li>
                <NavLinkMain
                  to="/github"
                  className="px-2 transition duration-300"
                >
                  GitHub
                </NavLinkMain>
              </li>
            </ul>
          </nav>
        </header>
        <article className="mt-10 flex flex-col items-start gap-4 md:mt-60 md:w-2/5">
          <h1 className="text-5xl font-bold uppercase text-amber-50">
            Seja bem vindo ao meu novo portfolio
          </h1>
          <p className="text-xl text-[#ecd58f87]">Desenvolvedor front-end</p>
          <Button asChild className="rounded-none bg-[#1e2328] px-5 pb-1">
            <a
              href="#"
              className="border-2 border-[#e9b874] uppercase tracking-widest text-[#f1ede1]"
            >
              Download CV
            </a>
          </Button>
        </article>
      </section>
      <HighlightsHome />
    </>
  )
}
