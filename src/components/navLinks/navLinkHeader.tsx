import { Link, LinkProps } from 'react-router-dom'
import audioGold from '@/assets/audio/Audio-menu.wav'

import { useRoute } from '@/context/RouteContext'
import { usePlayAudioOnClick } from '@/hooks/usePlayAudioOnClick';

export interface NavLinkHeaderProps extends LinkProps {}

export function NavLinkHeader(props: NavLinkHeaderProps) {
  const { activeRoute, setActiveRoute } = useRoute()

  const playAudio = usePlayAudioOnClick(audioGold)

  // Define a rota ativa quando o link é clicado
  const handleClick = () => {
    setActiveRoute(props.to as string)
    playAudio()
  }

  const isActive =
    (props.to === '/' && activeRoute === '/') ||
    (props.to !== '/' && activeRoute.startsWith(props.to as string))

  return (
    <>
      {isActive && (
        <div className="absolute right-[40%] top-0 border-l-[14px] border-r-[14px] border-t-[14px] border-l-transparent border-r-transparent border-t-border-header"></div>
      )}
      <Link
        onClick={handleClick}
        data-current={isActive}
        className={`font-semibold flex h-full items-center px-2 text-sm transition duration-300 hover:bg-navLinkHover text-client-TextPrimary hover:text-client-TextPrimaryHover ${isActive ? 'text-client-TextPrimaryActive data-[current=true]:bg-navLinkHover' : ''}`}
        {...props}
      />
    </>
  )
}
