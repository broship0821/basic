import React, { useEffect, useState } from "react";
import useProducts from "../hooks/use-products";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked((prev) => !prev);

  return (
    <>
      {!error && loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input
            id="checkbox"
            type="checkbox"
            value={checked}
            onChange={handleChange}
          />
          <label htmlFor="checkbox">Show Only 🔥 Sale</label>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <article>
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </article>
              </li>
            ))}
          </ul>
        </>
      )}
      {error && <h1>Error!</h1>}
    </>
  );
}
