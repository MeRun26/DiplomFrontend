import { transformConfection } from "../transformers";

export const getConfection = async (confectionId) =>
	fetch(`http://localhost:3005/confections/${confectionId}`)
		.then((res) => {
			if (res.ok) {
				return res;
			}

			const error =
				res.status === 404
					? "Такая страница не существует"
					: "Что-то пошло не так. Попробуйте еще раз позднее";
			return Promise.reject(error);
		})

		.then((loadedConfection) => loadedConfection.json())
		.then(
			(loadedConfection) =>
				loadedConfection && transformConfection(loadedConfection)
		);
