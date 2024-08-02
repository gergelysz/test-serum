export default class BlogPost {
	constructor(id, title, content, author, publishedDate) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.author = author;
		this.publishedDate = publishedDate;
	}

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
	}
}
