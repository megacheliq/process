using DataAccess.Entities;

namespace DataAccess.Repositories
{
    public interface IAccountRepository
    {
        Task<Account> GetByIdAsync(long id);

        Task<IEnumerable<Account>> GetAllAsync();

        Task AddAsync(Account account);

        Task UpdateAsync(Account account);

        Task DeleteAsync(Account account);
    }
}
