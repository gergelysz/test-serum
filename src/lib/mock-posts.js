const mockPosts = [
	{
		id: 1,
		title: 'The Benefits of Regular Exercise',
		author: 'Jane Doe',
		publishedDate: '2024-07-30T08:00:00Z',
		content: 'Regular exercise is crucial for maintaining good health and wellness. It helps in reducing the risk of chronic diseases, improving mood, and enhancing overall physical fitness.',
		image: 'https://via.placeholder.com/400x200?text=Exercise', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 2,
		title: 'How to Maintain Healthy Skin',
		author: 'John Smith',
		publishedDate: '2024-07-29T09:00:00Z',
		content: 'Maintaining healthy skin involves proper hydration, a balanced diet, and using appropriate skincare products. Regular cleansing and moisturizing are key to achieving a radiant complexion.',
		image: 'https://via.placeholder.com/400x200?text=Skincare', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 3,
		title: 'The Importance of a Balanced Diet',
		author: 'Alice Brown',
		publishedDate: '2024-07-28T10:00:00Z',
		content: 'A balanced diet provides the necessary nutrients for overall health. It includes a variety of foods from different food groups in the right proportions to maintain good health and well-being.',
		image: 'https://via.placeholder.com/400x200?text=Diet', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 4,
		title: 'Top 5 Tips for Better Sleep',
		author: 'Michael Green',
		publishedDate: '2024-07-27T11:00:00Z',
		content: 'Getting quality sleep is essential for overall health. Tips for better sleep include maintaining a regular sleep schedule, creating a restful environment, and avoiding stimulants before bedtime.',
		image: 'https://via.placeholder.com/400x200?text=Sleep', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 5,
		title: 'Healthy Eating Habits for Weight Loss',
		author: 'Laura White',
		publishedDate: '2024-07-26T12:00:00Z',
		content: 'Adopting healthy eating habits is crucial for effective weight loss. Focus on consuming whole foods, staying hydrated, and avoiding processed foods high in sugar and fat.',
		image: 'https://via.placeholder.com/400x200?text=Weight+Loss', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 6,
		title: 'DIY Natural Skincare Recipes',
		author: 'Emma Wilson',
		publishedDate: '2024-07-25T13:00:00Z',
		content: 'Creating your own skincare products at home is a great way to ensure natural ingredients. Simple recipes include facial masks, exfoliators, and moisturizers using ingredients from your kitchen.',
		image: 'https://via.placeholder.com/400x200?text=DIY+Skincare', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 7,
		title: 'How to Make a Smoothie Bowl',
		author: 'Olivia Martinez',
		publishedDate: '2024-07-24T14:00:00Z',
		content: 'Smoothie bowls are a nutritious and delicious way to start your day. Blend fruits with yogurt or milk, and top with granola, seeds, and fresh fruit for a satisfying breakfast.',
		image: 'https://via.placeholder.com/400x200?text=Smoothie+Bowl', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 8,
		title: 'The Best Superfoods to Include in Your Diet',
		author: 'David Lee',
		publishedDate: '2024-07-23T15:00:00Z',
		content: 'Superfoods are nutrient-rich foods that offer various health benefits. Incorporate superfoods like berries, nuts, and leafy greens into your diet for optimal health and wellness.',
		image: 'https://via.placeholder.com/400x200?text=Superfoods', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 9,
		title: 'Top Skincare Ingredients to Look For',
		author: 'Sophia Davis',
		publishedDate: '2024-07-22T16:00:00Z',
		content: 'Understanding key skincare ingredients can help you choose the right products. Look for ingredients like hyaluronic acid, retinol, and vitamin C for effective skincare benefits.',
		image: 'https://via.placeholder.com/400x200?text=Skincare+Ingredients', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 10,
		title: 'Simple Recipes for a Healthy Dinner',
		author: 'Liam Harris',
		publishedDate: '2024-07-21T17:00:00Z',
		content: 'Healthy dinners can be quick and easy to prepare. Try recipes like grilled chicken with vegetables, quinoa salads, or baked fish to keep your meals nutritious and satisfying.',
		image: 'https://via.placeholder.com/400x200?text=Healthy+Dinner', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 11,
		title: 'The Benefits of Meditation for Stress Relief',
		author: 'Emily Robinson',
		publishedDate: '2024-07-20T18:00:00Z',
		content: 'Meditation is a powerful tool for managing stress and improving mental health. It helps in calming the mind, reducing anxiety, and enhancing overall well-being.',
		image: 'https://via.placeholder.com/400x200?text=Meditation', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 12,
		title: 'How to Build a Balanced Workout Routine',
		author: 'James Thompson',
		publishedDate: '2024-07-19T19:00:00Z',
		content: 'A balanced workout routine includes a mix of cardiovascular exercises, strength training, and flexibility exercises. This combination helps in building overall fitness and preventing injuries.',
		image: 'https://via.placeholder.com/400x200?text=Workout', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 13,
		title: 'Seasonal Fruits and Vegetables to Eat This Summer',
		author: 'Mia Walker',
		publishedDate: '2024-07-18T20:00:00Z',
		content: 'Eating seasonal produce ensures you get fresh and nutritious ingredients. Summer fruits and vegetables like tomatoes, cucumbers, and berries are perfect for refreshing dishes and snacks.',
		image: 'https://via.placeholder.com/400x200?text=Seasonal+Produce', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 14,
		title: 'Understanding Different Skin Types and How to Care for Them',
		author: 'Charlotte Evans',
		publishedDate: '2024-07-17T21:00:00Z',
		content: 'Different skin types require different care. Whether you have oily, dry, combination, or sensitive skin, understanding your skin type can help you choose the right products and routines.',
		image: 'https://via.placeholder.com/400x200?text=Skin+Types', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 15,
		title: 'How to Prepare Quick and Healthy Snacks',
		author: 'Ava Wilson',
		publishedDate: '2024-07-16T22:00:00Z',
		content: 'Healthy snacks can be both quick and nutritious. Prepare snacks like fruit slices with nut butter, Greek yogurt with honey, or veggie sticks with hummus for a satisfying bite.',
		image: 'https://via.placeholder.com/400x200?text=Healthy+Snacks', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 16,
		title: 'Tips for Staying Hydrated During Exercise',
		author: 'Ethan Taylor',
		publishedDate: '2024-07-15T23:00:00Z',
		content: 'Proper hydration is essential during exercise. Drink water before, during, and after your workout, and consider electrolyte-rich beverages for intense or prolonged exercise sessions.',
		image: 'https://via.placeholder.com/400x200?text=Hydration', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 17,
		title: 'How to Create a Skincare Routine for Every Age',
		author: 'Isabella Martinez',
		publishedDate: '2024-07-14T08:00:00Z',
		content: 'A skincare routine should evolve with age. From basic care in your 20s to more targeted treatments in your 30s and beyond, adapting your routine helps maintain healthy and youthful skin.',
		image: 'https://via.placeholder.com/400x200?text=Skincare+Routine', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 18,
		title: 'Simple and Healthy Breakfast Ideas',
		author: 'Lily Garcia',
		publishedDate: '2024-07-13T09:00:00Z',
		content: 'Start your day with a nutritious breakfast. Options like overnight oats, avocado toast, or smoothie bowls provide essential nutrients and energy to kickstart your morning.',
		image: 'https://via.placeholder.com/400x200?text=Breakfast', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 19,
		title: 'Essential Skincare Tips for Winter',
		author: 'Alexander Brown',
		publishedDate: '2024-07-12T10:00:00Z',
		content: 'Winter weather can be harsh on your skin. To prevent dryness and irritation, use richer moisturizers, protect your skin from cold winds, and keep hydrated throughout the season.',
		image: 'https://via.placeholder.com/400x200?text=Winter+Skincare', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
	{
		id: 20,
		title: 'The Best Summer Recipes for Outdoor Dining',
		author: 'Emily Johnson',
		publishedDate: '2024-07-11T11:00:00Z',
		content: 'Enjoy outdoor dining with delicious summer recipes. Try grilled veggies, fresh salads, and light pasta dishes that are perfect for warm weather and al fresco meals.',
		image: 'https://via.placeholder.com/400x200?text=Summer+Recipes', // Placeholder image URL
		getFormattedDate() {
			return new Date(this.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: true,
			});
		},
	},
];

export default mockPosts;
