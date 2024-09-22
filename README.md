# Mobile Team Sveltekit Project

This project is a SvelteKit application designed for managing maintenance alerts for mobile applications. It provides a dashboard for creating, updating, and managing maintenance notifications across different apps.

## Features

- User authentication
- Dashboard for maintenance alerts
- CRUD operations for alerts
- PostgreSQL database integration with Drizzle ORM

## Prerequisites

- Node.js (v14 or later)
- Docker and Docker Compose
- PostgreSQL

## Getting Started

1. Clone the repository:

   ```
   git clone <repository-url>
   cd mobile-team-sveltekit-project
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env`
   - Update the variables in `.env` with your specific configuration

4. Start the local database:

   ```
   docker-compose up -d
   ```

   This will start a PostgreSQL database and pgAdmin container.

5. Run database migrations:

   ```
   pnpm run db:migrate
   ```

6. Start the development server:
   ```
   pnpm run dev
   ```

## Database Management with Drizzle

This project uses Drizzle ORM for database management. Here are some useful commands:

- Generate migrations:

  ```
  pnpm run db:generate
  ```

- Apply migrations:

  ```
  pnpm run db:migrate
  ```

- Drop the database (use with caution):
  ```
  pnpm run db:drop
  ```

## Project Structure

- `/src`: Source code
  - `/routes`: SvelteKit routes
  - `/lib`: Shared components and utilities
- `/drizzle`: Database schema and migrations
- `/static`: Static assets

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
