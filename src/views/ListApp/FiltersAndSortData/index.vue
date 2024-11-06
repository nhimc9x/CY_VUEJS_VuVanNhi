<script setup>
import { computed, reactive, ref, watch } from 'vue'

let gamesData = reactive([
  {
    id: 1,
    name: 'Minecraft',
    price: 199,
    genre: 'Survival',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlqo4YQpt8h4DzuEOGxzr6saZef-DCyiNU2hso2UE_WgqNEQVmhaEiZx9dSCKusYo__7g&usqp=CAU'
  },
  {
    id: 2,
    name: 'League of Legends',
    price: 300,
    genre: 'MMO',
    image: 'https://static.wikia.nocookie.net/leagueoflegends/images/0/07/League_of_Legends_icon.png'
  },
  {
    id: 3,
    name: 'Fortnite',
    price: 300,
    genre: 'Survival',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjw7CB1tW4uo4xltNlSEm5G0vD69ndxn4mnQ&s'
  },
  {
    id: 4,
    name: 'Call of Duty',
    price: 400,
    genre: 'Survival',
    image: 'https://iconpusher.com/_next/image?url=https%3A%2F%2Fimg.iconpusher.com%2Fcom.activision.callofduty.shooter%2F20211125.png&w=640&q=75'
  },
  {
    id: 5,
    name: 'Dota 2',
    price: 199,
    genre: 'MMO',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYbXaVcDEWGkRmWTxg8T2huVh5Khl40GH1YQ&s'
  },
  {
    id: 6,
    name: 'Pubg',
    price: 199,
    genre: 'Survival',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCM1IqTh-lyj4fpas_CL-oO3jBq5rAxM2cA&s'
  },
  {
    id: 7,
    name: 'Wukong',
    price: 300,
    genre: 'Adventure',
    image: 'https://statics.koreanbuilds.net/tile_200x200/MonkeyKing.webp'
  },
  {
    id: 8,
    name: 'Free Fire',
    price: 299,
    genre: 'Survival',
    image: 'https://play-lh.googleusercontent.com/jft5dckkhc_7hjsZBgEorUA6C3jUxkjYhEIR6R-WFMaeKvvd8DVtDXQj1O6Dit7bj9s=w240-h480-rw'
  },
  {
    id: 9,
    name: 'Fifa 21',
    price: 120,
    genre: 'Sports',
    image: 'https://ar-pay.com/blog/wp-content/webp-express/webp-images/uploads/media/fifa21-r2.jpg.webp'
  },
  {
    id: 10,
    name: 'Lethal Company',
    price: 201,
    genre: 'Action',
    image: 'https://steamuserimages-a.akamaihd.net/ugc/2264809616938704926/0B28BBDD29EE9C4484F9E4B7C0EBA5A1BF215C3E/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
  },
  {
    id: 11,
    name: 'Roblox',
    price: 182,
    genre: 'Simulation',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9GZaLXvx69umwy7RRy1_etsFq-LON4k_Ng&s'
  },
  {
    id: 12,
    name: 'GTA V',
    price: 999,
    genre: 'Action',
    image: 'https://i.pinimg.com/736x/9a/77/db/9a77db0d3793bb8c4170658776d948c8.jpg'
  }
])

const currentGenre = ref('all')
const genres = computed(() => Array.from(new Set(['all', ...gamesData.map(game => game.genre).sort()])))

const gamesDataFiltered = computed(() => {
  if (currentGenre.value === 'all') {
    return gamesData
  }
  return gamesData.filter(game => game.genre === currentGenre.value)
})

const sortTypes = ref(['name', 'price'])
const sortBy = ref({
  type: 'name',
  order: 'asc'
})

const handleChangeSort = (sortType) => {
  sortBy.value.type === sortType ? (sortBy.value.order = sortBy.value.order === 'asc' ? 'desc' : 'asc') : sortBy.value.type = sortType
}

watch(() => sortBy.value, (newVal) => {
  switch (newVal.type) {
    case 'name':
      newVal.order === 'asc' ? gamesDataFiltered.value.sort((a, b) => a.name.localeCompare(b.name)) : gamesDataFiltered.value.sort((a, b) => b.name.localeCompare(a.name))
      break
    case 'price':
      newVal.order === 'asc' ? gamesDataFiltered.value.sort((a, b) => a.price - b.price) : gamesDataFiltered.value.sort((a, b) => b.price - a.price)
      break
    default:
      break
  }
}, { deep: true, immediate: true })


</script>

<template>
  <div class="w-full min-h-screen bg-[#1d2238] pt-10">
    <div class="max-w-[1280px] mx-auto w-full py-10">
      <div class="text-4xl font-bold tracking-widest text-accent text-center mb-14">Filters and sort data</div>
      <div class="bg-secondary p-10 rounded-lg">

        <ul class="flex items-center text-gray-400 text-lg">
          <li
            v-for="(genre, index) in genres"
            :key="index"
            class="px-5 py-1 cursor-pointer font-medium hover:text-accent select-none capitalize"
            @click="currentGenre = genre"
            :class="currentGenre === genre ? 'bg-highlight text-accent' : 'bg-primary '"
          >
            {{ genre }}
          </li>
        </ul>

        <div class="flex justify-end mb-2 gap-1 text-gray-400 text-lg">
          <div
            v-for="(sortType, index) in sortTypes"
            :key="index"
            :class="sortBy.type === sortType ? 'bg-primary text-highlight' : ''"
            class="flex items-center gap-2 text-lg text-gray-500 px-3 py-1 rounded-md cursor-pointer select-none"
            @click="handleChangeSort(sortType)"
          >
            <div class="capitalize">{{ sortType }}</div>
            <v-icon name="ai-acclaim" :flip="sortBy.order === 'asc' ? 'horizontal' : 'vertical'"></v-icon>
          </div>
        </div>

        <ul class="w-full px-4 h-[500px] overflow-y-auto">
          <li v-for="game in gamesDataFiltered" :key="game.id"
              class="flex items-center gap-4 px-6 py-3 rounded-md cursor-pointer hover:bg-primary/25 duration-100">
            <div class="w-20 h-20 rounded-md overflow-hidden">
              <img :src="game.image" alt="game image">
            </div>
            <div class="flex-1 flex flex-col">
              <div class="text-xl font-medium text-gray-300">{{ game.name }}</div>
              <div class="text-gray-400 text-sm">{{ game.genre }}</div>
            </div>
            <div class="text-lg font-medium text-yellow-600 text-right tracking-wide">$ {{ game.price }}</div>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
