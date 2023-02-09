let oldPages = [],
shownPage;

function toggleShow(shown, hidden) {
if (shown && hidden) {
  oldPages.push(hidden);
  shownPage = shown;
} else {
  hidden = shownPage;
  shownPage = shown = oldPages[oldPages.length - 1];
 //removes the last element from an array and returns that element.
  oldPages.pop();
}
if (!shown) {
  return;
}
document.getElementById(shown).style.display = 'block';
document.getElementById(hidden).style.display = 'none';
return false;
}