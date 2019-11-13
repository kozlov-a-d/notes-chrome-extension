/**
 * background.js
 * крутится всегда и один для всего браузера, умеет только слать сообщения на разные слои и слушать их.
 */

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAtBeQBW1JujViibEohFXg4tBfU7RZfEls",
    authDomain: "beontop-chrome-extention.firebaseapp.com",
    databaseURL: "https://beontop-chrome-extention.firebaseio.com",
    projectId: "beontop-chrome-extention",
    storageBucket: "beontop-chrome-extention.appspot.com",
    messagingSenderId: "135859589645",
    appId: "1:135859589645:web:544b9af1ebb422ed1ffb44"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();

const getDataByDomain = async (domain) => {
    let data = [];
    await firestore.collection('todos').get().then(qs => {
        qs.forEach( (item) => data.push(item.data()) );
    });
    return filterByDomain(data, domain);
}

const filterByDomain = (data, domain) => {
    return data.filter(item => item.domain === domain);
}

const checkCurrentUrl = (tabId, tabUrl) => {
    const pattern=/(.+:\/\/)?([^\/]+)(\/.*)*/i;
    const arr=pattern.exec(tabUrl);
    const domain = arr[2].replace('www.', '');

    getDataByDomain(domain).then((data) => { 
        chrome.browserAction.setBadgeText({text: data.length+'', tabId: tabId});
    })
} 

const changeBadgeTextOnActivated = (tabInfo) => {
    // Если поле url имеет значение, т.е вкладка загружена.
    // В ином случае данные будут получены из метода changeBadgeTextOnUpdate
    chrome.tabs.get(tabInfo.tabId, function (tab) {
        if (tab.url) checkCurrentUrl(tab.id, tab.url);
    });
}

const changeBadgeTextOnUpdate = (tabId, changeInfo, tab) => {
    // Если страница загруженна. Допустим мы не переключали вкладки, а обновили открытую
    if (changeInfo.status == "complete") checkCurrentUrl(tabId, tab.url);
}

// срабатывает при смене активной вкладки
chrome.tabs.onActivated.addListener(changeBadgeTextOnActivated);

// срабатывает при обновлении
chrome.tabs.onUpdated.addListener(changeBadgeTextOnUpdate);
