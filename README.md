# Aneeqa Shahbaz Portfolio

A responsive full-stack developer portfolio built with React, Vite, Express, and MongoDB. The frontend contains the portfolio experience and local assistant; the backend provides health and contact APIs.

## Project Structure

```text
src/
  components/       Reusable UI components
  data/             Portfolio and project data
  sections/         Page sections
  services/         Client-side service modules
server/
  config/           Environment and database setup
  middleware/       Request validation
  models/           Mongoose models
  routes/           Express routes
  server.js         API entrypoint
public/              Static assets and SEO files
```

## Requirements

- Node.js 20 or newer
- npm
- MongoDB Atlas account for contact persistence

## Local Development

Install dependencies from the project root:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Start the API in a second terminal:

```bash
npm run server
```

The frontend runs at `http://localhost:5173` and the API runs at `http://localhost:5000`.

Available API routes:

- `GET /api/health`
- `POST /api/contact`

## Environment Variables

Copy `.env.example` to `.env` for local development. Do not commit `.env`.

```env
NODE_ENV=development
PORT=5000
CLIENT_ORIGIN=http://127.0.0.1:5173
VITE_API_URL=http://localhost:5000/api
MONGODB_URI=
```

Without `MONGODB_URI`, the API remains available but contact submissions return `503` because storage is intentionally disabled. Add a MongoDB Atlas connection string to enable persistence.

## MongoDB Atlas

1. Create a MongoDB Atlas project and cluster.
2. Create a database user with a strong password.
3. Add the deployed backend IP access rule required by your hosting provider.
4. Copy the Atlas connection string into `MONGODB_URI`.
5. Replace the username, password, and database name in the connection string.
6. Restart the API and confirm `/api/health` reports `database: "connected"`.

## Production Build

```bash
npm run lint
npm run build
npm run preview
```

## Deployment

### Frontend

The Vite frontend can be deployed to Vercel, Netlify, or another static host.

1. Import the repository into the hosting provider.
2. Set the build command to `npm run build`.
3. Set the output directory to `dist`.
4. Add `VITE_API_URL` with the public backend URL followed by `/api`.
5. Deploy and test the contact form and chatbot.

### Backend

`render.yaml` provides a Render blueprint for the Express API.

1. Connect the repository to Render.
2. Create the service from the blueprint, or use `npm install` and `npm run start`.
3. Add `CLIENT_ORIGIN` with the exact frontend origin.
4. Add `MONGODB_URI` as a secret environment variable.
5. Use `/api/health` as the health-check path.
6. Confirm the logs show a successful MongoDB connection.

Never put `MONGODB_URI`, email credentials, or other secrets in frontend variables. Only variables prefixed with `VITE_` are exposed to the browser.

## Custom Domain and HTTPS

1. Add the custom domain in the frontend host dashboard.
2. Add the DNS records requested by that provider.
3. Add a separate API subdomain to the backend host, such as `api.example.com`.
4. Update `VITE_API_URL` to the API domain and `CLIENT_ORIGIN` to the frontend domain.
5. Confirm both hosts issue valid HTTPS certificates.
6. Replace `YOUR_DOMAIN.example` in `public/robots.txt` and `public/sitemap.xml` with the real domain.

Hosting providers generally provision HTTPS automatically. Do not send production API traffic over plain HTTP.

## Google Search Console

1. Deploy the frontend and replace the sitemap placeholder domain.
2. Verify the domain in Google Search Console.
3. Submit `https://your-real-domain.example/sitemap.xml` under **Sitemaps**.
4. Inspect the homepage URL and resolve indexing or accessibility warnings.

## Maintenance Checklist

- Keep dependencies updated and review security advisories.
- Rotate database and email credentials if exposed.
- Keep project URLs, screenshots, skills, and services current.
- Review API rate limits and logs.
- Run `npm run lint` and `npm run build` before every deployment.
- Test the contact form after frontend or backend deployments.
- Replace placeholder domain, project links, and social links before launch.
