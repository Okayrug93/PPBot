export class Embed {
    title: string;
    description: string;
    url?: string;
    timestamp?: Date;
    colour?: `#${string}`;
    footer?: Footer;
    image?: Image;
    thumbnail?: Thumbnail;
    author?: Author;
    fields?: [Field];

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getUrl() {
        return this.url;
    }

    getTimestamp() {
        return this.timestamp;
    }

    getColour() {
        return this.colour;
    }

    getFooter() {
        return this.footer;
    }

    getImage() {
        return this.image;
    }

    getThumbnail() {
        return this.thumbnail;
    }

    getAuthor() {
        return this.author;
    }

    getFields() {
        return this.fields;
    }

    setTitle(title: string) {
        validateTitle(title);
        this.title = title;
        return this;
    }

    setDescription(description: string) {
        validateDescription(description);
        this.description = description;
        return this;
    }

    setUrl(url: string) {
        validateURL(url);
        this.url = url;
        return this;
    }

    setTimestamp(timestamp: Date) {
        validateTimestamp(timestamp);
        this.timestamp = timestamp;
        return this;
    }

    setColour(colour: `#${string}`) {
        validateColour(colour);
        this.colour = colour;
        return this;
    }

    setFooter(footer: Footer) {
        validateFooter(footer);
        this.footer = footer;
        return this;
    }

    setImage(image: Image) {
        validateImage(image);
        this.image = image;
        return this;
    }

    setThumbnail(thumbnail: Thumbnail) {
        validateThumbnail(thumbnail);
        this.thumbnail = thumbnail;
        return this;
    }

    setAuthor(author: Author) {
        validateAuthor(author);
        this.author = author;
        return this;
    }

    setFields(fields: [Field]) {
        validateFields(fields);
        this.fields = fields;
        return this;
    }
}

const validateTitle = (title: string) => {};

const validateDescription = (description: string) => {};

const validateURL = (url: string) => {};

const validateTimestamp = (timestamp: Date) => {};

const validateColour = (colour: `#${string}`) => {};

const validateFooter = (footer: Footer) => {};

const validateImage = (image: Image) => {};

const validateThumbnail = (thumbnail: Thumbnail) => {};

const validateAuthor = (Author: Author) => {};

const validateFields = (fields: [Field]) => {};

class Thumbnail {
    url: string;
    height?: number;
    width?: number;
}

class Image {
    url: string;
    height?: number;
    width?: number;
}

class Author {
    name: string;
    url?: string;
    iconUrl?: string;
}

class Footer {
    text: string;
    iconUrl?: string;
}

class Field {
    name: string;
    value: string;
    inline?: boolean;
}
