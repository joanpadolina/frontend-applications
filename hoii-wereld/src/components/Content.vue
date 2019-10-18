<template id="content">
  <div class="content-api">
    <ul>
      <li>Content vue</li>
    </ul>
  </div>
</template>

<script type="text/javascript">

export default {

//     data(){
//       return{
//         objecten:[
//             {title: ''},
//             {herkomst:''},
//             {img: ''}
// ]
// }}
}




// const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-12/sparql"
// //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
// const query =
// `
// PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
// PREFIX dc: <http://purl.org/dc/elements/1.1/>
// PREFIX dct: <http://purl.org/dc/terms/>
// PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
// PREFIX edm: <http://www.europeana.eu/schemas/edm/>
// PREFIX foaf: <http://xmlns.com/foaf/0.1/>
// 
// SELECT ?cho ?title ?typeLabel ?placeName ?img WHERE {
// <https://hdl.handle.net/20.500.11840/termmaster14607>  skos:narrower* ?type . #de termmaster van rookgerei
//       ?type skos:prefLabel ?typeLabel . #hier wil ik de naam terug krijgen van het type 
//     ?cho edm:isShownBy ?img . #ophalen van de img linkjes
//       ?cho edm:object ?type;
//            dc:title ?title .  # hier wil ik de titel van het voorwerp
//   ?cho dct:spatial ?place ;
//        dc:title ?title .
// 
//   ?place skos:prefLabel ?placeName .
// } LIMIT 10
// `
// runQuery(url, query)
// 
// function runQuery(url, query){
//   //Test if the endpoint is up and print result to page 
//   // (you can improve this script by making the next part of this function wait for a succesful result)
//   fetch(url)
//     .then(console.log)
// 	// Call the url with the query attached, output data
// 	fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
// 	.then(res => res.json())
// 	.then(json => {
// 	console.log(json)
// 	console.table(json.results.bindings);
// 	})
// }

// let fetchedData = json.results.bindings
// fetchedData.forEach(function(i){
//      i.img.value = i.img.value.replace("http", "https")
// })
</script>


<style media="screen">
  li{
    list-style-type: none;
    width:4em;
    height:4em;
    background:yellow;
  }
</style>