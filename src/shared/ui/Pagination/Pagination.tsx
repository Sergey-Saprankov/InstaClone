import { FC, memo, useEffect, useState } from 'react'

import Image from 'next/image'

import arrowDown from '../../../../public/icon/arrow-down.svg'

import cls from './Pagination.module.scss'
import { Select } from './Select/Select'

import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

interface PaginationProps {
  totalItem: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  disabled?: boolean
}

export const Pagination: FC<PaginationProps> = memo(props => {
  const { currentPage, onPageChanged, totalItem, pageSize, disabled = false } = props

  // Current active button number
  const [currentButton, setCurrentButton] = useState(currentPage)

  // Array of buttons what we see on the page
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState<Array<number | string>>([])

  const totalPages = Math.ceil(totalItem / pageSize) // 20
  //Set number of pages
  const numberOfPages: number[] = []

  for (let i = 1; i <= totalPages; i++) {
    numberOfPages.push(i)
  }

  const handlerPrevPage = () => {
    setCurrentButton(prev => (prev <= 1 ? prev : prev - 1))
  }
  const handlerNextPage = () => {
    setCurrentButton(prev => (prev >= numberOfPages.length ? prev : prev + 1))
  }
  const handlerSelectPage = (item: string | number) => {
    if (typeof item === 'number') {
      setCurrentButton(item)
    }
  }

  useEffect(() => {
    let tempNumberOfPages: Array<number | string> = [...arrOfCurrButtons]
    const dotsStr = '...' as string

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages
    } else if (currentButton <= 4) {
      tempNumberOfPages = [1, 2, 3, 4, 5, dotsStr, numberOfPages.length] // [1, 2, 3, 4, 5, '...', 20]
    } else if (currentButton >= 4 && currentButton < numberOfPages.length - 3) {
      // from 5 to 17 -> (20 - 3)
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton) // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1) // sliced1 (5, 5+1) -> [6]

      tempNumberOfPages = [1, dotsStr, ...sliced1, ...sliced2, dotsStr, numberOfPages.length] // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentButton > numberOfPages.length - 4) {
      // > 16
      const sliced = numberOfPages.slice(numberOfPages.length - 5) // slice(20-5)

      tempNumberOfPages = [1, dotsStr, ...sliced]
    }

    setArrOfCurrButtons(tempNumberOfPages)
    onPageChanged(currentButton)
  }, [currentButton])

  const mods = {
    [cls.disabled]: disabled,
  }

  return (
    <div className={cls.container}>
      <div className={cls.paginationContainer}>
        <button
          className={`${currentButton === 1 || disabled ? cls.disabled : ''}`}
          onClick={handlerPrevPage}
          disabled={disabled}
        >
          <Image className={cls.arrowLeft} src={arrowDown} alt={'arrow icon'} />
        </button>

        {arrOfCurrButtons.map((item, index) => {
          const isDisabledDot = item === '...' ? cls.isDisabledDot : ''
          const isActive = currentButton === item ? cls.active : ''

          return (
            <button
              key={index}
              className={classNames(`${isDisabledDot} ${isActive}`, mods, [])}
              onClick={() => handlerSelectPage(item)}
              disabled={disabled}
            >
              {item}
            </button>
          )
        })}

        <button
          className={`${currentButton === numberOfPages.length || disabled ? cls.disabled : ''}`}
          onClick={handlerNextPage}
          disabled={disabled}
        >
          <Image className={cls.arrowRight} src={arrowDown} alt={'arrow icon'} />
        </button>
      </div>

      <div className={cls.selectCountPageContainer}>
        <Text
          className={disabled ? cls.disabled : ''}
          color={TextColorTheme.LIGHT}
          font={TextFontTheme.INTER_REGULAR_L}
          tag={'span'}
        >
          Показать
        </Text>
        <Select pageSize={pageSize} disabled={disabled} className={cls.disabled} />
        <Text
          className={disabled ? cls.disabled : ''}
          color={TextColorTheme.LIGHT}
          font={TextFontTheme.INTER_REGULAR_L}
          tag={'span'}
        >
          на странице
        </Text>
      </div>
    </div>
  )
})
