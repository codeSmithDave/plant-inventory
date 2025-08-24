# Plant Inventory Application

## Overview

This application provides a scalable plant inventory dashboard designed to handle large datasets (1+ million rows). The core functionality allows users to upload CSV files containing plant data through the frontend interface, which are then securely sent to the backend for processing and eventual storage in a Microsoft SQL Server database.

The app uses Next.js with TypeScript on the frontend to present a paginated, searchable table of plants retrieved from the backend via a parameterized REST API. Efficient pagination and API-driven data retrieval ensure smooth performance, even when working with very large datasets.

## Key Features

- **CSV File Upload:** Users can upload large CSV files through drag & drop or file selection on the dashboard.
- **Backend File Processing:** Uploaded CSV files are received and validated by the backend API (currently reading the file, with planned data transformation and insertion into the DB).
- **Paginated Data API:** Backend exposes a GET endpoint to fetch plant data page-by-page, enabling efficient data loading based on frontend requests.
- **Frontend Table Display:** Plant records are rendered in a responsive, paginated data table using React with axios for API calls.
- **Database Integration:** Connected to a local MS SQL database with EF Core, supporting enum property conversion and secure connection management via environment variables.
- **API Versioning and CORS:** Backend supports API versioning and CORS policies for smooth frontend-backend interaction during development.
- **CI/CD Pipeline:** Continuous integration and deployment configured using GitHub Actions to automate build and deployment workflows.

## Current Status

- Frontend supports uploading CSV files and displays paginated plant records retrieved from the backend.
- Backend reads uploaded CSV files but does not yet transform or insert data into the database.
- Backend API supports parameterized pagination requests and is connected to a local MS SQL database.
- Large file upload limits have been configured to support the ~360MB dataset size.
- Pagination UI and API integration are functional with dynamic page size adjustments.

## Future Work

- Implement data validation, transformation, and insertion logic in the backend to complete the CSV processing pipeline.
- Optimize performance and scalability for production-grade handling of 1+ million plant records.
- Enhance frontend with filtering, sorting, and more advanced data interaction features.
- Deploy backend and database to cloud hosting (e.g., Azure) to support production use.

