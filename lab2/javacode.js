// Selecting DOM Elements
const title = document.getElementById('title');
const nameInput = document.getElementById('name');
const greetBtn = document.getElementById('greet');
const nameList = document.getElementById('list');

// Arrow function to handle adding a greeting
const handleGreet = () => {
  const enteredName = nameInput.value.trim();

  // Validate input
  if (enteredName === '') {
    alert('Please enter a valid name.');
    return;
  }

  // Update title using Template Literals
  title.textContent = `Hello, ${enteredName}!`;

  // Create list item (DOM Object creation)
  const li = document.createElement('li');
  li.textContent = enteredName;

  // Append to list
  nameList.appendChild(li);

  // Clear input field and refocus
  nameInput.value = '';
  nameInput.focus();
};

// Event Listener for the Greet button
greetBtn.addEventListener('click', handleGreet);

// Optional: allow pressing 'Enter' key inside input
nameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleGreet();
  }
});

// Event Delegation using Bubbling:
// Instead of adding an event listener on every <li>, we listen on the parent <ul>
nameList.addEventListener('click', (event) => {
  // Check if clicked target is an <li> element
  if (event.target && event.target.tagName === 'LI') {
    const removedName = event.target.textContent;

    // Update title to say goodbye
    title.textContent = `Goodbye, ${removedName}!`;

    // Remove the element from the DOM
    event.target.remove();
  }
});