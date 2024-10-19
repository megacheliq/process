using DataAccess.Entities;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Security.Principal;

namespace process.service.Domain
{
    public class CreateAccountDto
    {
        public PaymentMethod PaymentMethod { get; set; }
        public string Number { get; set; } = default!;
        public Currency Currency { get; set; }
        public long GroupId { get; set; }
        public string Bank { get; set; } = default!;
        public string BankBIC { get; set; } = default!;
        public string PaymentReceiver { get; set; } = default!;
        public string Alias { get; set; } = default!;
        public AccountType AccountType { get; set; }
        public bool Priority { get; set; }
        public List<LimitDto>? Limits { get; set; }
    }

    public class UpdateAccountDto
    {
        public PaymentMethod? PaymentMethod { get; set; }
        public string? Number { get; set; }
        public Currency? Currency { get; set; }
        public long? GroupId { get; set; }
        public string? Bank { get; set; }
        public string? BankBIC { get; set; }
        public string? PaymentReceiver { get; set; }
        public string? Alias { get; set; }
        public AccountType? AccountType { get; set; }
        public bool? Priority { get; set; }
        public Status? Status { get; set; }
        public List<LimitDto>? Limits { get; set; }
    }

    public class CreateGroupDto
    {
        public PaymentMethod PaymentMethod { get; set; }
        public string Mainteiner { get; set; } = default!;
        public Currency Currency { get; set; }
        public string Name { get; set; } = default!;
        public List<LimitDto>? Limits { get; set; }
    }

    public class UpdateGroupDto
    {
        public PaymentMethod? PaymentMethod { get; set; }
        public string? Mainteiner { get; set; }
        public Currency? Currency { get; set; }
        public string? Name { get; set; }
        public List<LimitDto>? Limits { get; set; }
    }

    public class LimitDto
    {
        public OperationType OperationType { get; set; }
        public LimitType LimitType { get; set; }
        public decimal LimitValue { get; set; }
        public Period Period { get; set; }
    }

    [ApiController]
    [Route("/api/[controller]")]
    public class AccountController : ControllerBase
    {
        private IAccountRepository _accountRepository { get; }
        private IGroupRepository _groupRepository { get; }

        public AccountController(IAccountRepository accountRepository, IGroupRepository groupRepository)
        {
            _accountRepository = accountRepository;
            _groupRepository = groupRepository;
        }

        [HttpGet("GetAllAccounts")]
        public async Task<IEnumerable<Account>> GetAllAccounts()
        {
            return await _accountRepository.GetAllAsync();
        }

        [HttpGet("GetAllGroups")]
        public async Task<IEnumerable<Group>> GetAllGroups()
        {
            return await _groupRepository.GetAllAsync();
        }

        [HttpGet("GetAccount/{id}")]
        public async Task<Account> GetAccount(long id)
        {
            return await _accountRepository.GetByIdAsync(id);
        }

        [HttpGet("GetGroup/{id}")]
        public async Task<Group> GetGroup(long id)
        {
            return await _groupRepository.GetByIdAsync(id);
        }


        [HttpPost("AddAccount")]
        public async Task AddAccount(CreateAccountDto dto)
        {
            var account = new Account
            {
                PaymentMethod = dto.PaymentMethod,
                Number = dto.Number,
                Currency = dto.Currency,
                GroupId = dto.GroupId,
                Bank = dto.Bank,
                BankBIC = dto.BankBIC,
                PaymentReceiver = dto.PaymentReceiver,
                Alias = dto.Alias,
                AccountType = dto.AccountType,
                Priority = dto.Priority,
                Limits = dto.Limits?.Select(limit => new Limit
                {
                    OperationType = limit.OperationType,
                    LimitType = limit.LimitType,
                    LimitValue = limit.LimitValue,
                    Period = limit.Period
                }).ToList()
            };

            await _accountRepository.AddAsync(account);
        }

        [HttpPost("AddGroup")]
        public async Task AddGroup(CreateGroupDto dto)
        {
            var group = new Group
            {
                PaymentMethod = dto.PaymentMethod,
                Mainteiner = dto.Mainteiner,
                Currency = dto.Currency,
                Name = dto.Name,
                Limits = dto.Limits?.Select(limit => new Limit
                {
                    OperationType = limit.OperationType,
                    LimitType = limit.LimitType,
                    LimitValue = limit.LimitValue,
                    Period = limit.Period
                }).ToList()
            };

            await _groupRepository.AddAsync(group);
        }

        [HttpPut("UpdateGroup/{id}")]
        public async Task UpdateGroup(long id, UpdateGroupDto dto)
        {
            var group = await _groupRepository.GetByIdAsync(id);

            if (group == null) 
                throw new ArgumentException(nameof(group));

            group.PaymentMethod = dto.PaymentMethod ?? group.PaymentMethod;
            group.Mainteiner = dto.Mainteiner ?? group.Mainteiner;
            group.Currency = dto.Currency ?? group.Currency;
            group.Name = dto.Name ?? group.Name;

            if (dto.Limits != null)
            {
                group.Limits = dto.Limits.Select(limit => new Limit
                {
                    OperationType = limit.OperationType,
                    LimitType = limit.LimitType,
                    LimitValue = limit.LimitValue,
                    Period = limit.Period
                }).ToList();
            }

            await _groupRepository.UpdateAsync(group);
        }

        [HttpPut("UpdateAccount/{id}")]
        public async Task UpdateAccount(long id, UpdateAccountDto dto)
        {
            var account = await _accountRepository.GetByIdAsync(id);

            if (account == null)
                throw new ArgumentNullException(nameof(account));

            account.PaymentMethod = dto.PaymentMethod ?? account.PaymentMethod;
            account.Number = dto.Number ?? account.Number;
            account.Currency = dto.Currency ?? account.Currency;
            account.GroupId = dto.GroupId ?? account.GroupId;
            account.Bank = dto.Bank ?? account.Bank;
            account.BankBIC = dto.BankBIC ?? account.BankBIC;
            account.PaymentReceiver = dto.PaymentReceiver ?? account.PaymentReceiver;
            account.Alias = dto.Alias ?? account.Alias;
            account.AccountType = dto.AccountType ?? account.AccountType;
            account.Priority = dto.Priority ?? account.Priority;
            account.Status = dto.Status ?? account.Status;

            if (dto.Limits != null)
            {
                account.Limits = dto.Limits.Select(limit => new Limit
                {
                    OperationType = limit.OperationType,
                    LimitType = limit.LimitType,
                    LimitValue = limit.LimitValue,
                    Period = limit.Period
                }).ToList();
            }

            await _accountRepository.UpdateAsync(account);
        }

        [HttpDelete("DeleteAccount/{id}")]
        public async Task DeleteAccount(long id)
        {
            await _accountRepository.DeleteAsync(await _accountRepository.GetByIdAsync(id));
        }

        [HttpDelete("DeleteGroup/{id}")]
        public async Task DeleteGroup(long id)
        {
            await _groupRepository.DeleteAsync(await _groupRepository.GetByIdAsync(id));
        }
    }
}
