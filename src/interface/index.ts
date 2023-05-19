interface Tips {
  id: string;
  title: string;
  slug: string;
  image: string;
}

interface Testimonial {
  id: string;
  testimony: string;
  by: string;
}

interface Data {
  tips: Tips[];
  testimonial: Testimonial[];
}
