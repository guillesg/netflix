export interface TopImageInterface {
  number: number;
  src: string;
  alt?: string;
}

export interface TopGallery {
  gallery: TopImageInterface[];
}
