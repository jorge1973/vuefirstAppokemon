import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
	const counter = ref(0);
	const increment = () => {
		return counter.value++;
	};
	const doubleCount = computed(() => {
		return counter.value * 2;
	});
	return {
		counter,
		increment,
		doubleCount,
	};
});

// export const useCounterStore = defineStore("counter", {
// 	id: "counter",
// 	state: () => ({
// 		counter: 0,
// 	}),

// 	actions: {
// 		increment() {
// 			this.counter++;
// 		},
// 	},
// 	getters: {
// 		doubleCount: (state) => {
// 			return state.counter * 2;
// 		},
// 	},
// });
