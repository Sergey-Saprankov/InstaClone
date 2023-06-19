import { ChangeEvent, useRef } from 'react'

import PlusIcon from '../../../../../../../../../public/icon/select-gallery-plus.svg'

type InputTypeFileProps = {
  setSelectedImage: (image: FileList) => void
}

export const InputTypeFilePlus = ({ setSelectedImage }: InputTypeFileProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const selectFileHandler = () => {
    inputRef && inputRef.current?.click()
  }

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const files = e.target.files

      setSelectedImage(files)
    }
  }

  return (
    <div>
      <button onClick={selectFileHandler}>
        <PlusIcon />
      </button>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        multiple
        type="file"
        onChange={uploadHandler}
        accept="image/png, image/jpeg, image/jpg"
      />
    </div>
  )
}
