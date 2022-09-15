var Fname = document.querySelector("#Fname");
var Lname = document.querySelector("#Lname");
var address = document.querySelector("#address");
var pin = document.querySelector("#pin");
var gender = document.querySelector("#gender");
var markedCheckbox = document.querySelectorAll(
  'input[type="checkbox"]:checked'
);
var state = document.querySelector("#state");
var country = document.querySelector("#country");

var table = document.getElementById('table');
var rowDetails = document.querySelector(".rowDetails");

var items = document.getElementsByName("food");
var selectedItems = "";
const dummy = document.querySelector(".dummy")
const msg = document.querySelector(".errorMsg")
var title = document.getElementById('title');
// for (var i = 0; i < items.length; i++) {
//  if (items[i].type == "checkbox" && items[i].checked == true)
//  console.log(items[i].value)
//  selectedItems[i] = items[i].value;
//                 }
document.querySelector(".section2").style.display="none";
function processForm() {
  
  for (var i = 0; i < items.length; i++) {
    if (items[i].checked == true) 
    {
      selectedItems += `${items[i].value}   `;
    }
  }
  
  selectedItems = selectedItems.trim().split(" ")
  var filterList = selectedItems.filter(Boolean)

  

  //
  const rowDetails = document.createElement("tr");
  rowDetails.setAttribute("class", "rowDetails");
  rowDetails.innerHTML = `<tr>
<td data-column="First Name">${Fname.value}</td>
<td data-column="Last Name">${Lname.value}</td>
<td data-column="Address">${address.value}</td>
<td data-column="Pincode">${pin.value}</td>
<td data-column="Gender">${gender.value}</td>
<td data-column="Fav food 1">${filterList[0]}</td>
<td data-column="Fav food 2">${filterList[1]}</td>
<td data-column="State">${state.value}</td>
<td data-column="Country">${country.value}</td>
</tr>
`;
  table.append(rowDetails);
  Fname.value = "";
  Lname.value = "";
  address.value = "";
  pin.value = "";
  gender.value = "";
  state.value = "";
  country.value = "";
  selectedItems = ""
  filterList=[]
}

function checkboxValidation(){
  console.log("checkbox validator is started..")
  var count = 0
  for (var i = 0; i < items.length; i++) {
    if (items[i].checked == true) 
    {
      count++;
    }
  }

  if(count>2)
  {
    console.log("checkbox validator is working...")
    msg.innerText = "***Select only TWO"
  }
}

function nextPage(){
  document.querySelector(".section1").style.display="none";
  document.querySelector(".section2").style.display="inline";
}

function beforePage(){
  document.querySelector(".section2").style.display="none";
  document.querySelector(".section1").style.display="inline";
}