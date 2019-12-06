<template>
<div>
    <h1>Het Tropenmuseum</h1>
    <h2>Collectie rookgerei en meer!</h2>
    <p>
        Een verzameling van allerlei gekke dingen!
    </p>
    <Data />
</div>
</template>

<script>
import Data from './Data.vue'
export default {
    name: 'home',
    components: {Data}
}
</script>