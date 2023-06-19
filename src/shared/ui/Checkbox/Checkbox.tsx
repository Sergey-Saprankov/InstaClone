import { ChangeEvent, FC, memo } from 'react'

import Image from 'next/image'

import check from '../../../../public/icon/checkbox-check-black.svg'
import disabledCheckbox from '../../../../public/icon/checkbox-check-disabled.svg'

import cls from './Checkbox.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface CheckBoxProps {
  className?: string
  label?: string
  width?: string
  height?: string
  isChecked: boolean
  onChangeChecked: (value: boolean) => void
  disabled?: boolean
}

export const CheckBox: FC<CheckBoxProps> = memo(
  ({
    className = '',
    label,
    width = '18px',
    height = '18px',
    isChecked,
    onChangeChecked,
    disabled = false,
  }) => {
    const onClickHandler = () => {
      if (!disabled) {
        onChangeChecked(!isChecked)
      }
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeChecked(e.currentTarget.checked)
    }

    const mods = {
      [cls.isDisabled]: disabled,
      [cls.isChecked]: isChecked,
      [cls.disableChecked]: isChecked && disabled,
    }

    return (
      <div tabIndex={0} className={cls.container}>
        <div
          onClick={onClickHandler}
          style={{ width: width, height: height }}
          className={classNames(cls.CheckBox, mods, [className])}
        >
          <div className={cls.decoration}></div>
          {isChecked && !disabled && <Image src={check} alt={'check'} width={14} height={14} />}
          {disabled && isChecked && (
            <Image src={disabledCheckbox} alt={'disabled'} width={14} height={14} />
          )}
        </div>
        <label className={cls.label}>
          {label}

          <input
            checked={isChecked}
            onChange={onChange}
            className={cls.input}
            id={'check'}
            type="checkbox"
            disabled={disabled}
          />
        </label>
      </div>
    )
  }
)
