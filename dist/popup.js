/**
 * popup.js
 * может обращаться к DOM всплывающего окна и умеет слать сообщения к background.js.
 */

let message = text => {
    chrome.tabs.executeScript({
        code: `console.log("${text}")`
    });
}

// chrome.tabs.getSelected(null, function(tab){
//     chrome.tabs.sendMessage(tab.id, {type: "request-check-tracking", msg: 'test'});
// });

