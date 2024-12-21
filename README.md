# FloWind UI

<div align="center">

![FloWind UI Logo](path-to-your-logo.png)

A modern React component library based on TailwindCSS, focused on providing highly customizable and easy-to-use UI components.

[![npm version](https://img.shields.io/npm/v/@flowind/ui.svg?style=flat)](https://www.npmjs.com/package/@flowind/ui)
[![npm downloads](https://img.shields.io/npm/dm/@flowind/ui.svg?style=flat)](https://www.npmjs.com/package/@flowind/ui)
[![license](https://img.shields.io/npm/l/@flowind/ui.svg?style=flat)](https://github.com/yourusername/flowind/blob/main/LICENSE)

English | [简体中文](./README.zh-CN.md)

</div>

## ✨ Features

- 🎨 **TailwindCSS Based**
  - Leverages TailwindCSS's powerful features for flexible style customization
  - Supports theme customization to easily adapt to brand design
  - Built-in multiple preset themes

- 🔧 **TypeScript Support**
  - 100% written in TypeScript
  - Complete type definitions and type inference
  - Excellent IDE support and development experience

- 📦 **Modular Design**
  - Supports tree-shaking for optimized bundle size
  - Low coupling between components for independent use
  - Unified design language and interaction patterns

- 🎯 **Development Experience**
  - Comprehensive documentation and examples
  - Complete Storybook demonstrations
  - Rich Props type hints

- 🎬 **Animation & Interaction**
  - Smooth transition animations
  - Intuitive interaction design
  - Customizable animation effects

- 📱 **Responsive Design**
  - Mobile-first design philosophy
  - Perfect adaptation to various screen sizes
  - Convenient development of responsive components

## 📦 Installation

### Prerequisites

- React >= 18.0.0
- TailwindCSS >= 3.0.0
- Node.js >= 16.0.0

### Package Manager Installation

Using npm:

```bash
npm install @flowind/ui @flowind/hooks @flowind/icons
```

Using yarn:

```bash
yarn add @flowind/ui @flowind/hooks @flowind/icons
```

Using pnpm:

```bash
pnpm add @flowind/ui @flowind/hooks @flowind/icons
```

## 🚀 Quick Start

### 1. Configure TailwindCSS

Ensure your project has TailwindCSS properly configured. Add to your tailwind.config.js:

```js
module.exports = {
  content: [
    // ...
    "./node_modules/@flowind/ui/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [
    require('@flowind/ui-preset')
  ],
};
```

### 2. Import Styles

Import base styles in your project entry file:

```jsx
import '@flowind/ui/styles.css';
```

### 3. Use Components

```jsx
import { Button, Alert } from '@flowind/ui';
import { SearchIcon } from '@flowind/icons';
import { useToggle } from '@flowind/hooks';

function App() {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div>
      <Button 
        variant="primary"
        onClick={toggle}
        leftIcon={<SearchIcon />}
      >
        Toggle Alert
      </Button>

      {isOpen && (
        <Alert 
          type="success"
          title="Success"
          dismissible
        >
          Operation completed!
        </Alert>
      )}
    </div>
  );
}
```

## 📦 Project Structure

```
flowind/
├── packages/
│   ├── hooks/          # React Hooks collection
│   │   ├── src/       # Source code
│   │   └── package.json
│   │
│   ├── icons/          # Icon components
│   │   ├── src/       # Source code
│   │   └── package.json
│   │
│   ├── toolbox/        # Development tools
│   │   ├── src/       # Source code
│   │   └── package.json
│   │
│   ├── ui/            # Main UI component library
│   │   ├── src/       # Component source code
│   │   ├── styles/    # Style files
│   │   └── package.json
│   │
│   └── ui-preset/     # UI preset configuration
│       ├── src/       # Theme configuration
│       └── package.json
│
├── configs/           # Engineering configuration
├── docs/             # Documentation
└── examples/         # Example projects
```

## 🎯 Components

### Basic Components
- `Button`: Button component
  - Supports multiple variants: primary, secondary, outline, ghost
  - Supports different sizes: xs, sm, md, lg, xl
  - Supports icon buttons and loading states
- `Input`: Input field
  - Supports prefix/suffix icons
  - Supports clear button
  - Supports password toggle
- `Select`: Select component
  - Supports single and multiple selection
  - Supports search and custom options
  - Supports grouping and virtual scrolling

### Layout Components
- `Box`: Basic layout container
- `Stack`: Stack layout
  - Supports horizontal and vertical directions
  - Supports automatic spacing
- `Grid`: Grid layout
  - Responsive grid system
  - Supports spacing and alignment

### Feedback Components
- `Alert`: Alert component
  - Supports multiple types: success, warning, error, info
  - Supports title and close button
- `Modal`: Modal dialog
  - Supports custom position and size
  - Supports nested usage
- `Toast`: Toast notifications
  - Supports multiple positions
  - Supports custom duration
  - Supports rich content

### Navigation Components
- `Menu`: Menu component
  - Supports nested menus
  - Supports keyboard navigation
  - Supports custom icons
- `Tabs`: Tab component
  - Supports multiple styles
  - Supports controlled and uncontrolled modes
- `Breadcrumb`: Breadcrumb navigation
  - Supports custom separators
  - Supports routing integration

### Data Display
- `Table`: Table component
  - Supports sorting and filtering
  - Supports fixed headers and columns
  - Supports row selection
- `List`: List component
  - Supports virtual scrolling
  - Supports custom rendering
- `Tree`: Tree component
  - Supports drag and drop
  - Supports search and filtering

## 🛠 Development

### Environment Requirements

- Node.js >= 16
- pnpm >= 8

### Development Flow

1. Clone the repository:

```bash
git clone https://github.com/yourusername/flowind.git
cd flowind
```

2. Install dependencies:

```bash
pnpm install
```

3. Start development server:

```bash
# Start all packages' development servers
pnpm dev

# Start a specific package's development server
pnpm dev --filter @flowind/ui
```

4. Run tests:

```bash
# Run all tests
pnpm test

# Run a specific package's tests
pnpm test --filter @flowind/ui

# Run test coverage report
pnpm test:coverage
```

5. Build project:

```bash
# Build all packages
pnpm build

# Build a specific package
pnpm build --filter @flowind/ui
```

### Development Tools

- Generate icon components:
```bash
pnpm generate:icons
```

- Generate theme tokens:
```bash
pnpm generate:tokens
```

## 📦 Release

We use changesets to manage versions and releases:

```bash
# Create a changeset
pnpm changeset

# Update version number
pnpm version

# Release a formal version
pnpm release

# Release a Beta version
pnpm release:beta

# Release an Alpha version
pnpm release:alpha
```

## 🤝 Contributing Guide

We welcome all contributions. Please read our [Contributing Guide](CONTRIBUTING.md) first.

## 📝 Changelog

View the complete changelog at [CHANGELOG.md](CHANGELOG.md).

## 📄 License

FloWind UI uses the [MIT License](LICENSE).

## 🤝 Acknowledgments

Thanks to all contributors for their support!

<a href="https://github.com/yourusername/flowind/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=yourusername/flowind" />
</a>
