/**
 * background.js
 * крутится всегда и один для всего браузера, умеет только слать сообщения на разные слои и слушать их.
 */

 // TODO(DEVELOPER): Change the values below using values from the initialization snippet: Firebase Console > Overview > Add Firebase to your web app.
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
// console.log(firebase.app().name);  // "[DEFAULT]"

var defaultStorage = firebase.storage();
var defaultFirestore = firebase.firestore();
let notes = defaultFirestore.collection('todos');
var myUserId = firebase.auth().currentUser.uid;

// console.log(notes.orderBy("title").limit(3));
console.log(myUserId);



function checkCurrentUrl(tabId, tabUrl) {
    var pattern=/(.+:\/\/)?([^\/]+)(\/.*)*/i;
    var arr=pattern.exec(tabUrl);
    var value = arr[2].replace('www.', '');
    // Устанавливаем значение бейджу. Идентификатор указаывается в качестве ограничителя.
    // Т.е для вкладок подходящих под условие значение 3, а для всех остальных 0
    // chrome.browserAction.setBadgeText({text: value, tabId: tabId});
    console.log({text: value, tabId: tabId});
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
