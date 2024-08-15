import { Helmet } from 'react-helmet-async'

export function Client() {
  return (
    <>
      <Helmet title="Client" />
      <div className="divide-divide-main border-border-main bg-bg-main flex min-h-screen flex-col divide-y-[1px] border-[1px]">
        <header className="border-border-header border-t-2">
          <nav className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <ul className="col-span-2 flex gap-4 py-4 pl-8 uppercase">
              <li>
                <a href="#">Logo</a>
              </li>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>

            <ul className="col-span-2 flex items-center gap-4 py-4 pr-8 uppercase">
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Habilidades</a>
              </li>
              <li>
                <a href="#">Formações</a>
              </li>
              <li>
                <a href="#">Projetos</a>
              </li>
            </ul>

            <div className="bg-aside-bg col-span-1 flex h-full items-center gap-4 p-2">
              <a href="#">Foto</a>
              <span>Tiago Forward</span>
            </div>
          </nav>
        </header>
        <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-5">
          <main className="col-span-4 flex h-full flex-col justify-between px-8 pb-8">
            <section aria-labelledby="welcome-section">
              <header>
                <nav>
                  <ul className="flex gap-4 pt-2 uppercase">
                    <li>
                      <a href="#">Geral</a>
                    </li>
                    <li>
                      <a href="#">GitHub</a>
                    </li>
                  </ul>
                </nav>
              </header>
              <article className="mt-60">
                <h1 className="uppercase">Seja bem vindo ao meu portfolio</h1>
                <p>Desenvolvedor front-end</p>
                <button>Download CV</button>
              </article>
            </section>
            <section aria-labelledby="content-blocks">
              <nav>
                <ul className="flex gap-2">
                  <li className="w-56">
                    <a href="#">
                      <img
                        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3fbc19d8b4752382a4e5551dccf2fa55ddc47956-1920x1114.jpg?auto=format&fit=fill&q=80&w=480"
                        alt=""
                        className=""
                      />
                      <h2>
                        Chamando todos os recrutas do Esquadrão Animal! A
                        Atualização 14.14 chegou!
                      </h2>
                    </a>
                  </li>
                  <li className="w-56">
                    <a href="#">
                      <img
                        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3fbc19d8b4752382a4e5551dccf2fa55ddc47956-1920x1114.jpg?auto=format&fit=fill&q=80&w=480"
                        alt=""
                        className=""
                      />
                      <h2>
                        Chamando todos os recrutas do Esquadrão Animal! A
                        Atualização 14.14 chegou!
                      </h2>
                    </a>
                  </li>
                  <li className="w-56">
                    <a href="#">
                      <img
                        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3fbc19d8b4752382a4e5551dccf2fa55ddc47956-1920x1114.jpg?auto=format&fit=fill&q=80&w=480"
                        alt=""
                        className=""
                      />
                      <h2>
                        Chamando todos os recrutas do Esquadrão Animal! A
                        Atualização 14.14 chegou!
                      </h2>
                    </a>
                  </li>
                  <li className="w-56">
                    <a href="#">
                      <img
                        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3fbc19d8b4752382a4e5551dccf2fa55ddc47956-1920x1114.jpg?auto=format&fit=fill&q=80&w=480"
                        alt=""
                        className=""
                      />
                      <h2>
                        Chamando todos os recrutas do Esquadrão Animal! A
                        Atualização 14.14 chegou!
                      </h2>
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
          </main>
          <aside className="bg-aside-bg col-span-1"></aside>
        </div>
      </div>
    </>
  )
}
