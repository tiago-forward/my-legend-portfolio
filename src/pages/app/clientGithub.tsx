import { NavLinkMain } from '@/components/navLinks/navLinkMain'

export function ClientGithub() {
  return (
    <section className="flex h-full w-full flex-col">
      <header>
        <nav>
          <ul className="flex gap-4 pt-2 uppercase">
            <li>
              <NavLinkMain to="/" className="my-4 transition duration-300">
                Geral
              </NavLinkMain>
            </li>
            <li>
              <NavLinkMain
                to="/github"
                className="my-4 transition duration-300"
              >
                GitHub
              </NavLinkMain>
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
