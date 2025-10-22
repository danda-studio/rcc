using Microsoft.Extensions.FileProviders;
using RCC.Services;
using RCC.Services.Model;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.Configure<GmailSetting>(builder.Configuration.GetSection("GmailSetting"));
builder.Services.AddScoped<IContactService, ContactService>();


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("https://danda-studio.github.io", "https://rcc-hrmo.vercel.app/")
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials();
    });

    options.AddPolicy("AllowLocalhost3000", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});


var app = builder.Build();

app.UseSwagger();

app.MapScalarApiReference(options =>
{
    options.OpenApiRoutePattern = "/swagger/v1/swagger.json";
    options.Title = "RCC API Documentation";
});

var staticPath = Path.Combine(Directory.GetCurrentDirectory(), "files");
if (!Directory.Exists(staticPath))
{
    Directory.CreateDirectory(staticPath);
}

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(staticPath),
    RequestPath = "/files"
});


app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.UseCors("AllowLocalhost3000");

app.Run();
