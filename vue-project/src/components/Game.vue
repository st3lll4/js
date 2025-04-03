<script setup lang="ts">
import Board from './Board.vue';
import { onMounted, ref } from 'vue';
import { useUserStore } from '../stores/userstore';

const userStore = useUserStore(); 

const userName = ref("");

onMounted(() =>  {
    userName.value = userStore.userName;
});

</script>

<template>
    hi, {{ userName }}
    <Board/>
</template>