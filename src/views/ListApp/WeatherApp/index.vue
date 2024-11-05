<script setup>
import bgWeather from '@/views/listApp/WeatherApp/images/wall.jpg'
import { onMounted, ref } from 'vue'
import { getWeatherData } from '@/views/ListApp/WeatherApp/apis.js'
import clear_icon from '@/views/ListApp/WeatherApp/images/clear.png'
import cloud_icon from '@/views/ListApp/WeatherApp/images/cloud.png'
import drizzle_icon from '@/views/ListApp/WeatherApp/images/drizzle.png'
import rain_icon from '@/views/ListApp/WeatherApp/images/rain.png'
import snow_icon from '@/views/ListApp/WeatherApp/images/snow.png'

const searchCity = ref('')
const city = ref('London')
const humidity = ref(64)
const windSpeed = ref(18)
const temperature = ref(23)
const currentWeather = ref(clear_icon)

onMounted( async () => {
  const result = await getWeatherData('London')
  console.log(result)
})

const handleSearchCity = async () => {
  if (searchCity.value === '') {
    console.log('empty')
    return
  }
  try {
    const result = await getWeatherData(searchCity.value)
    city.value = result.name
    humidity.value = result?.main?.humidity
    windSpeed.value = result?.wind?.speed
    temperature.value = Math.round(result?.main?.temp)

    console.log(result?.weather[0]?.icon)

    switch(result?.weather[0]?.icon) {
      case '01n' : case '01d': currentWeather.value = clear_icon; break;
      case '02n' : case '02d': currentWeather.value = cloud_icon; break;
      case '03n' : case '03d' : case '04d' : case '04n': currentWeather.value = drizzle_icon; break;
      case '09n' : case '09d' : case '10d' : case '10n': currentWeather.value = rain_icon; break;
      case '13n' : case '13d': currentWeather.value = snow_icon; break;
      default: currentWeather.value = clear_icon
    }

  } catch (error) {
    console.log(error)
    alert('City not found')
    searchCity.value = ''
  }
}

</script>

<template>
  <div
    :style="{ backgroundImage: `url(${bgWeather})` }"
    class="w-full min-h-screen bg-center bg-cover grid place-content-center">
    <div
      class="min-w-[444px] px-6 py-10 bg-gradient-to-b from-blue-800/80 to-blue-400/80 rounded-md backdrop-blur-2xl shadow-2xl">
      <form @submit.prevent="handleSearchCity" class="flex justify-between gap-2">
        <input v-model="searchCity" type="text" placeholder="Search city" class="px-4 flex-1 rounded-full outline-none">
        <button class="rounded-full bg-white text-primary size-16">
          <v-icon name="ri-search-line" />
        </button>
      </form>
      <div class="flex flex-col items-center text-white">
        <div class="h-[224px]">
          <img :src="currentWeather" alt="" class="h-full">
        </div>
        <div class="text-[5rem]">{{temperature}}°C</div>
        <div class="text-[2rem]">{{city}}</div>
        <div class="flex justify-between w-full mt-6">
          <div class="flex items-center gap-6">
            <img src="@/views/ListApp/WeatherApp/images/humidity.png" alt=""/>
            <div class="">
              <div class="text-xl font-medium">{{humidity}}%</div>
              <div class="text-sm">Humidity</div>
            </div>
          </div>
          <div class="flex items-center gap-6">
            <img src="@/views/ListApp/WeatherApp/images/wind.png" alt=""/>
            <div class="">
              <div class="text-xl font-medium">{{windSpeed}}km/h</div>
              <div class="text-sm">Wind speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
