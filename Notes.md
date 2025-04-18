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
