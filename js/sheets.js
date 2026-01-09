export function initSheets() {
  const iframe = document.getElementById('sheetIframe');
  const saved = localStorage.getItem('sheetId');

  if (saved) loadSheet(saved);

  window.loadSheet = function (input) {
    const id = extractSheetId(input);
    if (!id) {
      alert('Invalid Google Sheet link.');
      return;
    }
    localStorage.setItem('sheetId', id);
    loadSheet(id);
  };

  function loadSheet(id) {
    iframe.src = `https://docs.google.com/spreadsheets/d/${id}/preview`;
  }
}

function extractSheetId(url) {
  try {
    return url.match(/\/d\/([a-zA-Z0-9-_]+)/)[1];
  } catch {
    return null;
  }
}
