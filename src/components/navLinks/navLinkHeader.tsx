import { ChevronDown } from 'lucide-react'
import { Link, LinkProps, useLocation } from 'react-router-dom'

export interface NavLinkHeaderProps extends LinkProps { }

export function NavLinkHeader(props: NavLinkHeaderProps) {
  const { pathname } = useLocation()

  return (
    <>
      {pathname === props.to && (
        <div className="border-t-border-header absolute right-[40%] top-0 border-l-[14px] border-r-[14px] border-t-[14px] border-l-transparent border-r-transparent"></div>
        // <ChevronDown size={35} className="absolute -top-2 right-[35%] border-2 border-[#655033]" />
      )}
      <Link
        data-current={pathname === props.to}
        className="hover:bg-navLinkHover data-[current=true]:bg-navLinkHover flex h-full items-center px-2 text-sm transition duration-300 hover:text-[#f1ede1] data-[current=true]:text-[#f1ede1] lg:text-base xl:px-4"
        {...props}
      />
    </>
  )
}
