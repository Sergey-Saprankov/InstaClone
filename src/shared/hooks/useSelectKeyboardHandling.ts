import { KeyboardEvent, MouseEvent } from 'react'

interface useSelectKeyboardHandlingProps {
  isActive: boolean
  setIsActive: (isActive: boolean) => void
}

export const useSelectKeyboardHandling = ({
  isActive,
  setIsActive,
}: useSelectKeyboardHandlingProps) => {
  const onKeyDownHandler = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === 'Enter' || e.key === 'mousedown') {
      setIsActive(!isActive)
    }

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      setIsActive(true)
    }
  }

  const onMouseDown = (e: MouseEvent<HTMLUListElement>) => {
    if (e.type === 'mousedown') {
      setIsActive(!isActive)
    }
  }

  const onArrowDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown') {
      setIsActive(true)
    }
  }

  return { onKeyDownHandler, onMouseDown, onArrowDown } as const
}
