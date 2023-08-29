import { KeyboardEvent, MouseEvent, useState } from 'react'

import { Listbox } from '@headlessui/react'
import Image from 'next/image'

import cls from './Select.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

// interface SelectProps {
//   options: string[]
//   value: string
//   onChange: (value: string) => void
// }

export const SelectOld = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [isActive, setIsActive] = useState(false)

  const onKeyDownHandler = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === 'Enter' || e.key === 'mousedown') {
      setIsActive(prev => !prev)
    }

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      setIsActive(true)
    }
  }

  const onMouseDown = (e: MouseEvent<HTMLUListElement>) => {
    if (e.type === 'mousedown') {
      setIsActive(prev => !prev)
    }
  }

  const onArrowDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown') {
      setIsActive(true)
    }
  }

  return (
    <div className={cls.Select}>
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button
          onKeyDown={onArrowDown}
          onClick={() => setIsActive(prev => !prev)}
          className={classNames(cls.listBoxButton, { [cls.isActive]: isActive }, [])}
        >
          {selectedPerson.name}
          <Image
            className={classNames(cls.arrowIcon, { [cls.selected]: isActive }, [])}
            src={'/icon/arrow-down.svg'}
            alt={'arrow icon'}
          />
        </Listbox.Button>
        <Listbox.Options
          onBlur={() => setIsActive(false)}
          onKeyDown={onKeyDownHandler}
          onMouseDown={onMouseDown}
          className={classNames(cls.listBoxOptions, { [cls.isActive]: isActive }, [])}
        >
          {people.map(person => (
            <Listbox.Option
              className={({ active }) =>
                active ? `${cls.listBoxOption} ${cls.listBoxOptionActive}` : cls.listBoxOption
              }
              key={person.id}
              value={person}
              disabled={person.unavailable}
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
