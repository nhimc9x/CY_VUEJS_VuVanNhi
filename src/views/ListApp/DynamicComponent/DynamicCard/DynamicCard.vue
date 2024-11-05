<script setup>
import { computed } from 'vue'
import TextCard from '@/views/ListApp/DynamicComponent/DynamicCard/TextCard.vue'
import ImageCard from '@/views/ListApp/DynamicComponent/DynamicCard/ImageCard.vue'
import VideoCard from '@/views/ListApp/DynamicComponent/DynamicCard/VideoCard.vue'

const props = defineProps({
  componentType: {
    type: String,
    required: true,
    default: 'text'
  }
})

const component = computed(() => {
  switch (props.componentType) {
    case 'image':
      return ImageCard
    case 'video':
      return VideoCard
    default:
      return TextCard
  }
})

</script>

<template>
  <component :is="component">
    <div class="max-w-[800px] mx-auto space-y-4">
      <div class="text-2xl font-bold text-accent">
        <slot name="header"></slot>
      </div>
      <slot></slot>
      <div class="text-2xl font-bold text-accent">
        <slot name="footer"></slot>
      </div>
    </div>
  </component>
</template>

<style scoped>

</style>
