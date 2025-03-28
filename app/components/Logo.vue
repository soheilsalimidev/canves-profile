<script setup lang="ts">
const { appName, profile } = useAppConfig()

defineProps({
  isText: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <NuxtLinkLocale
    to="/"
    class="flex shrink-0 items-center"
    aria-label="Go back to home page"
  >
    <span class="font-pacifico">
      {{ profile.name }}
    </span>
    <span
      v-if="isText"
      class="ml-1 text-xs font-semibold"
    >
      {{ appName }}
    </span>
  </NuxtLinkLocale>
</template>
