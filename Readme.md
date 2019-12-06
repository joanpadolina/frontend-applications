# Vue setup

Voor dit project maak ik gebruik van het Framework: **Vue**.

![Map](https://github.com/joanpadolina/frontend-applications/blob/master/wiki-image/mapview.gif)

## Concept

![concept](https://github.com/joanpadolina/frontend-applications/blob/master/wiki-image/conceptJoan.png)

Roken is nu veel anders dan vroeger. Doordat het meer een dagelijkse behoefte is was een waterpijpen van vroeger meer bijzonder. Daarbij is de website bedoeld om een eigen collectie te maken van de verschillende rookgerei.
Het doel van dit project is het ophalen van Data uit de Tropen museum met een SparQl code naar een JSON file. Deze data wil daarna ik mijn static html plaatsen en dit dynamisch kunnen renderen. 

## Gebouwd met

* VueJS - framework
* Node  - server
* NMVW - API data van allerlei rookgerij
* SPARQL - Ophalen van de data
* Webpack - Pagina bouwen

## Git clone
```
git clone https://github.com/joanpadolina/frontend-applications.git
```
## Lokaal opzet
```
In de webbrowser localhost/8080
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
Na het builden krijg je een dist map die al je vue comprimeert.

### Data opzet

![data](https://github.com/joanpadolina/frontend-applications/blob/master/wiki-image/data.png)

### Wat gebeurt er eigenlijk?

Dit project maakt gebruik van van SPARQL queries om bestanden van het Tropenmuseum te verkrijgen.
De VUE Framework zorgt voor dat alle dynamische data met een stijling te zien is op de Client side.
Door Sass the implementeren worden deze stijling weer omgezet naar css bestanden.

### [Routing](https://github.com/joanpadolina/frontend-applications/wiki/Vue-Introductie)
Op deze link kan je uitgebreid lezen hoe ik verschillende componenten met elkaar heb kunnen linken door de routes op te stellen.

### [Mapview](https://github.com/joanpadolina/frontend-applications/wiki/Vue-map-data)
De SVG van heb ik met de hand gemaakt en ervoor gezorgd dat elke groep svg klikable en de juiste data terug krijgt.

### [Vue reflectie](https://github.com/joanpadolina/frontend-applications/wiki/VUE)
Na veel documentaties lezen en veel uitproberen heb ik geschreven hoe ik uiteindelijk Vue.js heb ervaren.


### Credits

Laurens
Stackoverflow
Gast sprekers
Ivo

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
