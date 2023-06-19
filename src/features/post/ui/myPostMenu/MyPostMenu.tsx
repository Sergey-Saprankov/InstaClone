import React from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { DeletePostComponent } from 'features/post/deletePost/ui/DeletePostComponent'
import cls from 'features/post/ui/myPostMenu/MyPostMenu.module.scss'

export const MyPostMenu = () => {
  return (
    <div className={cls.menu}>
      <DropdownMenu.Root modal={false}>
        <DropdownMenu.Trigger asChild>
          <button>...</button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DeletePostComponent />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}
