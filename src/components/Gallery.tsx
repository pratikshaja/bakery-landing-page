const galleryImages = [
  {
    url: 'https://www.brides.com/thmb/OauVoeHo3xap0neyDPpW8uHVI-Q%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/__opt__aboutcom__coeus__resources__content_migration__brides__public__brides-services__production__2019__02__26__5c75996ed61e8e234ebfb700_erin-and-nick-wedding27-8f7f7722663540218862302ac2d77e2f.jpg',
    alt: 'Wedding cake',
  },
  {
    url: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Birthday cake',
  },
  {
    url: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cupcakes',
  },
  {
    url: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Chocolate cake',
  },
  {
    url: 'https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Pastries',
  },
  {
    url: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cookies',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-gray-600 text-lg">A glimpse of our delicious creations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-80"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
