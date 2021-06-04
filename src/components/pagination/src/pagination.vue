<template>
  <div class="w-pagination">
    <div class="p-total">共{{total}}条数据</div>
    <button class="p-prev" :disabled="currentPage === 1" @click="trigger_prev">
      <w-icon name="chevron-left"/>
    </button>
    <ul class="p-list">
      <li :class="['p-number',currentPage === 1 && 'active']"
          @click="trigger_number(1)">{{1}}
      </li>
      <li v-if="count > limit && currentPage >= limit - 2" class="p-number btn-more btn-left"
          @click="trigger_chevrons_left">
        <w-icon class="more" name="more-horizontal"/>
        <w-icon class="chevrons" name="chevrons-left"/>
      </li>
      <li v-for="index of number_list" :class="['p-number',currentPage === index && 'active']" :key="index"
          @click="trigger_number(index)">{{index}}
      </li>
      <li v-if="count > limit && currentPage <= count - limit + 3" class="p-number btn-more btn-right"
          @click="trigger_chevrons_right">
        <w-icon class="more" name="more-horizontal"/>
        <w-icon class="chevrons" name="chevrons-right"/>
      </li>
      <li v-if="count > 1" :class="['p-number',currentPage === count && 'active']"
          @click="trigger_number(count)">{{count}}
      </li>
    </ul>
    <button class="p-next" :disabled="currentPage === count || count < 1" @click="trigger_next">
      <w-icon name="chevron-right"/>
    </button>
  </div>
</template>

<script>
  export default {
    name: "w-pagination",
    props: {
      value: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 0
      },
      pageSize: {
        type: Number,
        default: 10
      },
      limit: {
        type: Number,
        default: 7
      }
    },
    computed: {
      count() {
        const count = this.total / this.pageSize
        return Math.ceil(count);
      },
      currentPage() {
        return this.value
      },
      number_list() {
        let list = Array.from({length: this.count - 2}, (v, k) => k + 2);
        let number = [];
        const limit = this.limit - 2
        if (this.currentPage < limit) {
          number = list.slice(0, limit)
        } else if (this.currentPage > this.count - this.limit + 3) {
          number = list.slice(list.length - limit, list.length)
        } else {
          number = list.slice(this.currentPage - Math.ceil(this.limit/2), this.currentPage - Math.ceil(this.limit/2) + this.limit - 2)
        }
        return number
      }
    },
    methods: {
      trigger_prev() {
        const currentPage = this.currentPage - 1 < 1 ? 1 : this.currentPage - 1
        this.$emit('input', currentPage);
      },
      trigger_next() {
        const currentPage = this.currentPage + 1 > this.count ? this.count : this.currentPage + 1
        this.$emit('input', currentPage);
      },
      trigger_chevrons_left() {
        const limit = this.limit - 2
        const currentPage = (this.currentPage - limit) < 1  ? 1 : (this.currentPage - limit)
        this.$emit('input', currentPage);
      },
      trigger_chevrons_right() {
        const limit = this.limit - 2
        const currentPage = (this.currentPage + limit) > this.count ? this.count : (this.currentPage + limit)
        this.$emit('input', currentPage);
      },
      trigger_number(index) {
        this.$emit('input', index)
      }
    }
  }
</script>
