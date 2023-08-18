import Image from 'next/image'

import cls from './FilterItem.module.scss'

import { getImage } from 'features/createPost/model/selectors/getImage/getImage'
import { setFilter } from 'features/createPost/model/slice/uploadPhotoSlice'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

type PropsType = {
  filter: string
  title: string
}

export const FilterItem = ({ filter, title }: PropsType) => {
  const imageSrc = useAppSelector(getImage)
  const dispatch = useAppDispatch()
  const onFilterChange = () => {
    dispatch(setFilter(filter))
  }

  return (
    <div className={cls.container}>
      <div className={cls.block}>
        <Image
          src={imageSrc}
          alt={'filter'}
          style={{ filter: filter }}
          width={1000}
          height={1000}
          onClick={onFilterChange}
        />
      </div>
      <Text tag={'span'} font={TextFontTheme.INTER_MEDIUM_L} color={TextColorTheme.LIGHT}>
        {title}
      </Text>
    </div>
  )
}
