﻿// <auto-generated />
using DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace DataAccess.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("DataAccess.Entities.Account", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<int>("AccountType")
                        .HasColumnType("integer");

                    b.Property<string>("Alias")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Bank")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("BankBIC")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Currency")
                        .HasColumnType("integer");

                    b.Property<long>("GroupId")
                        .HasColumnType("bigint");

                    b.Property<string>("Number")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("PaymentMethod")
                        .HasColumnType("integer");

                    b.Property<string>("PaymentReceiver")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool>("Priority")
                        .HasColumnType("boolean");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("GroupId");

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("DataAccess.Entities.Group", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("Id"));

                    b.Property<int>("Currency")
                        .HasColumnType("integer");

                    b.Property<string>("Mainteiner")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("PaymentMethod")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Groups");
                });

            modelBuilder.Entity("DataAccess.Entities.Account", b =>
                {
                    b.HasOne("DataAccess.Entities.Group", "Group")
                        .WithMany()
                        .HasForeignKey("GroupId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.OwnsMany("DataAccess.Entities.Limit", "Limits", b1 =>
                        {
                            b1.Property<long>("AccountId")
                                .HasColumnType("bigint");

                            b1.Property<long>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("bigint");

                            NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b1.Property<long>("Id"));

                            b1.Property<int>("LimitType")
                                .HasColumnType("integer")
                                .HasColumnName("LimitType");

                            b1.Property<decimal>("LimitValue")
                                .HasColumnType("numeric")
                                .HasColumnName("LimitValue");

                            b1.Property<int>("OperationType")
                                .HasColumnType("integer")
                                .HasColumnName("OperationType");

                            b1.Property<int>("Period")
                                .HasColumnType("integer")
                                .HasColumnName("Period");

                            b1.HasKey("AccountId", "Id");

                            b1.ToTable("Accounts_Limits");

                            b1.WithOwner()
                                .HasForeignKey("AccountId");
                        });

                    b.Navigation("Group");

                    b.Navigation("Limits");
                });

            modelBuilder.Entity("DataAccess.Entities.Group", b =>
                {
                    b.OwnsMany("DataAccess.Entities.Limit", "Limits", b1 =>
                        {
                            b1.Property<long>("GroupId")
                                .HasColumnType("bigint");

                            b1.Property<long>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("bigint");

                            NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b1.Property<long>("Id"));

                            b1.Property<int>("LimitType")
                                .HasColumnType("integer")
                                .HasColumnName("LimitType");

                            b1.Property<decimal>("LimitValue")
                                .HasColumnType("numeric")
                                .HasColumnName("LimitValue");

                            b1.Property<int>("OperationType")
                                .HasColumnType("integer")
                                .HasColumnName("OperationType");

                            b1.Property<int>("Period")
                                .HasColumnType("integer")
                                .HasColumnName("Period");

                            b1.HasKey("GroupId", "Id");

                            b1.ToTable("Groups_Limits");

                            b1.WithOwner()
                                .HasForeignKey("GroupId");
                        });

                    b.Navigation("Limits");
                });
#pragma warning restore 612, 618
        }
    }
}
