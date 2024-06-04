<script setup>
import { useFavoritesStore } from "@/store/favoritos";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const useFavoritos = useFavoritesStore();
const { favoritos } = storeToRefs(useFavoritos);
const { remove } = useFavoritos;
// let pokeId = localStorage.getItem(poke.id); //revisar luego tiene error
</script>

<template>
	<h1>Favoritos</h1>
	<p v-if="favoritos.length === 0">Sin Favoritos</p>
	<ul class="list-group">
		<li class="list-group-item" v-for="poke in favoritos" :key="poke.id">
			<div>
				{{ poke.name }}
			</div>
			<div>
				<router-link
					class="btn btn-sm btn-success outline mx-2"
					:to="`/pokemons/${poke.name}`"
				>
					Mas información
				</router-link>
				<button class="btn btn-sm btn-danger outline" @click="remove(poke.id)">
					Eliminar
				</button>
			</div>
		</li>
	</ul>
</template>
