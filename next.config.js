// module.exports = {
// 	cacheHandler: require.resolve('./cache-handler.js'),
// 	cacheMaxMemorySize: 0, // disable default in-memory caching
// 	generateBuildId: async () => {
// 		// This could be anything, using the latest git hash
// 		return process.env.GIT_HASH;
// 	},
// };

module.exports = {
	generateBuildId: async () => {
		// This could be anything, using the latest git hash
		return process.env.GIT_HASH;
	},
};
