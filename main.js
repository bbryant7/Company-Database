

// Variables

const cust = customers.results[0];
let picture = cust.picture.large;
let firstName = cust.name.first;
let lastName = cust.name.last;
let fullName = `${firstName} ${lastName}`;
let email = cust.email;
let street = cust.location.street;
let city = cust.location.city;
let state = cust.location.state;
let zip = cust.location.postcode;
let address = `${street} ${city}, ${state} ${zip}`;
let phone = cust.cell;
// testing
// console.log(fullName);
// console.log(email);
// console.log(address);
// console.log(phone);
// console.log(picture);

// loop for divs
for (var i = 0; i < cust.length; i++) {

}
const divContainer = document.getElementById("directory");
console.log(divContainer);
let bio = document.createElement("div");
console.log(bio);
divContainer.appendChild(bio);
bio.setAttribute('class', 'bio' );
console.log(divContainer);


// template for one person
let companyDirectory =
  `
<div id="wrapper">
<h1> Internal Company Directory </h1>
<div>
  <img src=${picture} alt="employee">
  <p> ${fullName} </p>
  <p> ${email} </p>
  <p> ${address} </p>
  <p> ${phone} </p>
</div>
</div>
`
document.querySelector('body').innerHTML = companyDirectory;
