# LOGARS
Cross platform browser-based scalable 3D rendering system optimized for low to mid-range consumer devices.

# Cross-platform Renderer

LOGARS is a cross-platform, browser-based 3D rendering engine designed for scalability and performance on low- to mid-range consumer devices. It leverages WebGL for rendering in web environments, with potential for native support through WebAssembly in the future.

## Features

- **Cross-Platform Compatibility**: Optimized for browsers, with future extensions planned for native and mobile environments.
- **Scalability**: Suitable for both simple scenes and more complex 3D environments.
- **Device Optimization**: Aimed at providing a smooth experience on low- to mid-range consumer devices.
- **Modular Architecture**: Easily extendable with modular components for core functionality, rendering, and input handling.

## Project Structure

- `index.html` - Entry point for initializing the rendering engine in a browser.
- `src/core/` - Core engine components, including the main game loop, renderer, and input handling.
- `src/platform/` - Platform-specific implementations, such as `web.js` for browser compatibility.
- `src/scenes/` - Scene files that define and set up 3D objects for rendering.
- `assets/` - Folder for textures, models, and other resources.
- `tests/` - Contains automated tests for engine components.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/griffin-gould/cross3d-renderer.git
