import cls from './Filters.module.scss'

import { FilterItem } from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/Filters/Filter/FilterItem'

type FilterType = {
  id: number
  title: string
  filter: string
}

const filters: FilterType[] = [
  {
    id: 1,
    title: 'Aden',
    filter: 'sepia(.2) brightness(1.15) saturate(1.4)',
  },
  {
    id: 2,
    title: 'Clarendon',
    filter: 'sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg)',
  },
  {
    id: 3,
    title: 'Crema',
    filter: 'sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg)',
  },
  {
    id: 4,
    title: 'Gingham',
    filter: 'contrast(1.1) brightness(1.1)',
  },
  {
    id: 5,
    title: 'Juno',
    filter: 'sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8)',
  },
  {
    id: 6,
    title: 'Lark',
    filter: 'sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25)',
  },
  {
    id: 7,
    title: 'Ludwig',
    filter: 'sepia(.25) contrast(1.05) brightness(1.05) saturate(2)',
  },
  {
    id: 8,
    title: 'Moon',
    filter: 'brightness(1.4) contrast(.95) saturate(0) sepia(.35)',
  },
  {
    id: 9,
    title: 'Original',
    filter: 'none',
  },
]

export const Filters = () => {
  return (
    <div className={cls.Filters}>
      <div className={cls.innerWrapper}>
        {filters.map(el => (
          <FilterItem key={el.id} filter={el.filter} title={el.title} />
        ))}
      </div>
    </div>
  )
}
