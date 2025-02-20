import React from "react";

interface Category {
  name: string;
  image: string;
  color?: string;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section className="py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Categories</h2>

      {/* Mobile Slider + Responsive Grid */}
      <div className="flex overflow-x-auto gap-6 scrollbar-hide sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:overflow-visible">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative min-w-[80%] sm:min-w-0 rounded-2xl shadow-xl group transform transition-transform duration-300 hover:scale-105 bg-gray-900"
          >
            {/* Category Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover rounded-2xl opacity-90 transition-opacity duration-300 group-hover:opacity-70"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70">
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
            </div>

            {/* Bottom Accent Border */}
            <div
              className="absolute bottom-0 left-0 w-full h-1 transition-all duration-300"
              style={{ backgroundColor: category.color || "#ffbe0b" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
