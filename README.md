
````markdown
# 🌟 PageGlow – Instantly Change Webpage Background Colors

**PageGlow** is a lightweight and user-friendly Chrome extension that allows you to change the background color of any webpage with a single click. Whether you're customizing your browsing experience, improving visibility, or just having fun with colors, PageGlow gives you effortless control.

---

## 🚀 Features

- 🎨 One-click background color changer
- 🌈 Random color generation on every click
- 🚫 Smart detection of restricted pages (`chrome://` and extensions)
- ⚡ Fast and minimal UI
- 🔐 No tracking, no external APIs – fully local and privacy-safe


## 📦 Installation (For Development)

1. Clone or download this repository:

```bash
git clone https://github.com/Alif416/PageGlow-Extension.git
````

2. Open **Chrome** and go to `chrome://extensions/`.

3. Enable **Developer mode** (top-right toggle).

4. Click **Load unpacked** and select the `pageglow/` folder.

5. Pin the extension icon and try it out on any website!

---

## 🛠️ Project Structure

```
pageglow/
├── manifest.json         # Chrome extension manifest file
├── popup.html            # Popup interface
├── popup.js              # Logic for color changing and messaging
├── content.js            # Content script that applies background color
└── icons/                # (Optional) Extension icons
```

---

## 🔒 Permissions Used

| Permission  | Why It's Needed                               |
| ----------- | --------------------------------------------- |
| `activeTab` | To interact with the currently active tab     |
| `scripting` | To inject scripts that modify page background |

---

## 🚫 Limitations

Due to Chrome security policies, PageGlow **cannot run on the following pages**:

* `chrome://` pages (e.g., settings, extensions)
* `chrome-extension://` pages
* Chrome Web Store

The extension will detect and inform you if you're on an unsupported page.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Contribution

Feel free to open issues or submit PRs. Whether it's UI suggestions, bug reports, or new feature ideas — contributions are welcome!

---

## 👤 Author

**Alif**
📧 \[[alif16416@gmail.com](mailto:alif16416@gmail.com)]
📂 [GitHub Profile] (https://github.com/Alif416)

---

> “Light up your web experience with PageGlow.”


