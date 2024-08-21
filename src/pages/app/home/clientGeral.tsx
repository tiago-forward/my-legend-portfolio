import {
  HeaderMainNav,
  HeaderMainNavItem,
  HeaderMainRoot,
} from '@/components/header/headerMainRoot'
import HighlightsHome from '@/components/sections/highlights/highlightsHome'
import { Button } from '@/components/ui/button'

export function ClientGeral() {
  return (
    <>
      <section
        aria-labelledby="welcome-section"
        className="flex flex-col items-center md:items-start"
      >
        <HeaderMainRoot>
          <HeaderMainNav>
            <HeaderMainNavItem to={'/'}>Geral</HeaderMainNavItem>
            {/* <HeaderMainNavItem to={'/github'}>Github</HeaderMainNavItem> */}
          </HeaderMainNav>
        </HeaderMainRoot>
        <article className="mt-10 flex flex-col items-start gap-4 md:mt-60 md:w-2/5">
          <h1 className="text-5xl font-bold uppercase text-amber-50">
            Seja bem vindo ao meu novo portfolio
          </h1>
          <p className="text-xl text-[#efe8d186]">Desenvolvedor front-end</p>
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
