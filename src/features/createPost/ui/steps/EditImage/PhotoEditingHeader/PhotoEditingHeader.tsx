import ArrowBack from '../../../../../../../public/icon/arrow-back.svg'
import { useTranslation } from '../../../../../../shared/hooks/useTranslation'
import cls from '../EditImage.module.scss'

import { getStep } from 'features/createPost/model/selectors/getStep/getStep'
import { setCloseModal, setStep } from 'features/createPost/model/slice/uploadPhotoSlice'
import { STEP } from 'features/createPost/model/types/const'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

type PropsType = {
  onPublishPost: () => void
}

export const PhotoEditingHeader = ({ onPublishPost }: PropsType) => {
  const step = useAppSelector(getStep)
  const dispatch = useAppDispatch()

  const { t } = useTranslation()

  const onNextStepHandler = () => {
    if (step < STEP.PUBLICATION) {
      const nextStep = step + 1

      dispatch(setStep(nextStep))
    }
  }

  const prevStepHandler = () => {
    if (step > STEP.SELECT_IMAGE) {
      const nextStep = step - 1

      dispatch(setStep(nextStep))
    } else {
      dispatch(setCloseModal(true))
    }
  }

  return (
    <header className={classNames(cls.header, {}, [])}>
      <Button onClick={prevStepHandler} className={cls.btn} theme={ButtonTheme.Clear}>
        <ArrowBack />
      </Button>

      <Text tag={'h2'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
        {step < STEP.PUBLICATION ? t.create.crop : t.create.publication}
      </Text>

      <Button
        onClick={step < STEP.PUBLICATION ? onNextStepHandler : onPublishPost}
        theme={ButtonTheme.Clear}
      >
        <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.PRIMARY}>
          {step < STEP.PUBLICATION ? t.create.next : t.create.publish}
        </Text>
      </Button>
    </header>
  )
}
