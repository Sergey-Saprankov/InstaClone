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

    login: {
        signIn: 'Войти',
        email: 'Эл. адрес',
        password: 'Пароль',
        forgotPassword: 'Забыли пароль?',
        hasAccount: 'У вас ещё нет аккаунта?',
        signUp: 'Зарегистрироваться'
    },

    register: {
        signUp: 'Зарегистрироваться',
        userName: 'Имя пользователя',
        email: 'Эл. почта',
        password: 'Пароль',
        passwordConfirm: 'Повторите пароль',
        hasAccount: 'Уже есть аккаунт?',
        signIn: 'Войти',
    },

    passwordRecovery: {
        forgotPassword: 'Не удается войти?',
        email: 'Email',
        description: 'Введите свой электронный адрес, и мы отправим вам дальнейшие инструкции.',
        sendLink: 'Получить ссылку для входа',
        backSignIn: 'Вернуться к входу',
        createPassword: 'Создать пароль',
        newPassword: 'Новый пароль',
        passwordConfirm: 'Повторите пароль',
        passwordLength: 'Пароль должен содержать от 6 до 20 символов',
    },

    logOutModal: {
        logOut: 'Выйти',
        confirmation: 'Вы уверенны что хотите выйти из аккаунта?',
    },

    validationMessages: {
        emailRequired: 'Введите адрес эл.почты',
        emailCorrect: 'Введите корректный адрес эл.почты',
        passwordRequired: 'Введите пароль',
        passwordNotMatch: 'Пароли не совпадают',
        userNameRequired: 'Введите имя пользователя'
    },

    common: {
        selectFromComputer: 'Выбрать на компьютере',
        yes: 'Да',
        no: 'Нет',
    }
}

export type LocaleType = typeof ru

export type LocaleSidebarType = LocaleType["sidebar"]
export type LocaleProfileType = LocaleType["profile"]
