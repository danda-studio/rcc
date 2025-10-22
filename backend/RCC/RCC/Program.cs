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
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
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

// ÂÀÆÍÎ: CORS ÄÎËÆÅÍ ÁÛÒÜ ÄÎ StaticFiles
app.UseCors("AllowAll");

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(staticPath),
    RequestPath = "/files",
    OnPrepareResponse = ctx =>
    {
        ctx.Context.Response.Headers.Append("Access-Control-Allow-Origin", "*");
        ctx.Context.Response.Headers.Append("Cache-Control", "public, max-age=3600");
    }
});

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();