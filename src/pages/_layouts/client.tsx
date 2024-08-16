import { Helmet } from 'react-helmet-async'
import { Link, Outlet } from 'react-router-dom'

import Logo from '@/assets/logo.png'
import { Separator } from '@/components/ui/separator'

export function ClientLayount() {
  return (
    <>
      <Helmet title="Client" />
      <div className="divide-divide-main border-border-main bg-bg-main flex min-h-screen flex-col divide-y-[1px] border-[1px]">
        <header className="border-border-header border-t-2">
          <nav className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <ul className="col-span-2 flex items-center pl-8 uppercase">
              <li className="">
                <Link to="/">
                  <img src={Logo} alt="" className="w-[200px]" />
                </Link>
              </li>
              <li className="menu-hover flex h-full items-center px-3">
                <Link
                  to="/"
                  className="my-4 transition duration-300 hover:text-white"
                >
                  Início
                </Link>
              </li>
            </ul>

            <ul className="col-span-2 flex items-center pr-8 uppercase">
              <li className="menu-hover flex h-full items-center px-3">
                <Link
                  to="/sobre"
                  className="my-4 transition duration-300 hover:text-white"
                >
                  Sobre
                </Link>
              </li>
              <Separator
                orientation="vertical"
                className="user-select-none center pointer-events-none left-1/2 h-10 w-[2px] -translate-x-1/2 transform-gpu [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(199,160,0,0.65)_50%,rgba(0,0,0,0)_100%)]"
              />
              <li className="menu-hover flex h-full items-center px-3">
                <Link
                  to="/habilidades"
                  className="my-4 transition duration-300 hover:text-white"
                >
                  Habilidades
                </Link>
              </li>
              <Separator
                orientation="vertical"
                className="user-select-none center pointer-events-none left-1/2 h-10 w-[2px] -translate-x-1/2 transform-gpu [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(199,160,0,0.65)_50%,rgba(0,0,0,0)_100%)]"
              />
              <li className="menu-hover flex h-full items-center px-3">
                <Link
                  to="/formacoes"
                  className="my-4 transition duration-300 hover:text-white"
                >
                  Formações
                </Link>
              </li>
              <Separator
                orientation="vertical"
                className="user-select-none center pointer-events-none left-1/2 h-10 w-[2px] -translate-x-1/2 transform-gpu [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(199,160,0,0.65)_50%,rgba(0,0,0,0)_100%)]"
              />
              <li className="menu-hover flex h-full items-center px-3">
                <Link
                  to="/projetos"
                  className="my-4 transition duration-300 hover:text-white"
                >
                  Projetos
                </Link>
              </li>
            </ul>

            <div className="bg-aside-bg col-span-1 flex h-full items-center gap-4 px-3 pb-2">
              <div className="relative my-2 w-16 rounded-full hover:text-white">
                <img
                  src="https://github.com/tiago-forward.png"
                  alt="tiago forward"
                  className="rounded-full border-4 border-[#c0a16b]"
                />
                <div className="flex items-center justify-center">
                  <span className="absolute rounded-[6px] border-2 border-[#c0a16b] bg-[#2f3640] px-2 text-xs font-bold">
                    26
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold">TiagoForward</span>
                <div className="flex items-center gap-2">
                  <div className="bola bg-green-500"></div>
                  <span className="mt-1 text-green-500">Online</span>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-5">
          <main className="col-span-4 flex h-full flex-col justify-between px-8 pb-8">
            {/* <section aria-labelledby="welcome-section">
              <header>
                <nav>
                  <ul className="flex gap-4 pt-2 uppercase">
                    <li>
                      <a
                        href="#"
                        className="my-4 transition duration-300 hover:text-white"
                      >
                        Geral
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="my-4 transition duration-300 hover:text-white"
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                </nav>
              </header>
              <article className="mt-60">
                <h1 className="uppercase">Seja bem vindo ao meu portfolio</h1>
                <p>Desenvolvedor front-end</p>
                <button className=">Download CV</button>
              </article>
            </section>
            <section aria-labelledby="content-blocks">
              <nav>
                <ul className="flex gap-2">
                  <li className="w-56">
                    <a href="#" className=">
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
                    <a href="#" className=">
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
                    <a href="#" className=">
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
                    <a href="#" className=">
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
            </section> */}
            <Outlet />
          </main>
          <aside className="bg-aside-bg col-span-1"></aside>
        </div>
      </div>
    </>
  )
}
