<script setup>
import DynamicCard from '@/views/ListApp/DynamicComponent/DynamicCard/DynamicCard.vue'
</script>

<template>
  <div class="w-full min-h-screen bg-[#1d2238] pt-10">
    <div class="max-w-[1280px] mx-auto w-full py-10 space-y-10">
      <DynamicCard componentType="text">
        <template #header>
          Text
        </template>
        <template #footer>
          Thanks
        </template>
        <div class="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
          sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
          enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae
        </div>
      </DynamicCard>
      <DynamicCard componentType="video">
        <template #header>
          Video
        </template>
        <template #footer>
          Thanks
        </template>
        <video controls class="w-full h-[300px] bg-secondary rounded">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </DynamicCard>
      <DynamicCard componentType="image">
        <template #header>
          Image
        </template>
        <template #footer>
          Thanks
        </template>
        <img
             src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
             alt="image" class="w-60 mx-auto object-contain bg-secondary rounded">
      </DynamicCard>
    </div>
  </div>
</template>

<style scoped>

</style>
