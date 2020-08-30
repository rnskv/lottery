import {
    USER_ALREADY_EXIST,
    USER_WRONG_PASSWORD,
    USER_NOT_FOUND,
    USER_NOT_ENOUGH_MONEY,
    USER_WRONG_REGISTER_DATA,
    USER_NOT_SELECT_ITEMS,
    USER_NOT_ENOUGHT_ACCESS_RIGHT,
    USER_SUCCESS_REGISTER,
    USER_CREATE_STEAM_ITEMS_WITHDRAW,
    INTERNAL_SERVER_ERROR,
    BET_SENDING,
    USER_NOT_AUTH,
    GAME_CLOSED_FOR_BETS,
    BET_ACCEPTED,
    REALTIME_DISCONNECTED,
    USER_WIN,
    WAITING_LAST_BETS,
    SO_MANY_ITEMS,
    WITHDRAW_CREATED_QIWI,
    WITHDRAW_ERROR_DATA_QIWI,
    WITHDRAW_ERROR_MIN_AMOUNT,
    INVENTORY_ITEMS_ADDED,
    TRADEOFFER_ACCEPTED,
    TRADEOFFER_VERIFY_CODE,
    TRADEOFFER_SENT_ERROR,
    USER_HAS_NOT_ITEMS,
    STEAM_TRADE_URL_MIN_LENGTH,
    STEAM_TRADE_URL_CHANGED,
    STEAM_TRADE_URL_ALREADY_TAKEN,
    EMPTY_ITEM_COST,
    USER_NOT_REGISTER,
    FORBIDDEN_TAKE_ITEMS,
    GAME_NOT_FOUND,
    USER_PAYMENT_SUCCESS,
    USER_PAYMENT_ERROR,
    REFERRAL_CASHOUT_ERROR,
    REFERRAL_CASHOUT_SUCCESS,
    REFERRAL_CODE_ALREADY_EXIST,
    REFERRAL_CODE_CREATE_SUCCESS,
    REFERRAL_CODE_WRONG,
    REFERRAL_CODE_COPY_SUCCESS,
    REFERRAL_COPY_ERROR,
    REFERRAL_LINK_COPY_SUCCESS,
    USER_NOT_GET_NEEDED_LEVEL,
    USER_WRONG_AWARD_LEVEL,
    USER_GET_AWARD_FOR_LEVEL,
    USER_ALREADY_GET_BONUS,
    USER_BONUS_TAKEN,
    USER_BONUS_BALANCE,
} from './notificationsTypes';

