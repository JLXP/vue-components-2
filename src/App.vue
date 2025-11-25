<template>
    <div>{{ message }}</div>
    <contact-us></contact-us>
</template>    

<script>
export default{
    setup(){
        const message = "Hello vue";
        return {message}
    }
}

</script>

<style>

</style>