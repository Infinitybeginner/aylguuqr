const giftBox = document.getElementById('gift-box');
const nameForm = document.getElementById('name-form');
const greeting = document.getElementById('greeting');
const memories = document.getElementById('memories');
const greetText = document.getElementById('greetText');

giftBox.addEventListener('click', () => {
  giftBox.classList.add('hidden');
  nameForm.classList.remove('hidden');
});

function checkName() {
  const name = document.getElementById('nameInput').value.trim().toLowerCase();

  const validNames = ['temka', 'aylguu', 'aylgu', 'auauauaauauau'];

  if (validNames.includes(name)) {
    nameForm.classList.add('hidden');
    greeting.classList.remove('hidden');

    greetText.innerHTML = `
      Сайн уу, ${name} 🤍<br>i have heleh something for you...<br><br>
      <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmkwdHV4azF3em1nY3QydjExcjNseTJndjludWdtcGVlb3JzMG1nZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lQCCCsVFz7pzzHa4Xn/giphy.gif" 
           alt="Cute Gif" 
           style="max-width: 300px; border-radius: 10px; margin-top: 20px;" />
    `;
  } else {
    alert('Uuchlaarai. Zuvhun Nightowl-iin Earlybird l orj chadna.');
  }
}

function showMemories() {
  greeting.classList.add('hidden');
  memories.classList.remove('hidden');
}
