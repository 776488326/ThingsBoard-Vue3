<script setup lang="ts">
import { Clock, Filter, RefreshLeft, Search } from '@element-plus/icons-vue'
import { Ref, ref } from 'vue'
defineProps({
  search_place: {
    type: String,
    default: '请输入查找信息',
  },
})
let search_text: Ref<string> = ref('')
let search_show: Ref<Boolean> = ref(false)
</script>

<template>
  <section id="control">
    <section id="filter">
      <el-popover placement="bottom" trigger="click">
        <template #reference>
          <el-button class="m-2" :icon="Filter">
            Filter: Assigned to me
          </el-button>
        </template>
      </el-popover>
      <el-popover placement="bottom" trigger="click">
        <template #reference>
          <el-button class="m-2" :icon="Clock">For All Time</el-button>
        </template>
      </el-popover>
    </section>
    <section id="operate">
      <section id="refresh">
        <el-button :icon="RefreshLeft" circle></el-button>
      </section>
      <section id="search">
        <el-button :icon="Search" circle></el-button>
        <el-input
          v-if="search_show"
          v-model="search_text"
          :placeholder="search_place"
          :prefix-icon="Search"
        />
      </section>
    </section>
  </section>
</template>

<style lang="scss" scoped>
#control {
  padding: 0 $space $half-space;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #operate {
    display: flex;
    align-items: center;
    section {
      margin: $half-space;
    }
  }
}
</style>
