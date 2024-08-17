import { NavLinkMain } from '@/components/navLinks/navLinkMain'

export function ClientGithub() {
  return (
    <section className="flex h-full w-full flex-col">
      <header>
        <nav>
          <ul className="flex gap-4 pt-2 uppercase">
            <li>
              <NavLinkMain to="/" className="px-2 transition duration-300">
                Geral
              </NavLinkMain>
            </li>
            <li>
              <NavLinkMain
                to="/github"
                className="px-2 text-[#f1ede1] transition duration-300"
              >
                GitHub
              </NavLinkMain>
              <div className="h-px w-full [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(199,160,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
            </li>
          </ul>
        </nav>
      </header>
      <div className="mt-52 text-center">
        <h2 className="text-xl">Sem informação!</h2>
      </div>
    </section>
  )
}
