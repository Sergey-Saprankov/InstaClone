import { FC, KeyboardEvent, MouseEvent, useState } from 'react'

import { Listbox } from '@headlessui/react'

import ArrowDown from '../../../../../public/icon/arrow-down.svg'

import cls from './Select.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

const pageSizes = [
  { id: 1, value: 10, unavailable: false },
  { id: 2, value: 20, unavailable: false },
  { id: 3, value: 30, unavailable: false },
  { id: 4, value: 50, unavailable: false },
  { id: 5, value: 100, unavailable: false },
]

interface SelectProps {
  pageSize: number
  disabled?: boolean
  className?: string
  // onChange: (value: string) => void
}

export const Select: FC<SelectProps> = ({ pageSize, disabled = false, className = '' }) => {
  const [selectedPageSize, setSelectedPageSize] = useState(pageSize)
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

  const selectButtonMode = {
    [cls.isActive]: isActive,
    [className]: disabled,
  }

  return (
    <div className={cls.Select}>
      <Listbox disabled={disabled} value={selectedPageSize} onChange={setSelectedPageSize}>
        <Listbox.Button
          onKeyDown={onArrowDown}
          onClick={() => setIsActive(prev => !prev)}
          className={classNames(cls.listBoxButton, selectButtonMode, [])}
        >
          {selectedPageSize}
          <ArrowDown className={classNames(cls.arrowIcon, { [cls.selected]: isActive }, [])} />
        </Listbox.Button>
        <Listbox.Options
          onBlur={() => setIsActive(false)}
          onKeyDown={onKeyDownHandler}
          onMouseDown={onMouseDown}
          className={classNames(cls.listBoxOptions, { [cls.isActive]: isActive }, [])}
        >
          {pageSizes.map(size => (
            <Listbox.Option
              className={({ active }) =>
                active ? `${cls.listBoxOption} ${cls.listBoxOptionActive}` : cls.listBoxOption
              }
              key={size.id}
              value={size.value}
              disabled={size.unavailable}
            >
              {size.value}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
