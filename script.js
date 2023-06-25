const questionObj = JSON.parse(dataSet);
const questionBox = document.querySelector('.content');

const questionEl = document.createElement('h3');
questionEl.textContent = `Question: ${questionObj.question}`;
console.log(questionObj);
questionBox.appendChild(questionEl);

const createdAt = document.createElement('p');
createdAt.textContent = `Created at ${questionObj.created_at}`;
questionBox.appendChild(createdAt);

const iqScore = document.createElement('p');
iqScore.textContent = `Difficult is ${questionObj.value}`;
questionBox.appendChild(iqScore);

const topicEl = document.createElement('h5');
topicEl.textContent = `Topic is "${questionObj.category.title}"`;
questionBox.appendChild(topicEl);

const answerButton = document.createElement('button');
answerButton.textContent = 'Push me to get answer';
questionBox.appendChild(answerButton);

const answerEl = document.createElement('p');
answerEl.textContent = `${questionObj.answer}`;

answerButton.addEventListener('click', function (e) {
    questionBox.appendChild(answerEl);
});