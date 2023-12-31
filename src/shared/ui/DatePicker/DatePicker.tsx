import React, { FC, useEffect, useRef, useState } from 'react'

import ruLocale from 'date-fns/locale/ru'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { PATH } from '../../const/path'
import { useTranslation } from '../../hooks/useTranslation'
import { NavLink, NavLinkColor } from '../NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from '../Text/Text'

import cls from './DatePicker.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

// eslint-disable-next-line import/order
import { parseISO, formatISO, isValid } from 'date-fns'

export enum CustomDatePickerThemes {
  SINGLE_DATE = 'single',
  RANGE = 'range',
}

interface CustomDatePickerProps {
  start?: string | null
  end?: string | null
  onChangeDates?: (dates: (string | null)[]) => void
  onChange?: (data: string | null) => void
  theme?: CustomDatePickerThemes
  className?: string
  title?: string
  onChangeValidUserAge: (isValid: boolean) => void
  isDateValid: boolean
}

export const CustomDatePicker: FC<CustomDatePickerProps> = ({
  onChange,
  onChangeDates,
  end,
  start,
  theme = 'single',
  title,
  className = '',
  onChangeValidUserAge,
  isDateValid,
}) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  let startDate = start && isValid(new Date(start)) ? parseISO(start) : null

  const endDate = end && isValid(new Date(end)) ? parseISO(end) : null

  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const currentDay = new Date().getDate()

  const minUserAge = 13
  const maxUserAge = 150

  const minAgeDate = new Date(currentYear - minUserAge, currentMonth, currentDay)
  const maxDate = new Date(currentYear, currentMonth, currentDay)
  const minDate = new Date(currentYear - maxUserAge, currentMonth, currentDay)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const onChangeHandler = (dates: Date | [Date | null, Date | null] | null) => {
    if (!dates) return
    if (Array.isArray(dates)) {
      onChangeDates?.(dates.map(date => (date ? formatISO(date) : null)))
    } else {
      onChange?.(formatISO(dates))
      onChangeValidUserAge(dates.getTime() >= minAgeDate.getTime())
    }
  }

  return (
    <div ref={ref} className={cls.wrapper}>
      <div className={classNames(cls.container, {}, [])}>
        <label className={cls.label}>
          {title}
          <DatePicker
            wrapperClassName={classNames(
              cls.wrapper,
              {
                [cls.single]: theme === CustomDatePickerThemes.SINGLE_DATE,
                [cls.singleOpen]: theme === CustomDatePickerThemes.SINGLE_DATE && isOpen,
              },
              []
            )}
            showIcon
            selectsRange={theme === CustomDatePickerThemes.RANGE}
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            onChange={onChangeHandler}
            calendarClassName={cls.calendar}
            onInputClick={() => setIsOpen(prev => !prev)}
            dateFormat={'dd.MM.yyyy'}
            locale={ruLocale}
            minDate={minDate}
            maxDate={maxDate}
          />
          {!isOpen && isDateValid && (
            <Text
              tag={'span'}
              color={TextColorTheme.ERROR}
              font={TextFontTheme.INTER_REGULAR_M}
              className={cls.errorText}
            >
              {'A user under 13 cannot create a profile'}
              &nbsp;
              <NavLink
                className={cls.text_decoration}
                href={PATH.PRIVACY}
                color={NavLinkColor.SECONDARY}
              >
                {t.register.policy}
              </NavLink>
            </Text>
          )}
        </label>
      </div>

      {isOpen && (
        <div className={cls.absolute}>
          <DatePicker
            dayClassName={date => cls.day}
            popperClassName={cls.popper}
            weekDayClassName={() => cls.weekDay}
            monthClassName={() => cls.month}
            selected={startDate}
            selectsRange={theme === CustomDatePickerThemes.RANGE}
            startDate={startDate}
            endDate={endDate}
            onChange={onChangeHandler}
            inline
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            minDate={minDate}
            maxDate={maxDate}
          />
        </div>
      )}
    </div>
  )
}
