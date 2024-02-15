# @gpu-tex-enc/bc

Compressing images using the BC1 (DXT1), BC2 (DXT3), BC3 (DXT5), BC4, BC5 & BC7 texture compression standard.

[bc7enc](https://github.com/richgel999/bc7enc_rdo) v1.0.8

## Description

`@gpu-tex-enc/bc` is a Node.js module designed for efficient image compression using a variety of BC (Block Compression) standards. It supports BC1 (DXT1), BC2 (DXT3), BC3 (DXT5), BC4, BC5, and BC7 formats, catering to different requirements and providing versatile compression options for GPU textures.

## Features

- Supports multiple BC texture compression formats.
- Optimized for performance and quality.
- Cross-platform compatibility with pre-compiled [bc7enc](https://github.com/richgel999/bc7enc_rdo) binaries for Linux, Windows, and Darwin.

## Installation

Install the module via npm:

```bash
npm install @gpu-tex-enc/bc
```

## Usage

To use this module in your Node.js project, simply require it:

```javascript
const bcCompressor = require('@gpu-tex-enc/bc');

// Example usage
```

## Binaries

The package includes the following pre-compiled binaries:

- Linux: `bc7enc-linux` (located in `./bin/linux/bc7enc`)
- Windows: `bc7enc-win32` (located in `./bin/win32/bc7enc.exe`)
- Darwin: `bc7enc-darwin-{x64|arm64}` (located in `./bin/darwin-{x64|arm64}/bc7enc`)

## Repository

The source code is available on GitHub:

[github.com/ddenisyuk/gpu-tex-enc](https://github.com/ddenisyuk/gpu-tex-enc)

## License

Licensed under the Apache-2.0 License.
