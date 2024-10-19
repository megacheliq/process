using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess
{
    public class AppDbContext : DbContext
    {
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Group> Groups { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>(entity =>
            {
                entity.OwnsMany(a => a.Limits, limit =>
                {
                    limit.WithOwner().HasForeignKey("AccountId");
                    limit.Property(l => l.OperationType).HasColumnName("OperationType");
                    limit.Property(l => l.LimitType).HasColumnName("LimitType");
                    limit.Property(l => l.LimitValue).HasColumnName("LimitValue");
                    limit.Property(l => l.Period).HasColumnName("Period");
                });
            });

            modelBuilder.Entity<Group>(entity =>
            {
                entity.OwnsMany(a => a.Limits, limit =>
                {
                    limit.WithOwner().HasForeignKey("GroupId");
                    limit.Property(l => l.OperationType).HasColumnName("OperationType");
                    limit.Property(l => l.LimitType).HasColumnName("LimitType");
                    limit.Property(l => l.LimitValue).HasColumnName("LimitValue");
                    limit.Property(l => l.Period).HasColumnName("Period");
                });
            });
        }
    }
}
