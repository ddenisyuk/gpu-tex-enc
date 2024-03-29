# @gpu-tex-enc/etc

Compressing images using the ETC & ETC2 texture compression standard.

[etc2comp](https://github.com/google/etc2comp) v1.0.0

## Description

The `@gpu-tex-enc/etc` module offers an efficient solution for compressing images into ETC (Ericsson Texture Compression) and ETC2 formats. These compression standards are widely used in the world of graphics programming, particularly in scenarios where memory bandwidth and texture size are crucial considerations.

## Features

- Efficient image compression into ETC and ETC2 formats.
- Supports a wide range of use cases in graphics programming.
- Includes pre-compiled etc2comp [etc2comp](https://github.com/google/etc2comp) binaries for Linux, Windows, and Darwin for easy integration.

## Installation

To install the package, run:

```bash
npm install @gpu-tex-enc/etc
```

## Usage

Here's how to use the module in your Node.js project:

```javascript
const etcCompressor = require('@gpu-tex-enc/etc');

// Your code to use the compressor
```

## Binaries

Included pre-compiled binaries:

- Linux: `etc2comp-linux` (located in `./bin/linux/EtcTool`)
- Windows: `etc2comp-win32` (located in `./bin/win32/EtcTool.exe`)
- Darwin: `etc2comp-darwin-{x64|arm64}` (located in `./bin/darwin-{x64|arm64}/EtcTool`)

## Repository

Find the source code on GitHub:

[github.com/ddenisyuk/gpu-tex-enc](https://github.com/ddenisyuk/gpu-tex-enc)

## License

This project is under the Apache-2.0 License.
