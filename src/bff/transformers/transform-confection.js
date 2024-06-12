export const transformConfection = (dbConfection) => ({
	confectionId: dbConfection.id,
	name: dbConfection.name,
	confectionImage: dbConfection.confection_image,
	description: dbConfection.description,
	price: dbConfection.price,
});