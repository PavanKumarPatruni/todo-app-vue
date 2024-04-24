<script setup>
import { ref, defineEmits } from 'vue'

const props = defineProps({
  title: String,
  list: Array,
  selected: String
})
const emit = defineEmits(['change'])

const show = ref(false)
const selectedValue = ref(props.selected || '')

const onClick = () => {
  show.value = true
}

const onItemClick = (data) => {
  show.value = false
  selectedValue.value = data
  emit('change', data)
}
</script>

<template>
  <div class="dropdown inline-block relative">
    <button
      class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
      @click="onClick"
    >
      <span class="mr-1">{{ selectedValue || title }}</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </button>
    <ul v-if="show" class="dropdown-menu absolute text-gray-700 pt-1 rounded-lg">
      <li v-for="(data, index) in list" :key="index">
        <button
          class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-[200px] text-left"
          @click="onItemClick(data)"
        >
          {{ data }}
        </button>
      </li>
    </ul>
  </div>
</template>
