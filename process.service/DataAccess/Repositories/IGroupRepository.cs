using DataAccess.Entities;

namespace DataAccess.Repositories
{
    public interface IGroupRepository
    {
        Task<Group> GetByIdAsync(long id);

        Task<IEnumerable<Group>> GetAllAsync();

        Task AddAsync(Group group);

        Task UpdateAsync(Group group);

        Task DeleteAsync(Group group);
    }
}
