
// Component that displays a row for each product category (e.g., "Fruits", "Vegetables")
function ProductCategoryRow({ category }) {
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;
  
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }

// Component that displays the entire table of products
function ProductTable({ products }) {
    const rows = [];
    let lastCategory = null; // To track the last category and avoid repeated category headings

// Iterate over each product to display them, grouped by category
    products.forEach((product) => {
        // If the category of the current product is different from the last one, create a new category row
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                category={product.category}
                key={product.category} />
            );
        }
        // Add the product row to the table
        rows.push(
            <ProductRow
            product={product}
            key={product.name} />
        );
        // Update the last category
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

// Component that contains the search bar and stock filter
function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search..." /> */}
            {/* Checkbox to filter products that are in stock */}
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}

// Parent component that combines the SearchBar and ProductTable
function FilterableProductTable({ products }) {
    return (
        <div> 
            {/* Render the search bar and the product table */}
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
}

// Sample product data with categories, prices, stock status, and names
const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];
  
  // Main app component that renders the FilterableProductTable with the sample products
  export default function App() {
    return <FilterableProductTable products={PRODUCTS} />;
  }


import { useState } from 'react';

function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly} />
            <ProductTable
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly} />
        </div>
    );
}

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
    <span style={{ color: 'red'}}>
        {product.name}
    </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                category={product.category}
                key={product.category} />
            );
        }
        rows.push(
            <ProductRow
            product={product}
            key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
    return (
        <form>
            <input
            type="text"
            value={filterText} 
            placeholder="Search.."
            onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}

const PRODUCTS =[
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "1", stocked: true, name: "Peas"}
];

export default function App() {
    return <FilterableProductTable products={PRODUCTS} />;
}


function Greetings({ name }) {
    return <h1>Hello, {name}</h1>;
}

export default function App() {
    return <Greeting name="world" />
}