// 創建右鍵選單
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchGVDB",
    title: "在 GVDB 查詢 '%s'",
    contexts: ["selection"]
  });
});

// 處理選單點擊
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchGVDB" && info.selectionText) {
    const searchText = info.selectionText.trim();
    const searchUrl = `https://md.gvdb.org/?s=${encodeURIComponent(searchText)}`;
    
    console.log('🔍 搜尋詞:', searchText);
    console.log('📍 搜尋網址:', searchUrl);
    
    // 在新分頁開啟搜尋結果
    chrome.tabs.create({ url: searchUrl }, (newTab) => {
      // 等待新分頁載入完成後,儲存搜尋詞
      chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
        if (tabId === newTab.id && changeInfo.status === 'complete') {
          chrome.tabs.onUpdated.removeListener(listener);
          
          // 發送訊息儲存搜尋詞
          chrome.tabs.sendMessage(tabId, {
            action: "saveSearchTerm",
            searchTerm: searchText
          }, (response) => {
            if (chrome.runtime.lastError) {
              console.log('儲存搜尋詞時發生錯誤(正常,因為還在搜尋頁面)');
            } else {
              console.log('✅ 搜尋詞已儲存');
            }
          });
        }
      });
    });
  }
});
