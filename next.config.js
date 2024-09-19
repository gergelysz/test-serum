// module.exports = {
// 	cacheHandler: require.resolve('./cache-handler.js'),
// 	cacheMaxMemorySize: 0, // disable default in-memory caching
// 	generateBuildId: async () => {
// 		// This could be anything, using the latest git hash
// 		return process.env.GIT_HASH;
// 	},
// };

module.exports = {
	// generateBuildId: async () => {
	// 	// This could be anything, using the latest git hash
	// 	return process.env.GIT_HASH;
	// },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'via.placeholder.com',
			},
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'plus.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'www.drmax.ro',
			},
			{
				protocol: 'https',
				hostname: 'static.thcdn.com',
			},
			{
				protocol: 'https',
				hostname: 'comenzi.farmaciatei.ro',
			},
			{
				protocol: 'https',
				hostname: 'encrypted-tbn2.gstatic.com',
			},
			{
				protocol: 'https',
				hostname: 'encrypted-tbn1.gstatic.com',
			},
			{
				protocol: 'https',
				hostname: 'www.cerave.com',
			},
		],
	},
};
