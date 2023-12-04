
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Popcorn_App.Interface;
using Popcorn_App.Models;
using Popcorn_App.Repositories;
using Serilog;
using System.Text;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddDbContext<MajorContext>(option => option.UseSqlServer(builder.Configuration.GetConnectionString("majorCon")));
builder.Services.AddScoped<UserInterface, UserRepo>();
builder.Services.AddScoped<SeriesInterface, SeriesRepo>();
builder.Services.AddScoped<SongInterface, SongRepo>();
builder.Services.AddScoped<MovieInterface, MovieRepo>();
builder.Services.AddScoped<FavMoviesTblInterface, FavMoviesTblRepo>();
builder.Services.AddScoped<FavSeriesTblInterface, FavSeriesTblRepo>();
builder.Services.AddScoped<FavSongsTblInterface, FavSongsTblRepo>();
builder.Services.AddScoped<IAdminInterface, AdminRepo>();
//serilog
var _logger = new LoggerConfiguration().ReadFrom.Configuration(builder.Configuration).Enrich.FromLogContext().CreateLogger();

builder.Logging.AddSerilog(_logger);
//serilog ends

//jwt
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["JWT:Issuer"],
        ValidAudience = builder.Configuration["JWT:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Key"]))
    };
    // err -String reference not set to an instance of a String. (Parameter 's')'


});
//cors
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowOrigin",
                      builder =>
                      {
                          builder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();

                      });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowOrigin");//cors
app.UseAuthentication(); // jwt
app.UseAuthorization();

app.MapControllers();

app.Run();
