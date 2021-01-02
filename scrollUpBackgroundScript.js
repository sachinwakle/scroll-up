/**
 * @author Sachin Wakle <sachinwakle2002@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(tab.id, {
    file: "scrollUpContentScript.js",
  });
});
