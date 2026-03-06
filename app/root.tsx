import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { ThemeProvider } from "@rescui/ui-contexts";

import type { Route } from "./+types/root";
import "./styles/app.css";
import "./styles/global-layout.css";
import "./styles/index.scss";
import "./styles/grid.scss";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/kotlin_64.svg", type: "image/svg+xml" },
  {
    rel: "preload",
    href: "/assets/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/assets/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/assets/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme="dark">{children}</ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
