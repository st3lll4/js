<script setup lang="ts">

import { onMounted, reactive, ref } from 'vue'
import { GpsLocationTypeService } from './services/GpsLocationTypeService'
import type { IGpsLocationType } from './domain/IGpsLocationType';
import type { IResultObject } from './types/IResultObject';

const reqIsOngoing = ref(false);
const data = reactive<IResultObject<IGpsLocationType[]>>({});

const res = async () => {
    try {
        reqIsOngoing.value = true;
        const result = await GpsLocationTypeService.getAllAsync() 
        data.data = result.data;
        data.errors = result.errors;
    }
    catch(error) {
        console.log(error)
    }
}

onMounted( async () => {
    res();
})

</script>

<template>
    <div> request is ongoing: {{ reqIsOngoing }}</div>
    <div v-if="data.data">
        <ul>
            <li v-for="item, key in data.data" :key="key">
                ID: {{ item.id }}<br>
                NAME: {{ item.name }}<br>
                DESC: {{ item.description }}
            </li>
        </ul>
    </div>
    <div v-if="data.errors">
        {{ data.errors }}
    </div>
</template>

<style scoped>

li {
    margin-top: 2rem;
}

</style>