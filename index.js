/**
 * Create a string with 12 characters.
 * @param {String} site - any site
 * @param {String} special_characters
 */
function shane() {
  const site = document.getElementById("site").value.toLowerCase();
  if (site === undefined || site.length <= 0) {
    alert("Enter a site name first!");
    return;
  }
  const special_characters = "&@!";
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const idx_0 = special_characters[0];
  const idx_5 = special_characters[1];
  const idx_10 = special_characters[2];
  const idx_1 = alphabet[alphabet.indexOf(site[0]) + 1].toUpperCase();
  const idx_4 = alphabet[alphabet.indexOf(site[0]) + 2].toLowerCase();
  const idx_8 = alphabet[
    alphabet.indexOf(site[site.length - 1]) - 1
  ].toUpperCase();
  const idx_2 = site.length;
  const idx_6 = idx_2 - 2;
  const idx_9 = idx_2 - 1;
  const idx_3 = alphabet[idx_2].toLowerCase();
  const idx_7 = alphabet[idx_6].toUpperCase();
  const idx_11 = alphabet[idx_9].toLowerCase();
  const required =
    `${idx_0}${idx_1}${idx_2}${idx_3}${idx_4}${idx_5}` +
    `${idx_6}${idx_7}${idx_8}${idx_9}${idx_10}${idx_11}`;
  document.getElementById("shane").innerHTML = required;
}
