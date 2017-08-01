const cust = customers.results;

// Variables


// testing
// console.log(fullName);
// console.log(email);
// console.log(address);
// console.log(phone);
// console.log(picture);

// loop for divs
// for (var i = 0; i < cust.length; i++) {
//
// }
for (var i = 0; i < cust.length; i++) {

  let picture = cust[i].picture.large;
  let firstName = cust[i].name.first;
  let lastName = cust[i].name.last;
  let fullName = `${firstName} ${lastName}`;
  let email = cust[i].email;
  let street = cust[i].location.street;
  let city = cust[i].location.city;
  let state = cust[i].location.state;
  let zip = cust[i].location.postcode;
  let address = `${street} ${city}, ${state} ${zip}`;
  let phone = cust[i].cell;
  let ss = cust[i].id.value;

const divContainer = document.getElementById("directory");
let bio = document.createElement("div");
divContainer.appendChild(bio);
bio.setAttribute('class', 'bio' );

let companyDirectory =
  `
  <img src=${picture} alt="employee">
  <p> ${fullName} </p>
  <p> ${email} </p>
  <p> ${address} </p>
  <p> ${phone} </p>

 `;

bio.innerHTML = companyDirectory;

}

// template for one person

// document.querySelector('#directory').innerHTML = companyDirectory;
