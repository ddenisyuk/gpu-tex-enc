# @gpu-tex-enc/astc

Compressing images using the ASTC texture compression standard.

[astcenc](https://github.com/ARM-software/astc-encoder) v4.6.1

## Description

This module provides a Node.js interface for compressing images into ASTC format, an efficient texture compression standard suited for GPU textures. It wraps various `astcenc` binaries for different platforms and CPU architectures, ensuring broad compatibility and performance.

## Features

- Supports multiple CPU architectures and operating systems.
- Easy integration with Node.js projects.
- Utilizes the latest [astcenc](https://github.com/ARM-software/astc-encoder) binaries for optimal compression.

## Installation

Install the module via npm:

```bash
npm install @gpu-tex-enc/astc
```

## Usage

To use this module, require it in your Node.js project:

```javascript
const astc = require('@gpu-tex-enc/astc');

// Example usage here...
```

## Binaries

The package includes pre-compiled [astcenc](https://github.com/ARM-software/astc-encoder) binaries for the following platforms and architectures:

- Linux (x64) - AVX2, SSE2, SSE4.1
- Windows (x64, ARM64) - AVX2, SSE2, SSE4.1
- Darwin (x64, ARM64) - AVX2, SSE2, SSE4.1

## Dependencies

- `cpu-features`: To determine the best binary for your CPU.

## Development

For development, the module uses:

- `@types/node`: TypeScript type definitions for Node.js.

## Repository

The source code is available on GitHub:

[github.com/ddenisyuk/gpu-tex-enc](https://github.com/ddenisyuk/gpu-tex-enc)

## License

This project is licensed under the Apache-2.0 License.

