const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector('#result');
const startButton = document.querySelector('#startButton');
const questionBox = document.querySelector('.questionBox');
const answerBox = document.querySelector('.answerBox');
const progressRate = document.querySelector('.progressRate');
const resultName = document.querySelector('.resultName');
const resultImage = document.querySelector('.resultImage');
const resultDesc = document.querySelector('.resultDesc');
const resultGoodType = document.querySelector('.resultGoodType');
const resultBadType = document.querySelector('.resultBadType');
const shareButton = document.querySelector('#shareButton');
const lastQuestion = qnaList.length;
// const KAKAO_API = config.apikey

// Kakao.init(KAKAO_API);
// Kakao.isInitialized();

function begin() {
  fadeOut(main);
  setTimeout(() => fadeIn(qna), 500);
  questionIndex = 0;
  goNext(questionIndex);
  setTimeout(() => displayPage(main, qna), 1000);
}

function fadeOut(page) {
  page.style.WebkitAnimation = 'fadeOut 1s';
  page.style.animation = 'fadeOut 1s';
}

function fadeIn(page) {
  page.style.WebkitAnimation = 'fadeIn 1s';
  page.style.animation = 'fadeIn 1s';
}

function displayPage(pageNone, pageBlock) {
  pageNone.style.display = 'none';
  pageBlock.style.display = 'block';
}

function goNext(questionIndex) {
  if(questionIndex === lastQuestion){
    goResult();
    return;
  }
  runProgressBar(questionIndex);
  showQuestion(questionIndex);
  goAnswerList(questionIndex);
}

function runProgressBar(questionIndex) {
  const progress = document.querySelector('.progressBar');
  const percent = ((questionIndex+1)/lastQuestion) * 100;
  progress.style.width = `${percent}%`;
  progressRate.innerHTML = `${questionIndex+1}/${lastQuestion}`;
}

function showQuestion(questionIndex){
  questionBox.innerHTML = qnaList[questionIndex].question;
}

function goAnswerList(questionIndex) {
  for(const i in qnaList[questionIndex].answerList) {
    const answerText = qnaList[questionIndex].answerList[i].answer;
    createAnswerButton(answerText, questionIndex);
  }
}

function createAnswerButton(answerText, questionIndex) {
  const answerButton = document.createElement('button');
  answerButton.classList.add('answerButton');
  answerButton.classList.add('fadeIn');
  answerBox.appendChild(answerButton);
  showAnswers(answerButton, answerText, questionIndex);
}

function showAnswers(answerButton, answerText, questionIndex){
  answerButton.textContent = answerText;
  answerButton.addEventListener('click', (event) => nextQuestion(questionIndex, event));
}

function nextQuestion(questionIndex, event) {
  const allAnswerButton = document.querySelectorAll('.answerButton');
  for(let i = 0; i < allAnswerButton.length; i++) {
    allAnswerButton[i].disabled = true;
    allAnswerButton[i].style.WebkitAnimation = "fadeOut 0.5s";
    allAnswerButton[i].style.animation = "fadeOut 0.5s";
  }
  setTimeout(() => answerButtonFadeOut(allAnswerButton, questionIndex), 450);
  resultData(questionIndex, event);
}

function resultData(questionIndex, event) {
  const targetType = event.target.textContent;
  const typeList = qnaList[questionIndex].answerList;
  const typeMatch = typeList.filter((value) => value.answer === targetType);
  const typeValue = typeMatch[0].type;
  setType(typeValue);
}

function setType(typeValue) {
  for(let i = 0; i < mbtiType.length; i++) {
    if(mbtiType[i].name == typeValue) {
      mbtiType[i].value += 1;
    }
  }
}

function answerButtonFadeOut(allAnswerButton, questionIndex) {
  for(let i = 0; i < allAnswerButton.length; i++) {
    allAnswerButton[i].style.display = 'none';
  }
  goNext(++questionIndex);
}

function goResult() {
  const point = calculationResult();
  fadeOut(qna);
  setTimeout(() => fadeIn(result), 500);
  setTimeout(() => displayPage(qna, result), 1000);
  setResult(point);
}

function setResult(point) {
  const image = new Image();
  image.src = `./img/image-${point.value}.png`;
  image.classList.add('img-fluid');
  resultImage.appendChild(image);
  
  resultName.innerHTML = point.name;
  resultDesc.innerHTML = point.description;
  resultGoodType.innerHTML = `꾹꾹이 타입 : ${point.goodType}`;
  resultBadType.innerHTML = `하악질 타입 : ${point.badType}`;
  shareButton.addEventListener('click', kakaoShare);
}

function calculationResult() {
  let resultAnswer = '';
  for(let i = 0; i < mbtiType.length; i++) {
    if(mbtiType[i].value >= 2) resultAnswer += mbtiType[i].name;
  }
  for(let i = 0; i < resultList.length; i++) {
    if(resultList[i].value === resultAnswer) return resultList[i]
  }
}

startButton.addEventListener('click', begin);