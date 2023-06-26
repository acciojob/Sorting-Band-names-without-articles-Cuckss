//your code here
let bandNames = ['The Rolling Stones', 'Red Hot Chili Peppers', 'Foo Fighters', 'Aerosmith', 'The Beatles'];

// Function to remove articles from band names
function removeArticles(name) {
  const articles = ['the', 'a', 'an'];
  const words = name.split(' ');

  // Remove articles from the beginning of the name
  while (articles.includes(words[0].toLowerCase())) {
    words.shift();
  }

  return words.join(' ');
}

// Sort band names without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Display band names in the ul with li tags
const bandList = document.getElementById('band');

bandNames.forEach(name => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
});
