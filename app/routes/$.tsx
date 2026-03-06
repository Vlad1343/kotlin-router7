import { Link } from 'react-router';

export function loader() {
  throw new Response('Not Found', { status: 404 });
}

export function ErrorBoundary() {
  return (
    <main style={{ padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      <h1 style={{ marginBottom: '12px' }}>404 Not Found</h1>
      <p style={{ marginBottom: '18px' }}>The page you requested does not exist.</p>
      <Link to="/">Go back home</Link>
    </main>
  );
}

export default function NotFound() {
  return null;
}
