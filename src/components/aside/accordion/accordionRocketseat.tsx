import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion'
import { Play } from 'lucide-react'
import { useState } from 'react'

import { AvatarFriend } from '../../avatar/avatarFriend'

export default function AccordionRocketseat() {
  const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(false)

  const friendList = [
    { id: 1, url: 'https://github.com/diego3g.png', label: 'DiegoFernandes' },
    {
      id: 2,
      url: 'https://github.com/maykbrito.png',
      label: 'MaykBrito',
    },
  ]

  return (
    <Accordion
      type="single"
      collapsible
      onValueChange={(value) => setAccordionIsOpen(value === 'item-1')}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex w-full items-center gap-2 px-2 py-1 uppercase hover:bg-[#e8edf928] text-client-TextSecondary opacity-80 hover:opacity-100">
          <Play
            size={10}
            className={`mb-1 transform transition-transform duration-200 ${accordionIsOpen ? 'rotate-90' : 'rotate-0'}`}
          />
          Rocketseat (0/2)
        </AccordionTrigger>
        <AccordionContent>
          {friendList.map((friend) => (
            <AvatarFriend
              key={friend.id}
              id={friend.id}
              url={friend.url}
              label={friend.label}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
