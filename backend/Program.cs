using Asp.Versioning;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;

DotNetEnv.Env.Load();

var builder = WebApplication.CreateBuilder(args);
var allowedOrigins = builder.Configuration["Cors:AllowedOrigins"];
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
// we set large size limit for Kestrel's request body and form parser because the plants CSV file that must be uploaded is 360MB+ (over 1 million rows)
var mbLimit = 419430400;

// update the request body limits for the Kestrel server to be max "mbLimit" (since the csv we'll upload can be several hundred MBs, which goes over the default limit)
builder.WebHost.ConfigureKestrel( serverOptions => {
    serverOptions.Limits.MaxRequestBodySize = mbLimit;
});

// configure the .net core form parser to accept file uploads of sizes up to 500MB
// by default, the limit is 30MB, so anything higher is auto-rejected regardless of the body request limit set in Kestrel
builder.Services.Configure<FormOptions>(options => {
    options.MultipartBodyLengthLimit = mbLimit;
});


builder.Services.AddDbContext<PlantInventoryDbContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddScoped<ICsvPlantImportService, CsvPlantImportService>();

// Add services to the container.
// convert the enums to strings so I see human readable values (eg: "Unchecked" instead of "0")
builder.Services.AddControllers().AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new System.Text.Json.Serialization.JsonStringEnumConverter());
    });

builder.Services.AddCors(options =>
{
    options.AddPolicy("DevCorsPolicy",
        policy => policy
            .WithOrigins(allowedOrigins) // Frontend origin
            .AllowAnyHeader()
            .AllowAnyMethod()
    );
});

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddSwaggerGen();

builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true;
    options.ApiVersionReader = ApiVersionReader.Combine(
        new UrlSegmentApiVersionReader(),
        new HeaderApiVersionReader("X-Api-Version"),
        new QueryStringApiVersionReader("api-version"));
})
.AddMvc()
.AddApiExplorer(options =>
{
    options.GroupNameFormat = "'v'VVV";
    options.SubstituteApiVersionInUrl = true;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors("DevCorsPolicy");
    app.UseSwagger();
    app.UseSwaggerUI();
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
