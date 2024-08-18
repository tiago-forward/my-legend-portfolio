import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion'
import { Play } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { ClientHeader } from '@/components/header/clientHeader'

export function ClientLayount() {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false)

  return (
    <>
      <Helmet title="Client" />
      <div className="divide-divide-main bg-bg-main bg-wallpaper flex min-h-screen flex-col divide-y-[1px] border-[1px] border-zinc-800 bg-cover bg-bottom bg-no-repeat">
        <ClientHeader />
        <div className="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-5">
          <main className="col-span-4 flex h-full flex-col justify-between gap-10 px-2 pb-8 md:px-8">
            <Outlet />
          </main>
          <aside className="bg-aside-bg col-span-4 p-2 lg:col-span-1">
            <header className="mb-4">
              <span className="cursor-default uppercase">Social</span>
            </header>

            <Accordion
              type="single"
              collapsible
              onValueChange={(value) => setAccordionIsOpen(value === 'item-1')}
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex items-center gap-2 uppercase">
                  <Play
                    size={10}
                    className={`mb-1 transform transition-transform duration-200 ${accordionIsOpen ? 'rotate-90' : 'rotate-0'}`}
                  />
                  Amigos (0/2)
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center gap-4">
                    <div className="relative my-2 w-16 rounded-full border border-black hover:text-white">
                      <img
                        src="https://github.com/diego3g.png"
                        alt="tiago forward"
                        className="rounded-full border-4 border-[#e9b874]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span
                        className="cursor-default font-bold opacity-30"
                        title="Nome"
                      >
                        DiegoFernandes
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="mt-1 cursor-default opacity-30">
                          Offlile
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative my-2 w-16 rounded-full border border-black hover:text-white">
                      <img
                        src="https://github.com/maykbrito.png"
                        alt="tiago forward"
                        className="rounded-full border-4 border-[#e9b874]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span
                        className="cursor-default font-bold opacity-30"
                        title="Nome"
                      >
                        MaykBrito
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="mt-1 cursor-default opacity-30">
                          Offlile
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </aside>
        </div>
      </div>
    </>
  )
}
