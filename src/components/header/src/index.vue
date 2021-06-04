<template>
   <header class="w-header" :style="{ height }">
       <slot></slot>
   </header>
</template>
<script>
    export default {
        name: 'w-header',
        components: {
        },
        props: {
            height: {
                type: String,
                default: '60px'
            }
        },
    }
</script>