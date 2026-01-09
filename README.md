# Charon

卡戎是希臘神話中冥河的渡船人。

一個 Chrome 擴充功能，讓你在任何網頁上快速查詢 GVDB 資料庫。

## 功能

- **快速搜尋**: 選擇任何文字後右鍵點擊，選擇「在 GVDB 查詢」
- **自動導航**: 新分頁會自動開啟 GVDB 搜尋結果
- **搜尋詞儲存**: 搜尋詞會自動儲存到瀏覽器的本地儲存，方便參考

## 安裝方法

1. 下載整個reop的 ZIP 檔案(Charon.zip)，然後解壓縮
2. 打開 Chrome 並前往 `chrome://extensions/`，在右上角開啟「開發者模式」
3. 點擊「載入未封裝項目」
4. 選擇 `Charon` 資料夾

## 使用方法

1. 在任何網頁上選擇你想查詢的文字
2. 右鍵點擊選擇「在 GVDB 查詢」
3. 新分頁會自動開啟 GVDB 搜尋結果
4. 頁面會自動導航至第一個演員的詳細頁面

## 技術細節

### 檔案結構

- `manifest.json` - 擴充功能配置
- `background.js` - 背景指令碼，管理右鍵選單和標籤頁通訊
- `content.js` - 內容指令碼，在 GVDB 頁面上執行
- `icon*.png` - 擴充功能圖示

### 權限

此擴充功能只需要以下權限：
- `contextMenus` - 創建右鍵選單
- `tabs` - 管理標籤頁
- `activeTab` - 存取當前標籤頁

主機權限限制在 `https://md.gvdb.org/*` 以確保安全。

## 偵錯

你可以在瀏覽器控制台查看詳細的日誌：

- **背景指令碼**: 前往 `chrome://extensions/` → GVDB 快速查詢 → 「檢查視圖」 → 「service worker」
- **內容指令碼**: 在 GVDB 頁面上按 F12 打開開發者工具

日誌中會使用以下符號標示：
- 🔍 = 搜尋操作
- ✅ = 成功操作
- ❌ = 錯誤或失敗
- 📍 = 位置/導航資訊
- 📄 = 頁面檢測
- 💾 = 儲存操作

## 開發與修改

1. 編輯 JavaScript 檔案
2. 前往 `chrome://extensions/`
3. 點擊 GVDB 快速查詢 旁的重新整理按鈕
4. 重新載入 GVDB 頁面以查看變更

## 授權

此專案可自由使用和修改。

## 相關資源

- [GVDB 資料庫](https://md.gvdb.org)
- [Chrome 擴充功能文檔](https://developer.chrome.com/docs/extensions/)
- [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/)

## 聲明
此專案透過 Claude Code 生成，本人並不具備太多前端知識，
若有 bug 歡迎 fork 或 pull request，造成損失均與開發者無涉。
