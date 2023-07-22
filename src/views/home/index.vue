<script setup lang="ts">
import MiniCard from './mini_card/index.vue'
import MaxCard from './max_card/index.vue'
import { ElNotification } from 'element-plus'
import { onMounted, ref } from 'vue'
import { userMessageStore } from '@/stores/user.ts'
import { useRoute } from 'vue-router'
const useStore = userMessageStore()
const message = ref('上午好')
const route = useRoute()
onMounted(() => {
  // console.log('route',route)
  if (route.meta.isShow) {
    const time = new Date()
    let hour = time.getHours()
    if (hour < 12 && hour >= 6) {
      message.value = '早上好'
    } else if (hour >= 12 && hour < 19) {
      message.value = '下午好'
    } else {
      message.value = '晚上好'
    }

    ElNotification({
      title: `hi, ${useStore.user_message.userName}`,
      message: message.value,
      type: 'success',
    })
  }
})
const cards = [
  {
    id: 'total',
    title: 'Total devices',
    iconName: '',
    content: '19',
  },
  {
    id: 'active',
    title: 'active devices',
    iconName: '',
    content: '0 100%',
  },
  {
    id: 'inactive',
    title: 'inactive devices',
    iconName: '',
    content: '19',
  },
  {
    id: 'tempperature',
    title: 'tempperature sensors',
    iconName: '',
    content: '3',
  },
  {
    id: 'air',
    title: 'air sensors',
    iconName: '',
    content: '4',
  },
  {
    id: 'charging',
    title: 'charging ports',
    iconName: '',
    content: '4',
  },
]
</script>

<template>
  <main id="container">
    <section id="box">
      <MiniCard
        v-for="(card, index) in cards"
        v-bind="card"
        :key="index"
      ></MiniCard>
    </section>
    <section id="start">
      <MaxCard></MaxCard>
    </section>
  </main>
</template>

<style scoped lang="scss">
#container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  #box {
    flex: 1;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    #active,
    #inactive,
    #tempperature,
    #air,
    #charging {
      flex: 1;
      margin-left: $half-space;
    }
  }

  #start {
    margin-top: 16px;
    padding: $half-space;
    overflow: hidden;
    border: 2px solid $theme-light-color;
    border-radius: $border-radius;
  }
}
@media screen and (max-width: 1366px) {
  #container {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    #box {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      #total,
      #active,
      #inactive,
      #tempperature,
      #air,
      #charging {
        width: 100%;
        flex: 1;
        margin: 4px 0;
      }
    }
    #start {
      flex: 1;
    }
  }
}
</style>
