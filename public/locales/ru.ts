export const ru = {
    profileSettingPage: {
        generalInformation: 'Общая Информация',
        devices: 'Устройства',
        accountManagement: 'Управление Аккаунтом',
        myPayments: 'Платежи',
        addProfilePhoto: 'Добавить Фото',
        userName: 'Имя Пользователя',
        firstName: 'Имя',
        lastName: 'Фамилия',
        dateOfBirthday: 'Дата Рождения',
        city: 'Город',
        aboutMe: 'Расскажите о себе',
        deleteProfile: 'Удалить Профиль',
        saveChanges: 'Сохранить',
    },

    sidebar: {
        home: 'Главная',
        myProfile: 'Профиль',
        message: 'Сообщения',
        create: 'Создать',
        statistics: 'Статистика',
        favorites: 'Избранное',
        logOut: 'Выйти',
    },

    profile: {
        profileSettings: 'Настройки Профиля',
        following: 'Подписки',
        followers: 'Подписчики',
        publications: 'Публикации',
    },

    create: {
        createNewPost: 'Создание публикации',
        selectAPhotoInYourComputer: 'Перетащите сюда фото',
        crop: 'Обрезать',
        publication: 'Создание публикации',
        next: 'Далее',
        publish: 'Поделиться',
        original: 'Оригинал',
        addPublicationDescriptions:' Добавьте описание',
        yourPostHasBeenShared: 'Публикация размещена',
        cancelPublication: 'Отменить публикацию ?',
        changesWillNotBeSaved: 'Если вы выйдете, изменения не будут сохранены.',
        delete: 'Удалить',
        cancel: 'Отмена'
    },

    common: {
        selectFromComputer: 'Выбрать на компьютере',
    }
}

export type LocaleType = typeof ru

export type LocaleSidebarType = LocaleType["sidebar"]
export type LocaleProfileType = LocaleType["profile"]
