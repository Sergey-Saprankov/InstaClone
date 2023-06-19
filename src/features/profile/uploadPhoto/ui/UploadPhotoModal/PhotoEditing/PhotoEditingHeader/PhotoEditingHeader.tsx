import ArrowBack from '../../../../../../../../public/icon/arrow-back.svg'

import { getStep } from 'features/profile/uploadPhoto/model/selectors/getStep/getStep'
import { setCloseModal, setStep } from 'features/profile/uploadPhoto/model/slice/uploadPhotoSlice'
import { STEP } from 'features/profile/uploadPhoto/model/types/const'
import cls from 'features/profile/uploadPhoto/ui/UploadPhotoModal/PhotoEditing/PhotoEditing.module.scss'
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

  const onNextStepHandler = () => {
    if (step < 2) {
      const nextStep = step + 1

      dispatch(setStep(nextStep))
    }
  }

  const prevStepHandler = () => {
    if (step) {
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
        {step < STEP.PUBLICATION ? 'Crop' : 'Publication'}
      </Text>

      <Button onClick={step < 2 ? onNextStepHandler : onPublishPost} theme={ButtonTheme.Clear}>
        <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.PRIMARY}>
          {step < STEP.PUBLICATION ? 'Next' : 'Publish'}
        </Text>
      </Button>
    </header>
  )
}
