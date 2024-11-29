import React, { useState, useRef, useEffect } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('Men');
  const [isHovering, setIsHovering] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Crop Top Purple',
      price: 59.00,
      image: '/images/Sample11.png',
      category: 'Men'
    },
    {
      id: 2,
      name: 'Crop Top White',
      price: 49.00,
      image: '/images/Sample13.png',
      category: 'Men'
    },
    {
      id: 3,
      name: 'Crop Top Black',
      price: 55.00,
      image: '/images/Sample15.png',
      category: 'Men'
    },
    {
      id: 4,
      name: 'Crop Top Yellow',
      price: 62.00,
      image: '/images/Sample17.png',
      category: 'Men'
    },
    {
      id: 5,
      name: 'Summer Dress Purple',
      price: 69.00,
      image: '/images/Sample2.png',
      category: 'Women'
    },
    {
      id: 6,
      name: 'Summer Dress White',
      price: 65.00,
      image: '/images/Sample4.png',
      category: 'Women'
    },
    {
      id: 7,
      name: 'Summer Dress Blue',
      price: 72.00,
      image: '/images/Sample6.png',
      category: 'Women'
    },
    {
      id: 8,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample8.png',
      category: 'Women'
    },
    {
      id: 9,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample26.png',
      category: 'Top'
    },
    {
      id: 10,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample28.png',
      category: 'Top'
    },
    {
      id: 11,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample32.png',
      category: 'Top'
    },
    {
      id: 12,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample34.png',
      category: 'Top'
    },
    {
      id: 13,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample35.png',
      category: 'Pants'
    },
    {
      id: 14,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample31.png',
      category: 'Pants'
    },
    {
      id: 15,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample24.png',
      category: 'Pants'
    },
    {
      id: 16,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample21.png',
      category: 'Pants'
    },
    {
      id: 17,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample1.png',
      category: 'Dresses'
    },
    {
      id: 18,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample3.png',
      category: 'Dresses'
    },
    {
      id: 19,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample5.png',
      category: 'Dresses'
    },
    {
      id: 20,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample7.png',
      category: 'Dresses'
    },
  ];

  const filteredProducts = products.filter(product => product.category === activeCategory);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = (e) => {
    const container = e.target;
    const scrollPercentage = (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100;
    setScrollProgress(scrollPercentage);
  };

  return (
    <section className="px-4 sm:px-20 py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl leading-tight text-center font-normal mb-11 sm:mb-16">
          Featured Products
        </h2>
        <div className="flex justify-center mb-8 space-x-2 sm:space-x-4 flex-wrap gap-2">
          {['Men', 'Women', 'Top', 'Pants', 'Dresses'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 mb-2 rounded-full transition-colors 
                ${activeCategory === category 
                  ? 'bg-[#58005F] text-white' 
                  : 'bg-[#fbe7fc] text-gray-800 hover:bg-[#f0ccf2] hover:text-black'}
              `}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar scroll-smooth"
          onScroll={handleScroll}
          style={{
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`${isMobile ? 'w-1/2' : 'w-1/4'} flex-shrink-0 px-2 mb-4`}
              onMouseEnter={() => !isMobile && setIsHovering(index)}
              onMouseLeave={() => !isMobile && setIsHovering(null)}
            >
              <div className="group relative overflow-hidden rounded-lg border border-gray-100">
                <div className="relative overflow-hidden">
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full aspect-[3/4] object-cover transition-transform duration-500 ease-in-out 
                        ${!isMobile && isHovering === index 
                        ? 'scale-110' 
                        : 'scale-100'}`}
                    />
                  </div>
                  <div className="absolute top-2 right-2 flex space-x-1">
                    <button className="bg-white/80 p-1.5 rounded-full hover:bg-white hover:shadow-md transition">
                      <Heart className="text-[#58005F] w-4 h-4" />
                    </button>
                    <button className="bg-white/80 p-1.5 rounded-full hover:bg-white hover:shadow-md transition">
                      <ShoppingCart className="text-[#58005F] w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-2 sm:p-3 bg-white border-x border-b border-gray-100 rounded-b-lg">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs sm:text-sm text-gray-600 truncate">{activeCategory}</span>
                  <span className="font-bold text-sm sm:text-base text-[#58005F]">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="flex justify-center mt-6">
            <div className="w-24 h-0.5 bg-gray-200">
              <div 
                className="h-full bg-black"
                style={{ 
                  width: `${scrollProgress}%`,
                  transition: 'none'
                }}
              />
            </div>
          </div>
        )}

        <div className="flex justify-center text-center mt-10">
          <a href="/Collection">
          <button className="px-8 py-3 bg-[#58005F] text-white rounded-full hover:bg-[#59005fc8] transition duration-300">
            View All Collection
          </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;
