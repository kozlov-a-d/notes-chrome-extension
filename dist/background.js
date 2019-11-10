/**
 * background.js
 * крутится всегда и один для всего браузера, умеет только слать сообщения на разные слои и слушать их.
 */

function checkCurrentUrl(tabId, tabUrl) {
    var pattern=/(.+:\/\/)?([^\/]+)(\/.*)*/i;
    var arr=pattern.exec(tabUrl);
    var value = arr[2].replace('www.', '');
    // Устанавливаем значение бейджу. Идентификатор указаывается в качестве ограничителя.
    // Т.е для вкладок подходящих под условие значение 3, а для всех остальных 0
    chrome.browserAction.setBadgeText({text: value, tabId: tabId});
} 

function changeBadgeTextOnActivated(tabInfo) {
    // Если поле url имеет значение, т.е вкладка загружена.
    // В ином случае данные будут получены из метода changeBadgeTextOnUpdate
    chrome.tabs.get(tabInfo.tabId, function (tab) {
        if (tab.url) checkCurrentUrl(tab.id, tab.url);
    });
}

function changeBadgeTextOnUpdate(tabId, changeInfo, tab) {
    // Если страница загруженна. Допустим мы не переключали вкладки, а обновили открытую
    if (changeInfo.status == "complete") checkCurrentUrl(tabId, tab.url);
}

// срабатывает при смене активной вкладки
chrome.tabs.onActivated.addListener(changeBadgeTextOnActivated);

// срабатывает при обновлении
chrome.tabs.onUpdated.addListener(changeBadgeTextOnUpdate);
