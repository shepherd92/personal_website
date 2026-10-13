document.querySelectorAll('#about a[title][aria-label]').forEach(link => {
  link.setAttribute('aria-label', link.title);
});
const languageHeading = document.querySelector('#languages .text-3xl');
if (languageHeading) {
  languageHeading.setAttribute('role', 'heading');
  languageHeading.setAttribute('aria-level', '2');
}
