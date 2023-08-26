import * as Slider from '@radix-ui/react-slider'

import cls from './SliderRange.module.scss'

type PropsType = {
  scale: number
  onScale: (scale: number) => void
}

export const SliderRange = ({ scale, onScale }: PropsType) => {
  const handlerOnChange = (value: number[]) => {
    onScale(value[0])
  }

  return (
    <>
      <Slider.Root
        value={[scale]}
        onValueChange={handlerOnChange}
        className={cls.SliderRoot}
        min={1}
        max={2}
        step={0.05}
      >
        <Slider.Track className={cls.SliderTrack}>
          <Slider.Range className={cls.SliderRange} />
        </Slider.Track>
        <Slider.Thumb className={cls.SliderThumb} aria-label="Volume" />
      </Slider.Root>
      {/*<input type={'range'} value={scale} onChange={handlerOnChange} min={1} max={2} step={0.1} />*/}
    </>
  )
}
