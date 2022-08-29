export interface ImageInterface {
    src: string,
    alt?: string;
}

export interface FilmsInterface {
    title: string;
    gallery: ImageInterface[];
}