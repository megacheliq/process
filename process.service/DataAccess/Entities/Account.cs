namespace DataAccess.Entities
{
    public enum PaymentMethod
    {
        DEFAULT,
        CRYPTO,
        СБП,
        Карта,
        Счет
    }

    public enum Currency
    {
        ARS, // Аргентинский песо
        BDT, // Бангладешская така
        CNY, // Китайский юань
        HKD, // Гонконгский доллар
        IDR, // Индонезийская рупия
        INR, // Индийская рупия
        JPY, // Японская иена
        KHR, // Камбоджийский риель
        KRW, // Южнокорейская вона
        KZT, // Казахстанский тенге
        LAK, // Лаосский кип
        MMK, // Мьянманский кьят
        MYR, // Малайзийский ринггит
        PHP, // Филиппинское песо
        PKR, // Пакистанская рупия
        RUB, // Российский рубль
        SGD, // Сингапурский доллар
        THB, // Тайский бат
        TRY, // Турецкая лира
        USD, // Доллар США
        UZS, // Узбекский сум
        VND  // Вьетнамский донг
    }

    //public enum Group
    //{
    //    СчётRUB,
    //    C2CRUB,
    //    romashkaRUB
    //}

    public enum AccountType
    {
        _in,
        _out,
        _both
    }

    public enum OperationType
    {
        prepayment,
        inverse_out
    }

    public enum LimitType
    {
        amount
    }

    public enum Period 
    {
        hour,
        day,
        month
    }

    public enum Status
    {
        active,
        disabled,
        cooling,
        no_collaborators,
        blocked
    }

    public class Limit
    {
        public long Id { get; set; }
        public OperationType OperationType { get; set; }
        public LimitType LimitType { get; set; }
        public decimal LimitValue { get; set; }
        public Period Period { get; set; }
    }

    public class Group
    {
        public long Id { get; set; }
        public PaymentMethod PaymentMethod { get; set; } = PaymentMethod.DEFAULT;
        public string Mainteiner { get; set; } = default!;
        public Currency Currency { get; set; } = Currency.RUB;
        public string Name { get; set; } = default!;
        public List<Limit>? Limits { get; set; }
    }


    public class Account
    {
        public long Id { get; set; }
        public PaymentMethod PaymentMethod { get; set; } = PaymentMethod.DEFAULT;
        public string Number { get; set; } = default!;
        public Currency Currency { get; set; } = Currency.RUB;
        public long GroupId { get; set; }
        public Group Group { get; set; }
        public string Bank { get; set; } = default!;
        public string BankBIC { get; set; } = default!;
        public string PaymentReceiver { get; set; } = default!;
        public string Alias { get; set; } = default!;
        public AccountType AccountType { get; set; } = AccountType._in;
        public bool Priority { get; set; }
        public Status Status { get; set; } = Status.no_collaborators;
        public List<Limit>? Limits { get; set; }
    }

}
