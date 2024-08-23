import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface RouteContextType {
  activeRoute: string
  activeSubRoute: string
  setActiveRoute: (route: string) => void
  setActiveSubRoute: (route: string) => void
}

const RouteContext = createContext<RouteContextType | undefined>(undefined)

export const useRoute = () => {
  const context = useContext(RouteContext)
  if (!context) {
    throw new Error('useRoute deve ser usado dentro de um RouteProvider')
  }
  return context
}

export const RouteProvider = ({ children }: { children: ReactNode }) => {
  const [activeRoute, setActiveRoute] = useState<string>('/')
  const [activeSubRoute, setActiveSubRoute] = useState<string>('/')

  useEffect(() => {
    if (activeRoute === '/') {
      setActiveSubRoute('/')
    } else if (activeRoute === '/sobre/historia') {
      setActiveSubRoute('/sobre/historia')
    } else if (activeRoute === '/habilidades/hard-skills') {
      setActiveSubRoute('/habilidades/hard-skills')
    } else if (activeRoute === '/formacoes/carreira') {
      setActiveSubRoute('/formacoes/carreira')
    } else if (activeRoute === '/projetos/pessoais') {
      setActiveSubRoute('/projetos/pessoais')
    }

    console.log(activeRoute)
  }, [activeRoute])

  return (
    <RouteContext.Provider
      value={{ activeRoute, setActiveRoute, activeSubRoute, setActiveSubRoute }}
    >
      {children}
    </RouteContext.Provider>
  )
}
