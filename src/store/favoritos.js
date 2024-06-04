import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore("favoritos", () => {
	const favoritos = ref([]);
	if (localStorage.getItem("favoritos")) {
		favoritos.value = JSON.parse(localStorage.getItem("favoritos"));
	}

	const remove = (id) => {
		favoritos.value = favoritos.value.filter((item) => item.id !== id);
		localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
	};

	const add = (poke) => {
		favoritos.value.push(poke);
		localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
	};

	const findPoke = (name) => {
		return favoritos.value.find((item) => item.name === name);
	};
	return {
		favoritos,
		add,
		remove,
		findPoke,
	};
});
