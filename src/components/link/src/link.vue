<template>
    <a :class="[
        'w-link',
        type ? 'w-link--' + type : '',
        {
            'is-disabled':disabled,
            'is-underline': !underline,
        }
    ]">
        <span class="w-link-inner">
            <w-icon :name='icon'></w-icon>
            <slot/>
        </span>
    </a>
</template>
<script>
    import WIcon from '../../icon';
    export default {
        name: 'w-link',
        components: {
            WIcon,
        },
        props: {
            type: {
                type: String,
                default: 'default'
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            underline: {
                type: Boolean,
                default: true,
            },
            icon: {
                type: String,
            },
        },
        computed: {

        },
        watch: {},
        methods: {
            
        },
    }
</script>