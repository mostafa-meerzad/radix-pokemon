# Radix UI

An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go, no configuration required.

## Getting Started

1. Install Radix Themes:
   run `npm install @radix-ui/themes` in your project to install Radix-Themes

2. Import the CSS file: import `import "@radix-ui/themes/styles.css";` into the root of your app **root/layout.tsx** for next.js apps
3. Add the Theme component: Add Theme to your application, wrapping the root component inside of body.

```tsx
import { Theme } from "@radix-ui/themes";

export default function () {
  return (
    <html>
      <body>
        <Theme>
          <MyApp />
        </Theme>
      </body>
    </html>
  );
}
```

## Customizing your Theme

Configuration is managed and applied via the Theme component.

Pass configuration to the Theme to customize appearance.

```tsx
<Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
  <MyApp />
</Theme>
```

### Using the theme panel

```tsx
import { Theme, ThemePanel } from "@radix-ui/themes";

export default function () {
  return (
    <Theme>
      <MyApp />
      <ThemePanel />
    </Theme>
  );
}
```

then copy the theme config and replace your `<Theme>` opening tag with that.

## Layout Components with Radix-UI

`Container`’s sole responsibility is to provide a consistent **max-width** to the content it wraps. Like Section, it comes just with a couple of pre-defined sizes that work well with common breakpoints and typical content widths for comfortable reading.

```tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Theme radius="full" appearance="dark">
          <Container>{children}</Container>
          <ThemePanel />
        </Theme>
      </body>
    </html>
  );
}
```

## Custom Styling

You can use radix-ui variables that are linked with the theme itself like **--accent-3**, **--space-5** and many more, to customize UI components and make them change according to theme.

## Handle Auth with Authkit by Workos

1. run `npm install @workos-inc/authkit-nextjs` command to install authkit-next
2. set env variables:

```bash
WORKOS_API_KEY='sk_test_a2V5XzAxSlM0MVBDM05DUzY4VlZBN1kwOURQMUVILDV2QmxXWFJXOXlkdXY3alA2NWNOMXAyQ0w'
WORKOS_CLIENT_ID='client_01JS41PCK7C8QPPXGJ2J9ZCF97'
WORKOS_COOKIE_PASSWORD="<your password>" # generate a secure password here

# configured in the WorkOS dashboard
NEXT_PUBLIC_WORKOS_REDIRECT_URI="http://localhost:3000/callback"

```

3. Add AuthKit to your app: **Provider**:
   The AuthKitProvider component adds protections for auth edge cases and is required to wrap your app layout.

```tsx
import { AuthKitProvider } from "@workos-inc/authkit-nextjs/components";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthKitProvider>{children}</AuthKitProvider>
      </body>
    </html>
  );
}
```

4. build the middleware:

```tsx
import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware({ debug: true });

export const config = { matcher: ["/", "/deck/:path*"] };
```

5. build the `callback route` inside the **app** router **app/callback/route.ts**:

```tsx
import { handleAuth } from "@workos-inc/authkit-nextjs";

// Redirect the user to `/` after successful sign in
// The redirect can be customized: `handleAuth({ returnPathname: '/foo' })`
export const GET = handleAuth();
```

### Access Authentication Data
