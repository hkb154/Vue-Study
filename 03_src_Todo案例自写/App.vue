<template>
    <div>
        <Headers></Headers>
        <List></List>
        <Footer></Footer>
    </div>
</template>

<script>
    import Headers from './components/Header.vue'
    import List from './components/List.vue'
    import Footer from './components/Footer.vue'
    
    export default {
        name:'App',
        components:{
            Headers,
            List,
            Footer
        }
    }
</script>
