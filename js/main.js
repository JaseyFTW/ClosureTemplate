const addTemplateList = document.querySelector('.template-selection-list');
const addTempList = document.querySelector('#temp');
const templateList = document.querySelector('.template-list');
const blankTemplate = document.querySelector('#blank-template');
const closureTemplate = document.querySelector('#closure-template');
const paymentTemplate = document.querySelector('#payment-template');
let id = 0;


addTemplateList.addEventListener('change', function(){
  //if(e.textremoveTemplate();
  changeTemplate();
}, false);

function changeTemplate(){
  if(id !== 0){
    const template = document.querySelector('.template').remove();
  }
  addTemplate();
};

function addTemplate(){
  
  const selectdTemplate = addTemplateList.value;
  //alert(selectdTemplate);
  
  if(selectdTemplate === "Closure"){
    const templateElement = document.importNode(closureTemplate.content,true);
    //alert(templateElement);
    templateList.appendChild(templateElement);
    addTemplateList.selectedIndex = 0;
    id++;
  }
  
  

};