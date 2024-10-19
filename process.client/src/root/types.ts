// Limit interface
export interface Limit {
    id: number;
    operationType: OperationType;
    limitType: LimitType;
    limitValue: number;
    period: Period;
}

// Account interface
export interface Account {
    id: number;
    paymentMethod: PaymentMethod;
    number: string;
    currency: Currency;
    groupId: number;
    bank: string;
    bankBIC: string;
    paymentReceiver: string;
    alias: string;
    accountType: AccountType;
    priority: boolean;
    status: Status;
    limits?: Limit[];
}

export interface Group {
    id: number;
    paymentMethod: PaymentMethod;
    mainteiner: string;
    currency: Currency;
    name: string;
    limits?: Limit[];
}

// LimitDto interface
export interface LimitDto {
    operationType: OperationType;
    limitType: LimitType;
    limitValue: number;
    period: Period;
}

// CreateAccountDto interface
export interface CreateAccountDto {
    paymentMethod: PaymentMethod;
    number: string;
    currency: Currency;
    groupId: number;
    bank: string;
    bankBIC: string;
    paymentReceiver: string;
    alias: string;
    accountType: AccountType;
    priority: boolean;
    limits?: LimitDto[];
}

// UpdateAccountDto interface
export interface UpdateAccountDto {
    paymentMethod?: PaymentMethod;
    number?: string;
    currency?: Currency;
    groupId?: number;
    bank?: string;
    bankBIC?: string;
    paymentReceiver?: string;
    alias?: string;
    accountType?: AccountType;
    priority?: boolean;
    status?: Status;
    limits?: LimitDto[];
}

export interface CreateGroupDto {
    paymentMethod: PaymentMethod;
    mainteiner: string;
    currency: Currency;
    name: string;
    limits?: LimitDto[];
}

export interface UpdateGroupDto {
    paymentMethod?: PaymentMethod;
    mainteiner?: string;
    currency?: Currency;
    name?: string;
    limits?: LimitDto[];
}

export enum Status {
    active = 0,
    disabled = 1,
    cooling = 2,
    no_collaborators = 3,
    blocked = 4,
}

export enum PaymentMethod {
    DEFAULT = 0,
    CRYPTO = 1,
    СБП = 2,
    Карта = 3,
    Счет = 4
}

export enum Currency {
    ARS = 0,
    BDT = 1,
    CNY = 2,
    HKD = 3,
    IDR = 4,
    INR = 5,
    JPY = 6,
    KHR = 7,
    KRW = 8,
    KZT = 9,
    LAK = 10,
    MMK = 11,
    MYR = 12,
    PHP = 13,
    PKR = 14,
    RUB = 15,
    SGD = 16,
    THB = 17,
    TRY = 18,
    USD = 19,
    UZS = 20,
    VND = 21,
}

// export enum Group {
//     СчётRUB = 0,
//     C2CRUB = 1,
//     moneraRUB = 2
// }

export enum AccountType {
    _in = 0,
    _out = 1,
    _both = 2
}

export enum OperationType {
    prepayment = 0,
    inverse_out = 1
}

export enum LimitType {
    amount = 0
}

export enum Period {
    hour = 0,
    day = 1,
    month = 2
}

export type EnumType = 'Status' | 'PaymentMethod' | 'Currency' | 'AccountType' | 'OperationType' | 'LimitType' | 'Period';

const EnumStrings: Record<EnumType, Record<number, string>> = {
    Status: {
        0: "active",
        1: "disabled",
        2: "cooling",
        3: "no_collaborators",
        4: "blocked",
    },
    PaymentMethod: {
        0: "DEFAULT",
        1: "CRYPTO",
        2: "СБП",
        3: "Карта",
        4: "Счет",
    },
    Currency: {
        0: "ARS",
        1: "BDT",
        2: "CNY",
        3: "HKD",
        4: "IDR",
        5: "INR",
        6: "JPY",
        7: "KHR",
        8: "KRW",
        9: "KZT",
        10: "LAK",
        11: "MMK",
        12: "MYR",
        13: "PHP",
        14: "PKR",
        15: "RUB",
        16: "SGD",
        17: "THB",
        18: "TRY",
        19: "USD",
        20: "UZS",
        21: "VND",
    },
    AccountType: {
        0: "in",
        1: "out",
        2: "both",
    },
    OperationType: {
        0: "prepayment",
        1: "inverse_out",
    },
    LimitType: {
        0: "amount",
    },
    Period: {
        0: "hour",
        1: "day",
        2: "month",
    },
};

export function getEnumString(enumType: EnumType, value: number): string | undefined {
    const enumMapping = EnumStrings[enumType];
    return enumMapping ? enumMapping[value] : undefined;
}