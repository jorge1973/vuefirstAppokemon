<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";
import { useFavoritesStore } from "@/store/favoritos";

const route = useRoute();

const { add, findPoke } = useFavoritesStore();

const router = useRouter(); //este sirve para enviar a una pagina especifica.
const back = () => {
	router.push("/pokemons");
};

// const addFavorito=(){};
const { data, getData, loading, errorData } = useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
	<p v-if="loading">Loading...</p>
	<div v-if="errorData" class="alert alert-danger mt-2">{{ errorData }}</div>
	<div
		class="d-flex mt-5 flex-column flex-wrap justify-content-center align-items-center align-content-center"
	>
		<div
			class="card mb-4 bg-dark bg-gradient shadow-lg"
			style="width: 20rem"
			v-if="data"
		>
			<img :src="data.sprites?.front_default" alt="" class="card-img-top" />
			<h5 class="card-title fs-1 text-bold text-white-50 text-center">
				{{ $route.params.name.toUpperCase() }}
			</h5>
			<div class="card-body">
				<div class="card-text" v-for="tipos in data.types">
					<span class="fs-4 text-light"
						>Tipo {{ tipos.slot }}: {{ tipos.type.name }}</span
					>
				</div>
			</div>
			<button
				@click="add(data)"
				:disabled="findPoke(data.name)"
				class="btn btn-outline-light p-2 m-4"
			>
				Agregar a Favoritos
			</button>
		</div>
		<h1 v-else>No existe el Pokemon</h1>
		<button @click="back()" class="btn btn-outline-dark">Back</button>
	</div>
</template>
