document.addEventListener('DOMContentLoaded', () => {
  const changeColorButton = document.getElementById('changeColor');
  const bodyElement = document.body;
  const resumeContainer = document.querySelector('.resume-container');

  changeColorButton.addEventListener('click', () => {
    // Toggle 'toggled-state' and 'default-state' on both body & container
    bodyElement.classList.toggle('toggled-state');
    bodyElement.classList.toggle('default-state');

    resumeContainer.classList.toggle('toggled-state');
    resumeContainer.classList.toggle('default-state');
  });
});
