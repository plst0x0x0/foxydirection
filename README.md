# RTL / LTR Toggle

A lightweight browser extension for **Firefox** and **Chrome** that flips the text direction of any webpage with a single click.  
The toolbar icon instantly shows the current direction using a Unicode arrow (→ or ←).

## Features
- One‑click toggle between Right‑to‑Left (RTL) and Left‑to‑Right (LTR)
- Badge indicator displays current direction on the icon
- Works on the active tab only — no extra permissions needed

## Installation

### Firefox
Download the signed `.xpi` file from [Releases](https://github.com/YOUR_USER/rtl-ltr-toggle/releases) and drag it onto your Firefox window.  
The extension is permanently installed and signed as **unlisted** (not shown on AMO).

### Chrome
1. Download and unzip `chrome-extension.zip` from [Releases](https://github.com/YOUR_USER/rtl-ltr-toggle/releases).
2. Navigate to `chrome://extensions`, enable **Developer mode**, and click **Load unpacked**.
3. Select the extracted folder.

## Usage
Click the extension icon on any webpage.  
If the page is RTL → becomes LTR.  
If LTR → becomes RTL.

## Building from source
This repository includes separate manifests for Firefox and Chrome.  
A [GitHub Actions workflow](.github/workflows/build-and-sign.yml) automatically builds and signs the extension on every push.

## License
[MIT](LICENSE)
