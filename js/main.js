const addTemplateList = document.querySelector('.template-selection-list');
const addTempList = document.querySelector('#temp');
const templateList = document.querySelector('.template-list');
const blankTemplate = document.querySelector('#blank-template');
const closureTemplate = document.querySelector('#closure-template');
const paymentTemplate = document.querySelector('#payment-template');
let id = 0;

setTemplate();

addTemplateList.addEventListener('change', function(){
  //if(e.textremoveTemplate();
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
  
  const selectdTemplate = addTemplateList.value;
  //alert(selectdTemplate);
  
  if(selectdTemplate === "-"){
    const templateElement = document.importNode(blankTemplate.content,true);
    //alert(templateElement);
    templateList.appendChild(templateElement);
    addTemplateList.selectedIndex = 0;
    id++;
  }else if(selectdTemplate === "Closure"){
    const templateElement = document.importNode(closureTemplate.content,true);
    //alert(templateElement);
    templateList.appendChild(templateElement);
    addTemplateList.selectedIndex = 0;
    id++;
  }else if(selectdTemplate === "Payment")
    if(selectdTemplate === "Payment"){
      const templateElement = document.importNode(paymentTemplate.content,true);
      //alert(templateElement);
      templateList.appendChild(templateElement);
      addTemplateList.selectedIndex = 0;
      id++;
  }
  
  

};