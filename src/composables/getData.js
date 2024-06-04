import { ref } from "vue";
import axios from "axios";
export const useGetData = () => {
	const data = ref(null);
	const loading = ref(true);
	const errorData = ref(null);
	const getData = async (url) => {
		loading.value = true;
		try {
			const res = await axios.get(url);
			data.value = res.data;
		} catch (e) {
			// poke.value = null;
			errorData.value = e.response.data;
		} finally {
			loading.value = false;
		}
	};
	return {
		getData,
		data,
		loading,
		errorData,
	};
};