export default {
    [USER_BONUS_BALANCE]: {
        type: 'ERROR',
        title: 'Бонус',
        text: 'Для получения бонуса на балансе не должно оставаться средств!',
    },
    [USER_BONUS_TAKEN]: {
        type: 'SUCCESS',
        title: 'Бонус',
        text: 'Бонус получен!',
    },
    [USER_ALREADY_GET_BONUS]: {
        type: 'ERROR',
        title: 'Бонус',
        text: 'Вы уже получили бонус. Попробуйте позже',
    },
    [USER_NOT_GET_NEEDED_LEVEL]: {
        type: 'ERROR',
        title: 'Награда за уровень',
        text: 'Вы не достигли необходимого уровня.',
    },
    [USER_WRONG_AWARD_LEVEL]: {
        type: 'ERROR',
        title: 'Награда за уровень',
        text: 'Вы не можете получить награду за этот уровень.',
    },
    [USER_GET_AWARD_FOR_LEVEL]: {
        type: 'SUCCESS',
        title: 'Награда за уровень',
        text: 'Награда за достижение уровня получена!',
    },
    [REFERRAL_CODE_COPY_SUCCESS]: {
        type: 'SUCCESS',
        title: 'Партнёрка',
        text: 'Партнёрский код скопирован в буфер обмена.',
    },
    [REFERRAL_COPY_ERROR]: {
        type: 'ERROR',
        title: 'Партнёрка',
        text: 'Произошла ошибка во время записи в буфер обмена.',
    },
    [REFERRAL_LINK_COPY_SUCCESS]: {
        type: 'SUCCESS',
        title: 'Партнёрка',
        text: 'Партнёрская ссылка скопирован в буфер обмена.',
    },
    [USER_ALREADY_EXIST]: {
        type: 'ERROR',
        title: 'Система',
        text: 'Пользователь с таким именем уже существует.',
    },
    [USER_WRONG_PASSWORD]: {
        type: 'ERROR',
        title: 'Система',
        text: 'Вы ввели неверный пароль',
    },
    [USER_NOT_FOUND]: {
        type: 'ERROR',
        title: 'Система',
        text: 'Пользователь с таким именем не найден.',
    },
    [USER_WRONG_REGISTER_DATA]: {
        type: 'ERROR',
        title: 'Система',
        text: 'Вы ввели некорретные данные при регистрации.',
    },
    [USER_SUCCESS_REGISTER]: {
        type: 'SUCCESS',
        title: 'Система',
        text: 'Вы успешно зарегистрировались! Можете войти в игру используя свои данные.',
    },
    [USER_NOT_AUTH]: {
        type: 'ERROR',
        title: 'Ошибка доступа',
        text: 'Вы не авторизированы.',
    },
    [USER_NOT_ENOUGH_MONEY]: {
        type: 'ERROR',
        title: 'Игра',
        text: 'У вас недостаточно средств. Пожалуйста, пополните ваш баланс',
    },
    [USER_NOT_ENOUGHT_ACCESS_RIGHT]: {
        type: 'ERROR',
        title: 'Сервер',
        text: 'У вас недостаточно прав для выполнения запроса',
    },
    [USER_NOT_SELECT_ITEMS]: {
        type: 'ERROR',
        title: 'Игра',
        text: 'Вы не выбрали предметы для ставки.',
    },
    [USER_WIN]: {
        type: 'SUCCESS',
        title: 'Игра',
        text: 'Поздравляем! Вы одержали победу в игре. Выигрыш будет зачислен на ваш баланс в ближайшее время.',
    },
    [USER_HAS_NOT_ITEMS]: {
        type: 'ERROR',
        title: 'Сервер',
        text: 'В вашем инвентаре нет указанных предметов.',
    },
    [USER_CREATE_STEAM_ITEMS_WITHDRAW]: {
        type: 'SUCCES',
        title: 'Steam',
        text: 'Заявка на вывод предметов в steam создана. Наш бот отправит вам предложение обмена в ближайшее время.',
    },
    [INTERNAL_SERVER_ERROR]: {
        type: 'ERROR',
        title: 'Система',
        text: 'Произошел сбой на сервере. Пожалуйста, повторите попытку позже.',
    },
    [GAME_CLOSED_FOR_BETS]: {
        type: 'ERROR',
        title: 'Игра',
        text: 'Ставки больше не принимаются. Игра скоро начнется!',
    },
    [BET_SENDING]: {
        type: 'SUCCESS',
        title: 'Игра',
        text: 'Ваша ставка находится в очереди! В скором времени она будет добавлена в игру.',
    },
    [BET_ACCEPTED]: {
        type: 'SUCCESS',
        title: 'Игра',
        text: 'Ваша ставка принята!',
    },
    [REALTIME_DISCONNECTED]: {
        type: 'ERROR',
        title: 'Сервер',
        text: 'Произошёл разрыв соединения!',
    },
    [WAITING_LAST_BETS]: {
        type: 'SUCCESS',
        title: 'Игра',
        text: 'Игра начнется после того как будут обработаны последние ставки.',
    },
    [SO_MANY_ITEMS]: {
        type: 'ERROR',
        title: 'Игра',
        text: 'Максимальное количество предметов в игре - 10',
    },
    [WITHDRAW_CREATED_QIWI]: {
        type: 'SUCCESS',
        title: 'Платежная система',
        text: 'Вывод на систему QIWI успешно создан. Начисление средств произойдет в течении 24 часов.',
    },
    [WITHDRAW_ERROR_DATA_QIWI]: {
        type: 'ERROR',
        title: 'Платежная система',
        text: 'При создании вывода произошла ошибка. Не верно указаны платежные данные.',
    },
    [WITHDRAW_ERROR_MIN_AMOUNT]: {
        type: 'ERROR',
        title: 'Платежная система',
        text: 'При выводе средств, Вы указали сумму меньше минимальной.',
    },
    [TRADEOFFER_ACCEPTED]: {
        type: 'SUCCESS',
        title: 'Steam',
        text: 'Предметы получены. Скоро они будут добавлены в ваш инвентарь.',
    },
    [TRADEOFFER_VERIFY_CODE]: {
        type: 'SUCCESS',
        title: 'Steam',
        text: '{text}',
    },
    [TRADEOFFER_SENT_ERROR]: {
        type: 'ERROR',
        title: 'Steam',
        text: 'При отправке предложения обмена произошла ошибка.',
    },
    [INVENTORY_ITEMS_ADDED]: {
        type: 'SUCCESS',
        title: 'Платформа',
        text: 'Предметы были добавлены в инвентарь.',
    },
    [STEAM_TRADE_URL_MIN_LENGTH]: {
        type: 'ERROR',
        title: 'Аккаунт',
        text: 'Необходимо указать ссылку',
    },
    [STEAM_TRADE_URL_CHANGED]: {
        type: 'SUCCESS',
        title: 'Аккаунт',
        text: 'Ссылка на обмен STEAM успешно изменена!',
    },
    [STEAM_TRADE_URL_ALREADY_TAKEN]: {
        type: 'ERROR',
        title: 'Аккаунт',
        text: 'Такая ссылка уже используется другим аккаунтом',
    },
    [EMPTY_ITEM_COST]: {
        type: 'ERROR',
        title: 'Steam',
        text: 'Не удалось определить цену на некоторые предметы.',
    },
    [USER_NOT_REGISTER]: {
        type: 'ERROR',
        title: 'Система',
        text: 'Пользователь не зарегистрирован',
    },
    [FORBIDDEN_TAKE_ITEMS]: {
        type: 'ERROR',
        title: 'Система',
        text: 'Вы не можете брать предметы из инвентаря бота.',
    },
    [GAME_NOT_FOUND]: {
        type: 'ERROR',
        title: 'Система',
        text: 'Игра не найдена.',
    },
    [USER_PAYMENT_SUCCESS]: {
        type: 'SUCCESS',
        title: 'Платежная система',
        text: 'Вывод средств пользователю звершен.',
    },
    [USER_PAYMENT_ERROR]: {
        type: 'ERROR',
        title: 'Платежная система',
        text: 'Произошла ошибка при выводе средств. Подробная ифнормация в консоли разработчика.',
    },
    [REFERRAL_CASHOUT_SUCCESS]: {
        type: 'SUCCESS',
        title: 'Партнёрка',
        text: 'Вывод средств на баланс завершён.',
    },
    [REFERRAL_CASHOUT_ERROR]: {
        type: 'ERROR',
        title: 'Партнёрка',
        text: 'Произошла ошибка при выводе средств с партнёрского счета.',
    },
    [REFERRAL_CODE_CREATE_SUCCESS]: {
        type: 'SUCCESS',
        title: 'Партнёрка',
        text: 'Реферальный код создан!',
    },
    [REFERRAL_CODE_WRONG]: {
        type: 'ERROR',
        title: 'Партнёрка',
        text: 'Формат реферального кода неверный.',
    },
    [REFERRAL_CODE_ALREADY_EXIST]: {
        type: 'ERROR',
        title: 'Партнёрка',
        text: 'Этот реферальный код уже занят.',
    },
    undefined: {
        type: 'ERROR',
        title: 'Неизвестно',
        text: 'Неизвестная ошибка!',
    }
}