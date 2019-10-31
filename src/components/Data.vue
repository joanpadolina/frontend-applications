<template>
  <div>
    <h1>Data Comp</h1>
      <div class="container-info">
        <div class="content" 
          v-for="result in results"
          v-bind:result="result"
          v-bind:key="result.id">
          <h2>
            {{result.typeLabel}}
          </h2>
          <div class="image">  
             <img v-on:click="clickOnProduct()" v-bind:src="result.img" alt="data" >
                <!-- {{result.img.value}} --> 
            </div>
            <p>
              {{result.placeName}}
            </p>
      </div>
    </div>
    <Detail />
  </div>
</template>
<script>
/*eslint 'no-console':0*/
import Detail from './Detail'

export default {
  name:'Data',
  components: {
      Detail,
      
},
  props:['this.results'],
  data() {
    return { 
      image: null,
      results:[],
      src: require,
      endpoints:{
      nmvw: "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-12/sparql"
    }
  }
},
// Laurens code voor het ophalen van de api met SparQL 
  mounted(){

    const url="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-12/sparql"
    //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
    const query =`
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
    } LIMIT 5
    `
  this.fetchSparqlData(this.endpoints.nmvw, query)
		//Extract the nested data from that json. This nesting will be different for every API btw
		.then(json => json.results.bindings)
		//Rewrite each result to be flat and only contain interesting values
		.then(results => {
			// console.log('results:', results)

			return results.map( (result, id) => {
				return {
				// 	//I've added an id value because that helps Vue distinguish different items later on
					id: id,
          cho: result.cho.value,
					placeName: result.placeName.value,
					title: result.title.value,
          typeLabel:result.typeLabel.value,
          img:result.img.value
				// 	//If you're confused about this next line, try experimentig with split+pop on a string
				// 	// in your browser

				}
			})
		})
		//Store the results in app.data
		.then(results => { 
			console.log("Cleaned api results", results)
			this.results = results 
		})

	},
	methods: {
		// Fetch some data from a url and return the results
		fetchSparqlData: async function(endpoint, query){
			// console.log("fetching", endpoint, query)
			const response = await fetch(endpoint +"?query="+ encodeURIComponent(query) +"&format=json")
			//Extract the json from the html response
			const data = response.json()
			return data
		},
      
      clickOnProduct: function(){
      let image = event.target.src
      console.log(image)

      console.log('clickedd', event.target.src)
}

  }
}

</script>

