<template>
  <div class="flex flex-col" :class="[active ? activeClass : inactiveClass]">
    <svg
      width="12"
      height="6"
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current mb-2"
    >
      <path d="M11 5L6 0.999999L1 5" stroke-width="1.5" />
    </svg>

    <svg
      width="12"
      height="6"
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current"
    >
      <path d="M1 1L6 5L11 1" stroke-width="1.5" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'TableSortIcon',
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      activeClass: 'text-dark-blue',
      inactiveClass: 'text-gray',
    }
  },
}
</script>
