const addTemplateList = document.querySelector('.template-selection-list');
const removeTemplateButton = document.querySelector('.cancel-btn');
const templateList = document.querySelector('.template-list');
const blankTemplate = document.querySelector('#blank-template');
const closureTemplate = document.querySelector('#closure-template');
const paymentTemplate = document.querySelector('#payment-template');

const acceptButton = document.querySelector('.accept-btn');
const cancelButton = document.querySelector('.cancel-btn');
const clearButton = document.querySelector('.clear-btn');

let id = 0;

let currentSelection;

setTemplate();

acceptButton.addEventListener('click', function(){
  setTemplate();
  alert("this was added to nowhere, sorry!")
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
    acceptButton.style.display = 'none'
    cancelButton.style.display = 'none'
    clearButton.style.display = 'none'
    id++;
  }else if(selectedTemplate === "Closure"){
    const templateElement = document.importNode(closureTemplate.content,true);
    //alert(templateElement);
    templateList.appendChild(templateElement);
    addTemplateList.selectedIndex = 0;
    acceptButton.style.display = 'initial'
    cancelButton.style.display = 'initial'
    clearButton.style.display = 'initial'
    id++;
  }else if(selectedTemplate === "Payment")
    if(selectedTemplate === "Payment"){
      const templateElement = document.importNode(paymentTemplate.content,true);
      //alert(templateElement);
      templateList.appendChild(templateElement);
      addTemplateList.selectedIndex = 0;  
      acceptButton.style.display = 'initial'
      cancelButton.style.display = 'initial'
      clearButton.style.display = 'initial'
      id++;
  }
};