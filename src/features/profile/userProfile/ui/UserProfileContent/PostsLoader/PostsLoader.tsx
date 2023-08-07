import cls from './PostsLoader.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface PostsLoaderProps {
  className?: string
}

export const PostsLoader = ({ className = '' }: PostsLoaderProps) => {
  return (
    <div className={classNames(cls.ldsSpinner, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
