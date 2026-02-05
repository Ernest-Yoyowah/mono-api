# momo-api

A professional Node.js and TypeScript backend service template. Includes a health check endpoint and a scalable project structure for robust API development.

## Project Structure

```
momo-api
├── src
│   ├── app.ts
│   ├── server.ts
│   ├── routes
│   │   └── health.ts
│   ├── controllers
│   │   └── healthController.ts
│   ├── services
│   │   └── healthService.ts
│   ├── jobs
│   │   └── exampleJob.ts
│   ├── middlewares
│   │   └── errorHandler.ts
│   ├── utils
│   │   └── logger.ts
│   ├── config
│   │   └── index.ts
│   ├── types
│   │   └── index.d.ts
│   └── models
│       └── exampleModel.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd momo-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Application

To start the application in development mode:

```sh
npm run dev
```

To build and run in production:

```sh
npm run build
npm start
```

The application will be available at `http://localhost:3000`.

## Endpoints

- **Health Check**
  - **GET** `/health`
  - Returns operational status, uptime, and timestamp.

## Notes

This project is structured for maintainability and scalability, ready for integration of additional features and services.
