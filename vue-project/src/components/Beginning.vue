<script setup lang="ts">
import { useUserStore } from '../stores/userstore';

const store = useUserStore();


</script>

<template>
    intro to the game: {{ store.userName }}
</template>