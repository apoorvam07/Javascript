fetch(`https://catfact.ninja/fact`)
  .then((Response) => Response.json())
  .then((json) => console.log(json));
// const container=document.getElementById(`#container`);
// const request= new XMLHttpRequest
// request.open('GET',)
// request.send

// request.addEventListener(`load`,function(){
//   console.log(this.responseText);
// }
