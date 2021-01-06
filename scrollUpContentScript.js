/**
 * @author Sachin Wakle <sachinwakle2002@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */

(() => {
  /* ###### Top Target Element ###### */
  const topPosition = document.createElement("div");
  topPosition.setAttribute("id", "topPageElement");
  topPosition.classList.add("scroll-up-target");
  document.body.insertAdjacentElement("afterbegin", topPosition);

  /* ###### Scroll-Up Button ###### */
  const topNavigator = document.createElement("a");
  topNavigator.setAttribute("href", "#topPageElement");
  topNavigator.setAttribute("id", "scrollUpLinkId");
  topNavigator.classList.add("scroll-up-link");
  
  const navigationIcon = document.createElement("img");
  let iconURL = chrome.extension.getURL("/navigator-up-arrow.png");
  navigationIcon.setAttribute("src", iconURL);
  navigationIcon.setAttribute("alt", "up-arrow-icon");

  let navigatorContainer = document.createElement("div");
  navigatorContainer.classList.add("scroll-up-navigator-container");
  navigatorContainer.appendChild(navigationIcon);
  topNavigator.appendChild(navigatorContainer);
  document.body.insertAdjacentElement("beforeend", topNavigator);
})();
