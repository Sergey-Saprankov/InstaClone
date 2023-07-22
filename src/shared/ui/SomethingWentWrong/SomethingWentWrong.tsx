import { useRouter } from 'next/router'

import WentWrongIcon from '../../../../public/icon/went-wrong.svg'

import cls from './SomethingWentWrong.module.scss'

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'

export const SomethingWentWrong = () => {
  const router = useRouter()

  const handlerReload = () => {
    router.reload()
  }

  return (
    <div className={cls.container}>
      <div className={cls.content}>
        <WentWrongIcon width={60} />
        <p className={cls.title}>Something went wrong</p>
        <p className={cls.description}>There&lsquo;s an issue and the page could not be loaded.</p>
        <Button
          onClick={handlerReload}
          theme={ButtonTheme.PRIMARY}
          size={ButtonSize.M}
          className={cls.button}
        >
          Reload page
        </Button>
      </div>
    </div>
  )
}
