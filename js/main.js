const addTemplateList = document.querySelector('.template-selection-list');
const removeTemplateButton = document.querySelector('.cancel-btn');
const templateList = document.querySelector('.template-list');
const storedList = document.querySelector('.stored-list');
const blankTemplate = document.querySelector('#blank-template');
const closureTemplate = document.querySelector('#closure-template');
const paymentTemplate = document.querySelector('#payment-template');

const acceptButton = document.querySelector('.accept-btn');
const cancelButton = document.querySelector('.cancel-btn');
const clearButton = document.querySelector('.clear-btn');

let id = 0;
let storedId = 0;

let currentSelection;

setTemplate();

acceptButton.addEventListener('click', function(){
  storeTask();
  // alert("this was added to nowhere, sorry!")
}, false);
cancelButton.addEventListener('click', function(){
  setTemplate();
  //setTemplate();
}, false);
clearButton.addEventListener('click', function(){
  //addTemplate();
  addTemplateList.value = currentSelection;
  setTemplate();
}, false);
addTemplateList.addEventListener('change', function(){
  setTemplate();
}, false);

// let hiddenInputs = templateElement.querySelectorAll('.hidden-input');
// hiddenInputs.forEach(hiddenInput => {
//   hiddenInput.style.display = 'none';
// });

function storeTask() {

  const storeElement = document.querySelector('.template').cloneNode(true);
  storedList.appendChild(storeElement);


  let hiddenInputs = storeElement.querySelectorAll('.hidden-input');
  let selectionStoredInputs = storeElement.querySelectorAll('.selection-list');
  
  console.log(hiddenInputs);
  for(let i = 0; i < hiddenInputs.length; i++){

    console.log(hiddenInputs[i].value, selectionStoredInputs[i].value);

  }
  
  // hiddenInputs.forEach(hiddenInput => {
  //   hiddenInput.style.display = 'initial';
  // });

  // //console.log("prehello",storeElement);
  // //console.log("hello",selectionStoredInputs);
  // selectionStoredInputs.forEach(selectionStoredInput => {
  //   selectionStoredInput.style.display = 'none';
  // });

  const listInputs = storeElement.querySelectorAll('.list-input');

  listInputs.forEach(listInput => {
    listInput.readOnly = true;
  });

  const selectionInputs = storeElement.querySelectorAll('.selection-list');

  // selectionInputs.forEach(selectionInput => {
  //   selectionInput.visible = false;
  // });

  storedId++;

  setTemplate();


  // const storeElement = document.querySelector('.template').cloneNode;
  // storedList.appendChild(storeElement.cloneNode);
  // storedList.appendChild(storeElement.cloneNode);
  // storedList.appendChild(storeElement.cloneNode);
  // storedList.appendChild(storeElement.cloneNode);
  // const templateElement = document.querySelector('.template');
  // storedList.appendChild(templateElement);




  // const taskElement = document.importNode(taskTemplate.content,true);
  // const checkbox = taskElement.querySelector('input');
  // checkbox.id = id;
  // const label = taskElement.querySelector('label');
  // label.htmlFor = id;
  // label.append(newTask.value);
  // taskList.appendChild(taskElement);
  // newTask.value = '';
  // id++;
}

// function addStored(){

//   const templateElement = document.querySelector('.template')
//   storedList.appendChild(templateElement);
  
//   acceptButton.style.display = 'none'
//   cancelButton.style.display = 'none'
//   clearButton.style.display = 'none'

//   storedId++;

// }

function setTemplate(){
  if(id !== 0){
    const template = document.querySelector('.template').remove();
    id--;
  }
  addTemplate();
};

function addTemplate(){
  
  const selectedTemplate = addTemplateList.value;
  currentSelection = selectedTemplate;
  
  if(selectedTemplate === "-"){
    const templateElement = document.importNode(blankTemplate.content,true);
    //alert(templateElement);
    templateList.appendChild(templateElement);
    addTemplateList.selectedIndex = 0;
    acceptButton.style.display = 'none';
    cancelButton.style.display = 'none';
    clearButton.style.display = 'none';
    id++;
  }else if(selectedTemplate === "Closure"){
    const templateElement = document.importNode(closureTemplate.content,true);
    
    let hiddenInputs = templateElement.querySelectorAll('.hidden-input');
    hiddenInputs.forEach(hiddenInput => {
      hiddenInput.style.display = 'none';
    });
    console.log(hiddenInputs);
    //alert(templateElement);
    templateList.appendChild(templateElement);
    addTemplateList.selectedIndex = 0;
    acceptButton.style.display = 'initial';
    cancelButton.style.display = 'initial';
    clearButton.style.display = 'initial';
    id++;
  }else if(selectedTemplate === "Payment")
    if(selectedTemplate === "Payment"){
      const templateElement = document.importNode(paymentTemplate.content,true);
      let hiddenInputs = templateElement.querySelectorAll('.hidden-input');
      hiddenInputs.forEach(hiddenInput => {
        hiddenInput.style.display = 'none';
      });
      console.log(hiddenInputs);
      //alert(templateElement);
      templateList.appendChild(templateElement);
      addTemplateList.selectedIndex = 0;  
      acceptButton.style.display = 'initial';
      cancelButton.style.display = 'initial';
      clearButton.style.display = 'initial';
      id++;
  }
};