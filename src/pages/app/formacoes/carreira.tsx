import { MoveUpRight, X } from 'lucide-react'

import Certificate from '@/assets/certificate/NLW Unite - Reactjs.png'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useMainHeight } from '@/hooks/useMainHeight'

export function Carreira() {
  const mainHeight = useMainHeight(180)

  return (
    <main
      style={{ maxHeight: mainHeight }}
      className="grid flex-1 justify-center gap-8 overflow-y-auto md:grid-cols-4"
    >
      <div className="col-span-1">
        <form>
          <div className="space-x-2">
            <input
              type="checkbox"
              name="certificado"
              id="certificate"
              checked
            />

            <label htmlFor="certificate" className="uppercase text-[#f1ede1]">
              Certificados
            </label>
          </div>
        </form>
      </div>
      <div className="col-span-1 md:col-span-3">
        <ul className="flex flex-wrap items-center gap-2">
          {Array.from({ length: 12 }).map((_, i) => {
            return (
              <>
                <li
                  key={i}
                  className="relative m-auto flex cursor-pointer flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100"
                >
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <div className="border border-[#e9b874] border-opacity-30 shadow-inner shadow-black hover:border-[#e9b874] hover:border-opacity-100">
                        <img
                          src={Certificate}
                          alt=""
                          className="w-80 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]"
                        />
                      </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="flex flex-col items-center border-[#e9b874] bg-aside-bg px-0 pt-0 sm:min-w-[700px] sm:rounded-none">
                      <AlertDialogHeader className="relative space-y-0">
                        <AlertDialogTitle className="absolute bottom-0 left-[33%] text-[#f1ede1]">
                          NLW Unite - Reactjs
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          <div>
                            <img src={Certificate} alt="" className="w-full" />
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <div>
                          <a
                            href="https://www.rocketseat.com.br/"
                            target="_blank"
                            className="flex gap-1 opacity-80 hover:text-[#f1ede1] hover:opacity-100"
                            rel="noreferrer"
                          >
                            <span>Formação Rocketseat</span>
                            <MoveUpRight size={18} />
                          </a>
                        </div>
                      </AlertDialogFooter>
                      <AlertDialogCancel className="absolute right-2 top-2 h-6 h-8 rounded-sm bg-aside-bg p-0 text-opacity-80 hover:bg-aside-bg hover:text-[#f1ede1] hover:text-opacity-100">
                        <X size={30} className="p-1" />
                      </AlertDialogCancel>
                    </AlertDialogContent>
                  </AlertDialog>
                </li>
              </>
            )
          })}
        </ul>
      </div>
    </main>
  )
}
