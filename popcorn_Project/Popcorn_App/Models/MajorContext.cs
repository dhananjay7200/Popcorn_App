using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Popcorn_App.Models;

public partial class MajorContext : DbContext
{
    public MajorContext()
    {
    }

    public MajorContext(DbContextOptions<MajorContext> options)
        : base(options)
    {
    }

    public virtual DbSet<CategoryTbl> CategoryTbls { get; set; }

    public virtual DbSet<FavMoviesTbl> FavMoviesTbls { get; set; }

    public virtual DbSet<FavSeriesTbl> FavSeriesTbls { get; set; }

    public virtual DbSet<FavSongsTbl> FavSongsTbls { get; set; }

    public virtual DbSet<MovieTbl> MovieTbls { get; set; }

    public virtual DbSet<SeriesTbl> SeriesTbls { get; set; }

    public virtual DbSet<SongsTbl> SongsTbls { get; set; }

    public virtual DbSet<SubscriptionTbl> SubscriptionTbls { get; set; }

    public virtual DbSet<UserTbl> UserTbls { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=CVC221;Initial Catalog=major;Persist Security Info=True;User ID=sa;Password=cybage@123456;Encrypt=false;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CategoryTbl>(entity =>
        {
            entity.HasKey(e => e.PkCategoryId).HasName("PK__category__C4800290705E1F55");

            entity.ToTable("categoryTbl");

            entity.Property(e => e.PkCategoryId).HasColumnName("pk_categoryId");
            entity.Property(e => e.CategoryName)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("categoryName");
        });

        modelBuilder.Entity<FavMoviesTbl>(entity =>
        {
            entity.HasKey(e => e.PkFavMovieId).HasName("PK__favMovie__DECD94A048B60081");

            entity.ToTable("favMoviesTbl");

            entity.Property(e => e.PkFavMovieId).HasColumnName("pk_favMovieId");
            entity.Property(e => e.FkMovieId).HasColumnName("fk_movieId");
            entity.Property(e => e.FkUserId).HasColumnName("fk_userId");
            entity.Property(e => e.IsDeleted)
                .HasDefaultValueSql("((0))")
                .HasColumnName("isDeleted");

            entity.HasOne(d => d.FkMovie).WithMany(p => p.FavMoviesTbls)
                .HasForeignKey(d => d.FkMovieId)
                .HasConstraintName("FK__favMovies__fk_mo__1DB06A4F");

            entity.HasOne(d => d.FkUser).WithMany(p => p.FavMoviesTbls)
                .HasForeignKey(d => d.FkUserId)
                .HasConstraintName("FK__favMovies__fk_us__1EA48E88");
        });

        modelBuilder.Entity<FavSeriesTbl>(entity =>
        {
            entity.HasKey(e => e.PkFavSeriesId).HasName("PK__favSerie__C59BED4DE1056852");

            entity.ToTable("favSeriesTbl");

            entity.Property(e => e.PkFavSeriesId).HasColumnName("pk_favSeriesId");
            entity.Property(e => e.FkSeriesId).HasColumnName("fk_seriesId");
            entity.Property(e => e.FkUserId).HasColumnName("fk_userId");
            entity.Property(e => e.IsDeleted)
                .HasDefaultValueSql("((0))")
                .HasColumnName("isDeleted");

            entity.HasOne(d => d.FkSeries).WithMany(p => p.FavSeriesTbls)
                .HasForeignKey(d => d.FkSeriesId)
                .HasConstraintName("FK__favSeries__fk_se__22751F6C");

            entity.HasOne(d => d.FkUser).WithMany(p => p.FavSeriesTbls)
                .HasForeignKey(d => d.FkUserId)
                .HasConstraintName("FK__favSeries__fk_us__236943A5");
        });

        modelBuilder.Entity<FavSongsTbl>(entity =>
        {
            entity.HasKey(e => e.PkFavSongsId).HasName("PK__favSongs__6DDCC0193595A3CA");

            entity.ToTable("favSongsTbl");

            entity.Property(e => e.PkFavSongsId).HasColumnName("pk_favSongsId");
            entity.Property(e => e.FkSongsId).HasColumnName("fk_songsId");
            entity.Property(e => e.FkUserId).HasColumnName("fk_userId");
            entity.Property(e => e.IsDeleted)
                .HasDefaultValueSql("((0))")
                .HasColumnName("isDeleted");

            entity.HasOne(d => d.FkSongs).WithMany(p => p.FavSongsTbls)
                .HasForeignKey(d => d.FkSongsId)
                .HasConstraintName("FK__favSongsT__fk_so__2739D489");

            entity.HasOne(d => d.FkUser).WithMany(p => p.FavSongsTbls)
                .HasForeignKey(d => d.FkUserId)
                .HasConstraintName("FK__favSongsT__fk_us__282DF8C2");
        });

        modelBuilder.Entity<MovieTbl>(entity =>
        {
            entity.HasKey(e => e.PkMovieId).HasName("PK__movieTbl__F265A273CE5F8D6C");

            entity.ToTable("movieTbl");

            entity.Property(e => e.PkMovieId).HasColumnName("pk_movieId");
            entity.Property(e => e.FkCategoryId).HasColumnName("fk_categoryId");
            entity.Property(e => e.FkClientId).HasColumnName("fk_clientId");
            entity.Property(e => e.ImgUrl)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("imgUrl");
            entity.Property(e => e.IsDeleted)
                .HasDefaultValueSql("((0))")
                .HasColumnName("isDeleted");
            entity.Property(e => e.MovieDesc)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("movieDesc");
            entity.Property(e => e.MovieTitle)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("movieTitle");
            entity.Property(e => e.VidUrl)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("vidUrl");

            entity.HasOne(d => d.FkCategory).WithMany(p => p.MovieTbls)
                .HasForeignKey(d => d.FkCategoryId)
                .HasConstraintName("FK__movieTbl__fk_cat__10566F31");

            entity.HasOne(d => d.FkClient).WithMany(p => p.MovieTbls)
                .HasForeignKey(d => d.FkClientId)
                .HasConstraintName("FK__movieTbl__fk_cli__114A936A");
        });

        modelBuilder.Entity<SeriesTbl>(entity =>
        {
            entity.HasKey(e => e.PkSeriesId).HasName("PK__seriesTb__4CFAA5E377A27CC6");

            entity.ToTable("seriesTbl");

            entity.Property(e => e.PkSeriesId).HasColumnName("pk_seriesId");
            entity.Property(e => e.Country)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("country");
            entity.Property(e => e.FkCategoryId).HasColumnName("fk_categoryId");
            entity.Property(e => e.FkClientId).HasColumnName("fk_clientId");
            entity.Property(e => e.ImgUrl)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("imgUrl");
            entity.Property(e => e.IsDeleted)
                .HasDefaultValueSql("((0))")
                .HasColumnName("isDeleted");
            entity.Property(e => e.SeriesDesc)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("seriesDesc");
            entity.Property(e => e.SeriesTitle)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("seriesTitle");
            entity.Property(e => e.VidUrl)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("vidUrl");

            entity.HasOne(d => d.FkCategory).WithMany(p => p.SeriesTbls)
                .HasForeignKey(d => d.FkCategoryId)
                .HasConstraintName("FK__seriesTbl__fk_ca__151B244E");

            entity.HasOne(d => d.FkClient).WithMany(p => p.SeriesTbls)
                .HasForeignKey(d => d.FkClientId)
                .HasConstraintName("FK__seriesTbl__fk_cl__160F4887");
        });

        modelBuilder.Entity<SongsTbl>(entity =>
        {
            entity.HasKey(e => e.PkSongsId).HasName("PK__songsTbl__8F3D4CCAA4B68946");

            entity.ToTable("songsTbl");

            entity.Property(e => e.PkSongsId).HasColumnName("pk_songsId");
            entity.Property(e => e.FkCategoryId).HasColumnName("fk_categoryId");
            entity.Property(e => e.FkClientId).HasColumnName("fk_clientId");
            entity.Property(e => e.Generation)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("generation");
            entity.Property(e => e.ImgUrl)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("imgUrl");
            entity.Property(e => e.IsDeleted)
                .HasDefaultValueSql("((0))")
                .HasColumnName("isDeleted");
            entity.Property(e => e.ReleaseDate)
                .HasColumnType("date")
                .HasColumnName("releaseDate");
            entity.Property(e => e.SongDesc)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("songDesc");
            entity.Property(e => e.SongSinger)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("songSinger");
            entity.Property(e => e.SongTitle)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("songTitle");
            entity.Property(e => e.VidUrl)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("vidUrl");

            entity.HasOne(d => d.FkCategory).WithMany(p => p.SongsTbls)
                .HasForeignKey(d => d.FkCategoryId)
                .HasConstraintName("FK__songsTbl__fk_cat__19DFD96B");

            entity.HasOne(d => d.FkClient).WithMany(p => p.SongsTbls)
                .HasForeignKey(d => d.FkClientId)
                .HasConstraintName("FK__songsTbl__fk_cli__1AD3FDA4");
        });

        modelBuilder.Entity<SubscriptionTbl>(entity =>
        {
            entity.HasKey(e => e.PkSubId).HasName("PK__subscrip__E2A217417A6DB3A9");

            entity.ToTable("subscriptionTbl");

            entity.Property(e => e.PkSubId).HasColumnName("pk_subId");
            entity.Property(e => e.SubType)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("subType");
        });

        modelBuilder.Entity<UserTbl>(entity =>
        {
            entity.HasKey(e => e.PkUserId).HasName("PK__userTbl__4B3C15E214902C39");

            entity.ToTable("userTbl");

            entity.Property(e => e.PkUserId).HasColumnName("pk_userId");
            entity.Property(e => e.FkSubId).HasColumnName("fk_subId");
            entity.Property(e => e.IsApproved)
                .HasDefaultValueSql("((0))")
                .HasColumnName("isApproved");
            entity.Property(e => e.IsDeleted)
                .HasDefaultValueSql("((0))")
                .HasColumnName("isDeleted");
            entity.Property(e => e.UserCity)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("userCity");
            entity.Property(e => e.UserEmail)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("userEmail");
            entity.Property(e => e.UserImage)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("userImage");
            entity.Property(e => e.UserName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("userName");
            entity.Property(e => e.UserPassword)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("userPassword");
            entity.Property(e => e.UserPhone)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("userPhone");
            entity.Property(e => e.Userrole)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("userrole");

            entity.HasOne(d => d.FkSub).WithMany(p => p.UserTbls)
                .HasForeignKey(d => d.FkSubId)
                .HasConstraintName("FK__userTbl__fk_subI__0C85DE4D");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
