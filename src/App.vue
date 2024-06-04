<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<nav class="navbar bg-dark navbar-dark flex-wrap">
		<div class="container d-flex flex-wrap">
			<router-link class="navbar-brand" to="/">
				<img
					src="@/assets/logo.svg"
					alt="Logo"
					width="30"
					height="20"
					class="d-inline-block align-text-top"
				/>
				PokeApi
			</router-link>
			<div>
				<router-link class="btn btn-outline-primary mx-2" to="/"
					>Home</router-link
				>
				<router-link class="btn btn-outline-primary mx-2" to="/about"
					>About</router-link
				>
				<router-link class="btn btn-outline-primary mx-2" to="/pokemons"
					>Pokemons</router-link
				>
				<router-link class="btn btn-outline-primary" to="/favoritos"
					>Favoritos</router-link
				>
			</div>
		</div>
	</nav>
	<div class="container">
		<RouterView />
	</div>
</template>
