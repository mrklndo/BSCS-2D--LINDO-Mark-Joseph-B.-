const scoreList = document.getElementById('scoreList');
const nameInput = document.getElementById('nameInput');
const scoreInput = document.getElementById('scoreInput');
const addButton = document.getElementById('addButton');

let scores = [];

addButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const score = scoreInput.value.trim();

    if (name && score) {
        scores.push({ name, score });
        nameInput.value = scoreInput.value = ''; // Clear inputs
        displayScores();
    } else {
        alert('Please enter both name and score.');
    }
});

const displayScores = () => {
    scoreList.innerHTML = scores.map((record, i) => `
        <li>
            ${record.name} - ${record.score} 
            <button class="delete-btn" onclick="deleteRecord(${i})">Delete</button>
        </li>
    `).join('');
};

const deleteRecord = (i) => {
    scores.splice(i, 1); // Remove the score from the array
    displayScores(); // Refresh the score list
};

displayScores();
