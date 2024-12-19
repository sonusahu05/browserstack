const Section = ({ title, points, image, reverse }) => {
  return (
    <section className={`py-10 ${reverse ? "bg-gray-100" : ""}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className={`md:w-1/2 ${reverse ? "order-2" : ""}`}>
          <img src={image} alt={title} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 px-6 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section;