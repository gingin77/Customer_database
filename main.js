console.log(customers)

let h1_div = `<h1>Internal Company Directory</h1><div></div>`;
document.body.innerHTML = h1_div;// body doesn't work the same way other elements work

// let div = `<div></div>`;
// document.body.innerHTML = div; << That just overwrote the h1 element....

let div = document.querySelector('div');
div.setAttribute("class", "people_container");

for(let i = 0; i < customers.results.length; i++){
      let div2 = document.createElement( "div");
      div2.setAttribute("class", "unique_person");
      div2.classList.add("extra");

      let unique_contents = `
        <img src=${customers.results[i].picture.large}>
        <br>
        <span class="name">${customers.results[i].name.first} ${customers.results[i].name.last}</span>
        <span class="email">${customers.results[i].email}</span>
        <span class="address">${customers.results[i].location.street}</span>
        <span class="address">${customers.results[i].location.city}${customers.results[i].location.state}${customers.results[i].location.postcode}</span>
        <span class="phone">${customers.results[i].phone}</span>
        <span class="SSN">${customers.results[i].value}</span>
        `;

      div2.innerHTML = unique_contents;
      div.appendChild(div2);
      }


// console.log(unique_contents);
//
// document.body.appendChild(div1);

//
//
//
// //
// // // console.log (customer_display_template);
// // // let fakeElement = document.createElement("div");
// // // Insert the template onto our page
// //
// // document.body.innerHTML = customer_display_template;
// // //document.body.innerHTML = customer_display_template
// //
//
// //
// //


// // Thomas's solution:
// let people = customers.results
//
// function renderPerson(){
//           return `
//           <div class="customers">
//             ${people.map(person => `
//               <div class="customer">
//               <ul>
//                 <img src="${person.picture.large}" alt="profile">
//                   <li id="name">${person.name.first} ${person.name.last}</li>
//                   <li>${person.email}</li>
//                   <li>${person.location.street}</li>
//                   <li>${person.location.city} ${person.location.state}, ${person.location.postcode}</li>
//                   <li>${person.cell}</li>
//               </ul>
//               </div>
//               `)}
//             </div>
//           `;
//         }
//
//          let markup = `<header>
//                internal company directory
//                       </header>
//                 ${renderPerson(people)}`
//
//          document.body.innerHTML = markup


         //https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend
         // var parent = document.createElement("div");
         // var p = document.createElement("p");
         // var span = document.createElement("span");
         // parent.append(p);
         // parent.prepend(span);

         // console.log(parent.childNodes); // NodeList [ <span>, <p> ]let body = getElementsByTagName('body');
         // let body = getElementsByTagName('body');


         // let header = document.createElement('h1');
         // let t = document.createTextNode('Internal Company Directory');
