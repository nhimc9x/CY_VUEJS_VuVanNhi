<script setup>
import { HomeIcon, ChartBarIcon, CreditCardIcon, UserIcon, AdjustmentsHorizontalIcon } from '@heroicons/vue/24/solid'

</script>

<template>
  <div class="w-[20%]">
    <ul class="flex flex-col gap-y-10 pt-16 pl-6">
      <li class="flex items-center gap-4">
        <HomeIcon class="size-8 text-highlight" />
        <div class="text-xl font-semibold text-text-color tracking-wider">Dashboard</div>
      </li>
      <li class="flex items-center gap-4">
        <ChartBarIcon class="size-8 text-highlight" />
        <div class="text-xl font-semibold text-text-color tracking-wider">Analytics</div>
      </li>
      <li class="flex items-center gap-4">
        <CreditCardIcon class="size-8 text-highlight" />
        <div class="text-xl font-semibold text-text-color tracking-wider">Transactions</div>
      </li>
      <li class="flex items-center gap-4">
        <UserIcon class="size-8 text-highlight" />
        <div class="text-xl font-semibold text-text-color tracking-wider">Accounts</div>
      </li>
      <li class="flex items-center gap-4">
        <AdjustmentsHorizontalIcon class="size-8 text-highlight" />
        <div class="text-xl font-semibold text-text-color tracking-wider">Settings</div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
