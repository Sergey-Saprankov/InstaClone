import Image from 'next/image'

import { getImage } from 'features/profile/uploadPhoto/model/selectors/getImage/getImage'
import { setFilter } from 'features/profile/uploadPhoto/model/slice/uploadPhotoSlice'
import cls from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/Filters/Filters.module.scss'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
type PropsType = {
  // image: string
  filter: string
  title: string
  // onFilterClick: (filter: string) => void
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
