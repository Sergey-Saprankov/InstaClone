import React, { ChangeEvent, useRef } from 'react'

import cls from './InputTypeFile.module.scss'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'

type InputTypeFileProps = {
  setSelectedImage: (image: File) => void
  label: string
}

export const InputTypeFile = ({ setSelectedImage, label }: InputTypeFileProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const selectFileHandler = () => {
    inputRef && inputRef.current?.click()
  }

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      const maxSize = 10485760

      if (file.size <= maxSize && (file.type === 'image/jpeg' || file.type === 'image/png'))
        setSelectedImage(file)
    }
  }

  return (
    <div>
      <Button theme={ButtonTheme.PRIMARY} onClick={selectFileHandler} className={cls.btn}>
        {label}
      </Button>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type="file"
        onChange={uploadHandler}
        accept="image/png, image/jpeg, image/jpg"
      />
    </div>
  )
}
