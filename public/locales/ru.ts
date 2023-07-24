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
        selectFromComputer: 'Выбрать на компьютере',
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

    // create: {
    //     createNewPost: 'Создание публикации',
    //     selectAPhotoInYourComputer: 'Перетащите сюда фото',
    //     selectFromComputer: 'Выбрать на компьютере',
    // }
}

export type LocaleType = typeof ru

export type LocaleSidebarType = LocaleType["sidebar"]
export type LocaleProfileType = LocaleType["profile"]
