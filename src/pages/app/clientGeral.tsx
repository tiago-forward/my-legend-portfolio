import { NavLinkMain } from '@/components/navLinks/navLinkMain'

export function ClientGeral() {
  return (
    <>
      <section aria-labelledby="welcome-section">
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
        <article className="mt-60">
          <h1 className="uppercase">Seja bem vindo ao meu portfolio</h1>
          <p>Desenvolvedor front-end</p>
          <button className="cursor-not-allowed">Download CV</button>
        </article>
      </section>
      <section aria-labelledby="content-blocks">
        <nav>
          <ul className="flex gap-2">
            <li className="w-56">
              <a href="#" className="cursor-not-allowed">
                <img
                  src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3fbc19d8b4752382a4e5551dccf2fa55ddc47956-1920x1114.jpg?auto=format&fit=fill&q=80&w=480"
                  alt=""
                  className=""
                />
                <h2>
                  Chamando todos os recrutas do Esquadrão Animal! A Atualização
                  14.14 chegou!
                </h2>
              </a>
            </li>
            <li className="w-56">
              <a href="#" className="cursor-not-allowed">
                <img
                  src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3fbc19d8b4752382a4e5551dccf2fa55ddc47956-1920x1114.jpg?auto=format&fit=fill&q=80&w=480"
                  alt=""
                  className=""
                />
                <h2>
                  Chamando todos os recrutas do Esquadrão Animal! A Atualização
                  14.14 chegou!
                </h2>
              </a>
            </li>
            <li className="w-56">
              <a href="#" className="cursor-not-allowed">
                <img
                  src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3fbc19d8b4752382a4e5551dccf2fa55ddc47956-1920x1114.jpg?auto=format&fit=fill&q=80&w=480"
                  alt=""
                  className=""
                />
                <h2>
                  Chamando todos os recrutas do Esquadrão Animal! A Atualização
                  14.14 chegou!
                </h2>
              </a>
            </li>
            <li className="w-56">
              <a href="#" className="cursor-not-allowed">
                <img
                  src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3fbc19d8b4752382a4e5551dccf2fa55ddc47956-1920x1114.jpg?auto=format&fit=fill&q=80&w=480"
                  alt=""
                  className=""
                />
                <h2>
                  Chamando todos os recrutas do Esquadrão Animal! A Atualização
                  14.14 chegou!
                </h2>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}
