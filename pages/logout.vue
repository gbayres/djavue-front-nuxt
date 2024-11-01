<template>

</template>

<script setup lang="ts">
const { logout } = useAccountStore()

onMounted(async () => {
   await logout()
})
</script>