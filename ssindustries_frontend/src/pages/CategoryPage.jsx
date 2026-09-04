import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts } from '../data/productsData'; 

function CategoryPage() {
  const { categoryName } = useParams();

  // 2. Naam format karna
  const formattedCategory = categoryName 
    ? categoryName.replace(/-/g, ' ').toUpperCase() 
    : '';

  // 3. MAIN LOGIC: Data filter karna
  // allProducts me se sirf wo products nikalna jinki category URL se match karti ho
  const filteredProducts = allProducts.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#d2bfa9] pt-12 pb-24 px-6 md:px-12 lg:px-24">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 mt-8">
        <span className="text-[#d4af37] tracking-[0.3em] uppercase text-[10px] md:text-xs font-bold mb-4 block">
          Premium Collection
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-wider mb-6">
          {formattedCategory}
        </h1>
        <p className="text-[#d2bfa9]/80 text-sm md:text-base leading-relaxed">
          Explore our exclusive range of {formattedCategory.toLowerCase()}. Crafted with precision, designed for modern luxury.
        </p>
      </div>

      {/* 4. Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            // Premium Product Card
            <div key={product.id} className="group relative bg-[#121212] border border-white/5 hover:border-[#d4af37]/30 transition-colors duration-300">
              
              {/* Product Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle dark overlay that fades on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-2">{product.name}</h3>
                <p className="text-[#d2bfa9]/70 text-xs mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Price & CTA Container */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                  <span className="text-[#d4af37] font-bold tracking-wide">{product.price}</span>
                  
                  {/* Lead Gen Call-to-Action */}
                  <Link 
                    to="/get-quote" 
                    className="text-[10px] font-bold uppercase tracking-widest border-b border-[#d2bfa9]/50 pb-0.5 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State (Agar kisi category me products nahi hain) */
        <div className="text-center py-24 border border-white/5 bg-[#121212]">
          <h3 className="text-xl md:text-2xl text-white font-light mb-3">New Collection Coming Soon</h3>
          <p className="text-[#d2bfa9]/70 text-sm mb-8">We are currently curating our exclusive {formattedCategory.toLowerCase()} catalog.</p>
          <Link to="/products" className="bg-[#d4af37] text-[#0a0a0a] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#eadd94] transition-colors">
            View All Products
          </Link>
        </div>
      )}

    </div>
  );
}

export default CategoryPage;