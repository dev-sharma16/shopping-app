import React from "react";

const ProductCard = ({
    imageUrl = "https://via.placeholder.com/300x200?text=Product+Image",
    title = "Product Title",
    price = 99.99,
    category = "Category",
    onClick,
    onClickCart,
}) => {
    return (
        <div className="max-w-sm bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"> 
          {/* Image Container */}
            <div className="relative overflow-hidden"  onClick={onClick}>
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {category}
                </span>
                </div>
            </div>

          {/* Content */}
            <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {title}
            </h3>

            <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">
                    ₹{typeof price === "number" ? price.toFixed(2) : price}
                </span>

                <button
                    onClick={onClickCart}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 hover:shadow-md"
                >
                    Add to Cart
                </button>
            </div>
            </div>
        </div>
    );
};

export default ProductCard