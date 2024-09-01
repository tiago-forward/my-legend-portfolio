import { Link, LinkProps } from 'react-router-dom'
import audioGold from '@/assets/audio/Audio-menu.wav'

import { useRoute } from '@/context/RouteContext'
import { usePlayAudioOnClick } from '@/hooks/usePlayAudioOnClick'

export interface NavLinkMainProps extends LinkProps {}

export function NavLinkMain(props: NavLinkMainProps) {
  const { activeSubRoute, setActiveSubRoute } = useRoute()

  const playAudio = usePlayAudioOnClick(audioGold)

  const handleClick = () => {
    setActiveSubRoute(props.to as string)
    playAudio()
  }

  const isActive =
    (props.to === '/' && activeSubRoute === '/') ||
    (props.to !== '/' && activeSubRoute.startsWith(props.to as string))

  return (
    <div className="flex flex-col items-center px-2">
      <Link
        onClick={handleClick}
        data-current={isActive}
        className={`transition duration-300 hover:text-client-TextPrimaryHover ${isActive ? `text-client-TextPrimaryActive` : ``}`}
        {...props}
      />
      {isActive && (
        <div className="h-px w-full [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(199,160,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
      )}
    </div>
  )
}
