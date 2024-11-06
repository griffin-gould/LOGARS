# LOGARS
Cross platform browser-based scalable 3D rendering system optimized for low to mid-range consumer devices.
## Hierarchy
logars/
├── index.html            # Main entry HTML file
├── css/
│   └── style.css         # Styling for canvas
├── src/                  # Source files for engine code
│   ├── core/             
│   │   ├── engine.js     # Core engine logic
│   │   ├── renderer.js   # Renderer class, optimized for scalable 3D rendering
│   │   ├── input.js      # Input handling
│   │   └── utils.js      # Utility functions (math, loading helpers)
│   ├── platform/         # Platform-specific implementations
│   │   ├── web.js        # Web-specific settings, WebGL setup
│   │   └── native.js     # Placeholder for potential native/WebAssembly setup
│   └── scenes/           # Contains scene setup files
│       └── exampleScene.js # Example scene with basic rendering
├── assets/               # Asset directory for textures, models, etc.
├── tests/                # Tests for various components
│   └── engine.test.js    # Basic test file for engine methods
├── README.md             # Project overview and instructions
└── .gitignore            # Ignored files
