const cacheKeyPrefix = 'serum_cache';

export default class CacheHandler {
	constructor() {
		this.cache = new Map();
	}

	get(key) {
		const cacheKey = cacheKeyPrefix + key;
		const cachedData = this.cache.get(cacheKey);
		if (cachedData) {
			const { value, lastModified, tags } = cachedData;
			return { value, lastModified, tags };
		}
		return null;
	}

	set(key, data, ctx) {
		const cacheKey = cacheKeyPrefix + key;
		this.cache.set(cacheKey, {
			value: data,
			lastModified: Date.now(),
			tags: ctx.tags,
		});
	}

	revalidateTag(tag) {
		// Iterate over all entries in the cache
		for (let [key, value] of this.cache) {
			// If the value's tags include the specified tag, delete this entry
			if (value.tags.includes(tag)) {
				this.cache.delete(key);
			}
		}
	}
}
