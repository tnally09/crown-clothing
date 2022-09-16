import ProductCard from '../product-card/product-card.component';

import { CategoryPreviewContainer, Preview, NavLink } from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
    return(
        <CategoryPreviewContainer>
            <h2>
                <NavLink to={title}>
                    {title.toUpperCase()}
                </NavLink>
            </h2>
            <Preview>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => 
                    <ProductCard key={product.id} product={product} />
                )}
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;