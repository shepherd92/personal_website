// Place education below both profile columns without duplicating the theme block.
const profileGrid = document.querySelector('#about .resume-biography > .max-w-7xl > .grid');
const education = profileGrid?.querySelector('.mb-16 > .grid')?.parentElement;
if (education) {
  education.classList.add('profile-education');
  profileGrid.after(education);
}

document.querySelectorAll('#about a[title][aria-label]').forEach(link => {
  link.setAttribute('aria-label', link.title);
});
const languageHeading = document.querySelector('#languages .text-3xl');
if (languageHeading) {
  languageHeading.setAttribute('role', 'heading');
  languageHeading.setAttribute('aria-level', '2');
}
