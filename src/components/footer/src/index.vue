<template>
   <footer class="w-footer" :style="{ height }">
       <slot></slot>
   </footer>
</template>
<script>
    export default {
        name: 'w-footer',
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