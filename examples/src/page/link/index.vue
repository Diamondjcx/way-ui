<template>
    <div class="demo-link">
        <h4>基础用法</h4>
        <w-link
          href="https://element.eleme.io" target="_blank"
        >
            默认链接
        </w-link>
        <w-link
        type="primary"
        >
            主要链接
        </w-link>
        <w-link
        type="success"
        >
            成功链接
        </w-link>
        <w-link
        type="warning"
        >
            警告链接
        </w-link>
        <w-link
        type="danger"
        >
            危险链接
        </w-link>
        <w-link
        type="info"
        >
            信息链接
        </w-link>
        <h4>禁用状态</h4>
        <w-link
        disabled
        >
            默认链接
        </w-link>
        <w-link
        disabled
        type="primary"
        >
            主要链接
        </w-link>
        <w-link
        disabled
        type="success"
        >
            成功链接
        </w-link>
        <w-link
        disabled
        type="warning"
        >
            警告链接
        </w-link>
        <w-link
        disabled
        type="danger"
        >
            危险链接
        </w-link>
        <w-link
        disabled
        type="info"
        >
            信息链接
        </w-link>
        <h4>下划线</h4>
        <w-link
        :underline="false"
        >
            无下划线
        </w-link>
        <w-link
        
        >
            有下划线
        </w-link>
        <h4>图标</h4>
        <w-link icon="edit">
            编辑
        </w-link>
        <w-link icon="activity">
            曲线
        </w-link>
    </div>
</template>
<script>
    export default {
        name: "index",
        date() {
            return {
                link: 123
            }
        },
        methods: {

        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    .demo-link {
        .w-link {
            margin-left: 10px;
        }
    }
</style>