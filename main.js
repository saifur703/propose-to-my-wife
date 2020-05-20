document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('click', () => {
    let text = document.querySelector('h1');

    text.style.color = 'green';
    text.innerText = 'I love You ❤♡❤';
    document.querySelectorAll('.button').forEach((button) => {
      button.style.display = 'none';
    });
  });
});
