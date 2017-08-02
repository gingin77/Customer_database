let header = document.createElement("h1");
let t = document.createTextNode("Internal Company Directory");

header.appendChild(t);
document.body.appendChild(header);// body doesn't work the same way other elements work

let div = document.createElement("div");
div.setAttribute("class", "unique_person");

  for(let i = 0; i < customers.results.length; i++){
      let div = document.createElement( "div");
      div.setAttribute("class", "unique_person");

          let unique_contents = ( `<img src=${customers.results[i].name.first}
            <span>${customers.results[i].name.first} ${customers.results[i].name.last}</span>
            <span>${customers.results[i].email}</span>
            <span>${customers.results[i].location}</span>
            <span>${customers.results[i].phone}</span>
            <span>${customers.results[i].value}</span>
            `);

      console.log(unique_contents);
      div.innerHTML = "unique_contents";

      div.appendChild(div);
  }

  // const template = `
  //   <article>
  //     <h2>${blogPost.title}</h2>
  //     <div class="meta">
  //       <span class="date">Written on ${blogPost.meta.date}</span>
  //     </div>
  //     <div class="post">
  //       <img src="${blogPost.post.image}">
  //       ${blogPost.post.content}
  //     </div>
  //     <div class="site">
  //       Part of this content was pulled from <a href="${blogPost.site.url}">${blogPost.site.name}</a>
  //     </div>
  //   </article>
  // `;
  //



//
// // console.log (customer_display_template);
// // let fakeElement = document.createElement("div");
// // Insert the template onto our page
//
// document.body.innerHTML = customer_display_template;
// //document.body.innerHTML = customer_display_template
//

//
//
