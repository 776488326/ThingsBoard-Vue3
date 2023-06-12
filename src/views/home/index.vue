<script setup>
import MiniCard from './mini_card/index.vue'
import MaxCard from './max_card/index.vue'
import { ElNotification } from 'element-plus'
import { onMounted, ref } from 'vue'
import { userMessageStore } from '@/stores/user.ts'
const useStore = userMessageStore()
const message = ref('上午好')

onMounted(() => {
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
    <MiniCard
      v-for="(card, index) in cards"
      v-bind="card"
      :key="index"
    ></MiniCard>
    <section id="start">
      <MaxCard></MaxCard>
    </section>
  </main>
</template>

<style scoped lang="scss">
#container {
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 6fr;
  gap: 16px;

  #total {
    grid-column: 1;
    grid-row: 1;
  }

  #active {
    grid-column: 2;
    grid-row: 1;
  }

  #inactive {
    grid-column: 3;
    grid-row: 1;
  }

  #tempperature {
    grid-column: 4;
    grid-row: 1;
  }

  #air {
    grid-column: 5;
    grid-row: 1;
  }

  #charging {
    grid-column: 6;
    grid-row: 1;
  }

  #start {
    grid-column: 1/7;
    grid-row: 2;
    overflow: hidden;
    border-radius: $borderRadius;
    background-color: $white;
    border: 2px solid $themeLightColor;
  }
}
</style>
