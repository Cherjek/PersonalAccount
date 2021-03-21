export const AppLocalization = {
  common: {
    Add: 'Добавить',
    ErrorServer: 'Произошла ошибка на сервере',
    ErrorUserBlocked: 'Пользоватаель заблокирован',
    ErrorUserDisabled: 'Пользоватаель не активен',
    ErrorConfirmationCode: 'Неверный код подтверждения',
    ErrorCustomerNotFound: 'Пользователь не найден',
    CodeConfirm: 'Код подтверждения',
    InputCodeConfirm: 'Введите код подтверждения',
    Choose: 'Выбрать',
    Start: 'Начало',
    End: 'Конец',
    ChooseDate: 'Выберите дату',
    NumberPersonalAccount: 'Номер лицевого счета',
    NumberMeteringDevice: 'Номер прибора учета',
    validation: {
      required: 'Обязательное поле',
      email: 'Ошибка поля email',
      hasNumber: 'Пароль должен иметь число',
      hasCapitalCase: 'Пароль должен иметь букву в верхнем регистре',
      hasSmallCase: 'Пароль должен иметь букву в нижнем регистре',
      hasSpecialCharacters: 'Пароль должен иметь спец символ: + - _ ! # $ % & ?',
      minlength: 'Длина пароля пароля должна быть не меньше {0} символов',
    }
  },
  grid: {
    Search: 'Поиск',
    Of: 'из',
    ItemsPerPageLabel: 'Кол-во записей на странице',
    NextPageLabel: 'Следующая страница',
    PreviousPageLabel: 'Предыдущая страница'
  },
  login: {
    Login: 'Логин',
    Password: 'Пароль',
    InputLogin: 'Введите логин',
    InputPassword: 'Введите пароль',
    Enter: 'Войти',
    ErrorEnter: 'Неверный логин или пароль',
    ErrorRegistrationNotFinished: 'Регистрация не закончена',
    ErrorManyEntered: 'Много попыток входа',
    Registration: 'Регистрация',
    ForgetPass: 'Забыли пароль?'
  },
  registration: {
    PersonName: 'Имя',
    Surname: 'Фамилия',
    MiddleName: 'Отчество',
    Phone: 'Телефон',
    MobPhone: 'Моб. телефон',
    Email: 'Электронная почта',
    InputPersonName: 'Введите имя',
    InputSurname: 'Введите фамилию',
    InputMiddleName: 'Введите отчество',
    InputPhone: 'Введите телефон',
    InputMobPhone: 'Введите моб. телефон',
    InputEmail: 'Введите электронную почту',
    Registered: 'Зарегистрировать',
    ErrorPhoneOrEmail: 'Должен быть введен телефон или эл. почта'
  },
  registrationConfirm: {
    Confirm: 'Подтвердить',
    ErrorAlreadyConfirm: 'Пользователь уже зарегестрирован'
  },
  recovery: {
    SendCode: 'Выслать данные для восстановления',
    EmailOrPhone: 'E-mail или телефон'
  },
  metering: {
    ViewAllList: 'Вид: Общий список',
    ViewByType: 'Вид: По типам',
    AllDevices: 'Все приборы',
  },
  home: {
    Exit: 'Выход',
    Title: 'АСКУЭ "СИМ"',
    MeterReadings: 'Счетчики и показания',
    Documents: 'Документы и обращения',
    TechnicalSupport: 'Техническая поддержка',
  },
  meterDevices: {
    MeteringDevices: 'Приборы учета',
    SuccessAddMeter: 'Прибор учета успешно добавлен',
    ErrorAddMeter: 'Произошла ошибка',
    ForbidenAddMeter: 'Пользователю запрещено добавлять приборы',
    PendingAddMeter: 'Запрос на добавление прибора рассматривается',
    AddNewMeter: 'Добавить прибор учета',
    AnyQuestions: 'Есть вопросы?',
    WriteUs: 'Напишите нам',
  },
  documents: {
    DocumentsAndMessages: 'Документы и обращения'
  }
}
