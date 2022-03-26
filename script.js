function generate() {
  var quotes = {
    "- Albert Camus":
      '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
    "- Lewis B. Smedes":
      '"To forgive is to set a prisoner free and discover that the prisoner was you."',
    "- Denis Diderot":
      '"Man will never be free until the last king is strangled with the entrails of the last priest"',
    "- Nelson Mandela":
      '"For to be free is not merely to cast off one&#39s chains, but to live in a way that respects and enhances the freedom of others."',
    "- Michelangelo":
      '"I saw the angel in the marble and carved until I set him free."',
  };

  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
