<script setup>

const props = defineProps({
  userInfo: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="bg-secondary min-h-72 rounded-lg">
    <div class="flex p-2 gap-1">
      <div class="">
        <span class="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
      </div>
      <div class="circle">
        <span class="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
      </div>
      <div class="circle">
        <span class="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
      </div>
    </div>
    <div class="px-2 text-[#25ff00] first:*:pl-0 last:*:pl-0 *:pl-4 space-y-1">
      <div>const user = {</div>
      <div>id: {{ userInfo.id }},</div>
      <div>name: '{{ userInfo.name }}',</div>
      <div>email: '{{ userInfo.email }}',</div>
      <div>website: '{{userInfo.website}}',</div>
      <div>company: '{{userInfo.company.name}}'</div>
      <div>}</div>
    </div>
  </div>
</template>

<style scoped>

</style>
