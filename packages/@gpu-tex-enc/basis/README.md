# @gpu-tex-enc/basis

Compressing images using the Basis Universal Supercompressed GPU Texture Codec.

[basisu](hhttps://github.com/BinomialLLC/basis_universal) v1.16.3

## Description

This module provides a Node.js interface for compressing images into Basis Universal Supercompressed format, an efficient texture compression standard suited for GPU textures. It wraps various `basisu` binaries for different platforms and CPU architectures, ensuring broad compatibility and performance.

## Features

- Supports multiple CPU architectures and operating systems.
- Easy integration with Node.js projects.
- Utilizes the [basisu](hhttps://github.com/BinomialLLC/basis_universal) binaries for optimal compression.

## Installation

Install the module via npm:

```bash
npm install @gpu-tex-enc/basis
```

## Usage

To use this module, require it in your Node.js project:

```javascript
const basis = require('@gpu-tex-enc/basis');

// Example usage here...
```

## Binaries

The package includes pre-compiled [basisu](hhttps://github.com/BinomialLLC/basis_universal) binaries for the following platforms and architectures:

- Linux (x64, ARM64) - SSE4.1
- Windows (x64) - SSE4.1
- Darwin (x64, ARM64) - SSE4.1

## Dependencies

- `cpu-features`: To determine the best binary for your CPU.

## Repository

The source code is available on GitHub:

[github.com/ddenisyuk/gpu-tex-enc](https://github.com/ddenisyuk/gpu-tex-enc)

## License

This project is licensed under the Apache-2.0 License.

