interface TServiceData {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  data: {
    title_data: string;
    description_data: string;
    image_data: string;
    link_data: string;
    title_2: string;
    text: {
      id: number;
      title: string;
      text: string;
      image: string;
    }[];
  };
}
