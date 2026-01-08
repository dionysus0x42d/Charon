// 儲存搜尋詞到 localStorage
function saveSearchTerm(term) {
  try {
    localStorage.setItem('gvdb_last_search', term);
    console.log('💾 已儲存搜尋詞:', term);
  } catch (e) {
    console.log('❌ 無法儲存搜尋詞');
  }
}

// 檢查是否為搜尋結果頁面
function isSearchPage() {
  const url = window.location.href;
  return url.includes('md.gvdb.org') && url.includes('?s=');
}

// 監聽來自 background script 的訊息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "saveSearchTerm" && request.searchTerm) {
    saveSearchTerm(request.searchTerm);
    sendResponse({ saved: true });
  }

  return true;
});

// 頁面載入時自動執行
function initHighlight() {
  // 如果是搜尋結果頁面,儲存搜尋詞
  if (isSearchPage()) {
    console.log('📄 檢測到搜尋結果頁面');
  }
}

// 當頁面載入完成時執行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHighlight);
} else {
  initHighlight();
}

