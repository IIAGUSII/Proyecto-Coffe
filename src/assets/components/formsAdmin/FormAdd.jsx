function FormAdd({ handleSubmit, productForm, handleImputChange }) {
  return (
    <section className="form_products ">
      <div className="formulary_prods">
        <form
          encType="multipart/form-data"
          className="form-products-admin"
          onSubmit={handleSubmit}
        >
          <div className="prods_form">
            <label className="labels_prods" htmlFor="name">
              Nombre a crear:
            </label>
            <input
              placeholder="Ejemplo: Affogato..."
              className="inputs_prods inputs_large"
              type="text"
              id="name"
              name="name"
              required
              value={productForm.name}
              onChange={handleImputChange}
            />

            <label className="labels_prods" htmlFor="picture">
              Imagen a crear:
            </label>
            <input
              placeholder="Ejemplo: https://i.pinimg.com..."
              className="inputs_prods inputs_large"
              type="text"
              id="picture"
              name="picture"
              required
              value={productForm.picture}
              onChange={handleImputChange}
            />

            <label className="labels_prods">Catalog:</label>
            <div>
              {[
                "Comida",
                "Bebida fría",
                "Bebida caliente",
                "Tazas",
                "Cafeteras",
                "Cafés molidos",
                "Combos",
                "Cápsulas",
              ].map((option) => (
                <div key={option}>
                  <input
                    type="checkbox"
                    id={option}
                    name={option}
                    checked={productForm.catalog.includes(option)}
                    onChange={handleImputChange}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>

            <label className="labels_prods" htmlFor="price">
              Precio a añadir:
            </label>
            <input
              placeholder="Ejemplo: $1900"
              className="inputs_prods inputs_large"
              type="text"
              id="price"
              name="price"
              required
              value={productForm.price}
              onChange={handleImputChange}
            />

            <label className="labels_prods" htmlFor="descript">
              Descripcion a editar:
            </label>
            <textarea
              placeholder="Una explosión de sabores..."
              className="inputs_prods"
              type="text"
              id="descript"
              name="descript"
              rows="6"
              cols="30"
              required
              value={productForm.descript}
              onChange={handleImputChange}
            />
          </div>

          <div className="button">
            <button className="btn_prod" type="submit">
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormAdd;
