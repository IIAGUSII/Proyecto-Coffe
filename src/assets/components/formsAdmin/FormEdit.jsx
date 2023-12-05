function FormEdit({
  handleSubmitEdit = { handleSubmitEdit },
  editForm = { editForm },
  handleImputEditChange = { handleImputEditChange },
}) {
  return (
    <section className="form_products">
      <div className="formulary_prods">
        <form
          encType="multipart/form-data"
          className="form-products-admin"
          onSubmit={handleSubmitEdit}
        >
          <div className="prods_form">
            <label className="labels_prods" htmlFor="name">
              Editar nombre del producto:
            </label>
            <input
              placeholder="Ejemplo: Affogato..."
              className="inputs_prods inputs_large"
              type="text"
              id="name"
              name="name"
              value={editForm.name}
              onChange={handleImputEditChange}
            />

            <label className="labels_prods" htmlFor="picture">
              Editar imagen:
            </label>
            <input
              placeholder="Ejemplo: https://i.pinimg.com..."
              className="inputs_prods inputs_large"
              type="text"
              id="picture"
              name="picture"
              value={editForm.picture}
              onChange={handleImputEditChange}
            />

            <label className="labels_prods">Catálogo del producto:</label>
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
                    checked={editForm.catalog.includes(option)}
                    onChange={handleImputEditChange}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>

            <label className="labels_prods" htmlFor="price">
              Editar precio:
            </label>
            <input
              placeholder="Ejemplo: $1900"
              className="inputs_prods inputs_large"
              type="text"
              id="price"
              name="price"
              value={editForm.price}
              onChange={handleImputEditChange}
            />

            <label className="labels_prods" htmlFor="descript">
              Editar descripción:
            </label>
            <textarea
              placeholder="Una explosión de sabores..."
              className="inputs_prods"
              type="text"
              id="descript"
              name="descript"
              rows="6"
              cols="30"
              value={editForm.descript}
              onChange={handleImputEditChange}
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

export default FormEdit;
