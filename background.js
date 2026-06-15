// This function runs inside the active tab, toggles the direction
// and returns the new direction so we can update the badge.
function toggleDirectionAndReturn() {
  const html = document.documentElement;
  const current = html.getAttribute('dir') || window.getComputedStyle(html).direction;
  const newDir = current === 'rtl' ? 'ltr' : 'rtl';
  html.setAttribute('dir', newDir);
  return newDir;
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.id) return;

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: toggleDirectionAndReturn
    },
    (results) => {
      if (chrome.runtime.lastError || !results || !results[0]) return;
      const newDir = results[0].result;

      // Show a Unicode arrow on the toolbar icon
      const arrow = newDir === 'rtl' ? '←' : '→';
      chrome.action.setBadgeText({ text: arrow, tabId: tab.id });
      chrome.action.setBadgeBackgroundColor({ color: '#333333', tabId: tab.id });
    }
  );
});
