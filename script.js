function submit()
{
    const x = document.getElementById('forminput1');
    const y = document.getElementById('forminput2');
    const z = document.getElementById('formtext');

    alert("Thank you for your feedback!");
  
  x.value = "";
  y.value = "";
  z.value = "";
}

const arrname = [];

const initApp = () => 
{
  document.getElementById("submitform").addEventListener("submit",(event) =>
  {event.preventDefault();
    //enter list of restaurant
    //display list of restaurant entered
    //provide suggestion
    //display suggestion
  })
}

document.addEventListener("DOMContentLoaded",initApp);

const listofrestaurant = () =>
{

}

const randomrestaurant = () => 
{

}

const clearselection = () =>
{
  const display = document.getElementById("entrysection");
  if(!display.classList.contains("hidden")) display.classList.toggle("hidden");
  const list = document.querySelector(".entrysection ol");
  list.innerHTML = "";
}
