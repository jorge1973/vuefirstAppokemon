<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";

const { data, getData, loading, errorData } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon/");
</script>

<template>
	<h1>Pokemons</h1>
	<p v-if="loading">Loading...</p>
	<div v-if="errorData" class="alert alert-danger mt-2">{{ errorData }}</div>
	<div v-if="data">
		<ul class="list-group">
			<li
				v-for="poke in data.results"
				class="list-group-item list-group-item-action list-group-item-light"
			>
				<router-link
					class="text-decoration-none"
					:to="`/pokemons/${poke.name}`"
					>{{ poke.name }}</router-link
				>
			</li>
		</ul>
		<button
			:disabled="!data.previous"
			class="btn btn-outline-success mt-2 mx-2"
			@click="getData(data.previous)"
		>
			Previous
		</button>
		<button
			:disabled="!data.next"
			class="btn btn-outline-primary mt-2"
			@click="getData(data.next)"
		>
			Next
		</button>
	</div>
</template>
