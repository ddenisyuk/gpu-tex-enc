# gpu-tex-enc

API and CLI for compressing images using the ASTC, ETC, ETC2, BCn (DXTn) texture compression standard.

## Description

`gpu-tex-enc` is a comprehensive Node.js module that provides both an API and a command-line interface (CLI) for compressing images using various texture compression standards including ASTC, ETC, ETC2, and BCn (DXTn). It's designed to cater to the needs of graphics programming, game development, and any applications requiring efficient texture storage and bandwidth optimization.

## Features

- Supports multiple compression standards: ASTC, ETC, ETC2, BCn (DXTn).
- Easy-to-use API and CLI for versatile image compression tasks.
- Integrates with `@gpu-tex-enc/astc`, `@gpu-tex-enc/bc`, and `@gpu-tex-enc/etc` modules.

## Installation

To install the package, run:

```bash
npm install gpu-tex-enc
```

## Usage

### As a Node.js Module

Require the module in your project:

```javascript
const gpuTexEnc = require('gpu-tex-enc');

// Example usage of the API
```

### As a CLI Tool

After installation, `gputexenc` can be used directly from the command line:

```bash
gputexenc [options]
```

## Dependencies

- `@gpu-tex-enc/astc`: For ASTC compression.
- `@gpu-tex-enc/bc`: For BCn compression.
- `@gpu-tex-enc/etc`: For ETC and ETC2 compression.
- `sharp` (optional): For additional image processing capabilities.

## Requirements

- Node.js version >= 18.0.0.

## Repository

The source code is hosted on GitHub:

[github.com/ddenisyuk/gpu-tex-enc](https://github.com/ddenisyuk/gpu-tex-enc)

## License

Licensed under the Apache-2.0 License.
