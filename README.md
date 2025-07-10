This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## App though process & progression
- Initial system thoughts:
 - Frontend:
  - CSV File Upload: Accept CSV files from users via drag & drop or file selection, then send securely to the backend.
  - Data Retrieval: Request dataset from the backend using a custom, pagination-ready API.
  - Display: Render the requested data in a table component.
  - Pagination: Implement pagination controls on the frontend, with each page change triggering a new API request to fetch only the relevant subset of data (not loading all rows at once). This approach optimizes performance and prevents browser crashes with large datasets (1+ million rows)
 
 - Backend:
  - File Processing: Receive uploaded CSV files, scan and validate them for safety (e.g., confirm file type, check for malicious content).
  - Data Sanitization: Iterate through each row, sanitize input to prevent SQL injection, and save cleaned data into the database.
  - API Design: Expose a GET API endpoint supporting pagination, enabling the frontend to request specific pages of data efficiently

- Added:
features/data-table:
 - test data for initial frontend testing
 - react-data-table-component dependency to app; used to create the table displaying dataset on frontend

features/csv-uploader:
 - create initial file uploader UIs, simple file validation
 - create new alert component (this would be used sitewide to display messages to the user); for now used to display messages relating to the file upload

features/initialPlantApiSetup:
 - create initial Plant and Family models
 - define enums for model properties: TaxonomicStatus and VerbatimTaxonRanks
 - add PlantsController with basic HTTP GET (all) and GET by ID endpoints
 - add temporary test data to PlantsController (to be replaced by DB)
 - add API versioning support (Asp.Versioning.Mvc, Asp.Versioning.Mvc.ApiExplorer)

 features/frontendInitialApiConnection:
  - add axios dependency for api calls
  - create basic axios api calls and singleton; add some error catching
  - add new test data to the backend PlantsController sample
  - display sample data on the frontend (split in 2 sections, 1 displaying record received via ID, and the next section displaying all records)

 features/paginationSetupV1:
  - create new TableContainer component: to hold table + pagination
  - create new Pagination component: generic pagination widget - to be used for custom pagination of table datasets
  - install daisyUI (used to remove large css classes that are common with TailwindCSS); intrigued in testing it out to see if it should be used in future projects

 features/backendPaginationAPI:
  - remove the GetAll() PlantsController method which was used in initial testing
  - create new GetPlants() PlantsController with query params (page, and pageSize); going forward, this will be the way to request paginated or filtered plants results