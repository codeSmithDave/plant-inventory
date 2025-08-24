# Plant Inventory Application

## Overview

![Plant Inventory Table](./images/plant-inventory.JPG)

This application provides a scalable plant inventory dashboard designed to handle large datasets (1+ million rows). The core functionality allows users to upload CSV files containing plant data through a Next.js frontend using TypeScript, which are then securely sent to the backend for processing and eventual storage in a Microsoft SQL Server database.

The frontend presents a paginated, searchable table of plants retrieved from the backend via a parameterized REST API. Efficient pagination and API-driven data retrieval to ensure smooth performance with large datasets. The backend is built with ASP.NET Core 9.0, connected to a local MS SQL database via Entity Framework Core, incorporating API versioning.

## Key Features

- **CSV File Upload:** Users can upload large CSV files (~360MB) through drag & drop or file selection on the dashboard. Backend server limits are configured to accommodate large file sizes.
- **Backend File Processing:** CSV files are received and validated by the backend API (currently reading files with CsvHelper, with planned transformation and insertion into the database).
- **Paginated Data API:** Backend exposes a GET endpoint that supports parameterized pagination (page, pageSize) for efficient data requests.
- **Frontend Table Display:** Plant records are rendered in a responsive, paginated data table using React, axios, and react-data-table-component.
- **Database Integration:** Local MS SQL Server database with EF Core managing data access, including conversion of enum properties to strings for storage.
- **API Versioning & CORS:** Backend uses Asp.Versioning.Mvc packages for API versioning and configures CORS with allowed origins defined in configuration (e.g., `http://localhost:3000`).
- **Styling & UI:** Frontend will use TailwindCSS and daisyUI for clean, minimal UI components.
- **Dev Tooling:** TypeScript, ESLint, and Turbopack used for robust development experience.
- **CI/CD Pipeline:** Continuous Integration configured via GitHub Actions; Continuous Deployment workflow pending.

## Current Status

- Frontend supports CSV file uploads and displays paginated plant data fetched from the backend.
- Backend can receive large CSV files and read them, but data transformation and database insertion are yet to be implemented.
- Backend API fully supports paginated data retrieval integrated with the frontend.
- Large file upload size limits have been adjusted in the backend to handle the ~360MB dataset.

## Future Work

- Implement backend data validation, transformation, and database insertion for full CSV processing.
- Optimize for performance and scalability to handle datasets exceeding 1 million records.
- Expand frontend functionality with filtering, sorting, and advanced interaction features.
- Deploy backend and database to a cloud environment such as Azure for "production" readiness / testing.
- Set up full Continuous Deployment pipeline aligned with existing CI workflows.

