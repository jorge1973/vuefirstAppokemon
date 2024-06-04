<script setup>
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";
const useCounter = useCounterStore();
const { increment } = useCounter;
const { counter, doubleCount } = storeToRefs(useCounter); //los computed y las variables que se pasan como ref necesitan usar stortorefs para destructurar la info
</script>

<template>
	<h1>Home counter:{{ counter }}</h1>
	<h2>Doble: {{ doubleCount }}</h2>
	<button @click="increment">Incrementar</button>
</template>
