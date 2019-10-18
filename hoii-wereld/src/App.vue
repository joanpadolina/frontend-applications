<template>
<div id="app">
  <img alt="Vue logo" src="./assets/tropenmuseum.jpg">
<h1>lkjdfa</h1>
  <ul>
    <li>kdfas</li>
  </ul>
<Content />
</div>
</template>


<script>
import Content from './components/Content.vue'

export default {
  components: {
    Content
  },
  data() {
    return {
      results: null,
    }

// Laurens code voor het ophalen van de api met SparQL 


  const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-12/sparql"
  //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
  const query =
  `
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX dc: <http://purl.org/dc/elements/1.1/>
  PREFIX dct: <http://purl.org/dc/terms/>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  PREFIX edm: <http://www.europeana.eu/schemas/edm/>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>

  SELECT ?cho ?title ?typeLabel ?placeName ?img WHERE {
  <https://hdl.handle.net/20.500.11840/termmaster14607>  skos:narrower* ?type . #de termmaster van rookgerei
        ?type skos:prefLabel ?typeLabel . #hier wil ik de naam terug krijgen van het type 
      ?cho edm:isShownBy ?img . #ophalen van de img linkjes
        ?cho edm:object ?type;
             dc:title ?title .  # hier wil ik de titel van het voorwerp
    ?cho dct:spatial ?place ;
         dc:title ?title .

    ?place skos:prefLabel ?placeName .
  } LIMIT 10
  `
  runQuery(url, query)

  function runQuery(url, query){
    //Test if the endpoint is up and print result to page 
    // (you can improve this script by making the next part of this function wait for a succesful result)
    fetch(url)
      .then(console.log)
  	// Call the url with the query attached, output data
  	fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
  	.then(res => res.json())
  	.then(json => {
  	console.log(json)
  	console.table(json.results.bindings);
  	})
}
  },
  mounted() {
  
  },

}



</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
