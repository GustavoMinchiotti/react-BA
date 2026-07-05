import { useState } from "react";

export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
  editMode = false,
}) => {
  const [preview, setPreview] = useState(null);

  const imageSrc = preview || product.image;

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    onFileChange(e);

    setPreview(URL.createObjectURL(file));
  };

  return (
    <section>
      <form className="product-form" onSubmit={onSubmit}>
        <h2>{editMode ? "Editar producto" : "Agregar nuevo producto"}</h2>

        <div>
          <label>Nombre</label>

          <input
            type="text"
            name="name"
            value={product.name}
            onChange={onChange}
          />

          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Precio</label>

          <input
            type="number"
            name="price"
            value={product.price}
            onChange={onChange}
          />

          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div>
          <label>Categoría</label>

          <select name="category" value={product.category} onChange={onChange}>
            <option value="">Seleccione una categoría</option>
            <option value="coffee">Coffee</option>
            <option value="accessories">Accessories</option>
          </select>

          {errors.category && <p className="error">{errors.category}</p>}
        </div>

        <div>
          <label>Descripción</label>

          <textarea
            name="description"
            value={product.description}
            onChange={onChange}
          />

          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div>
          <label>{editMode ? "Imagen (opcional)" : "Imagen"}</label>

          {imageSrc && (
            <img src={imageSrc} alt={product.name} className="image-preview" />
          )}

          <input type="file" accept="image/*" onChange={handleImageChange} />

          {errors.file && <p className="error">{errors.file}</p>}
        </div>

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Guardando..." : editMode ? "Guardar cambios" : "Guardar"}
        </button>

        {errors.general && <p className="error">{errors.general}</p>}
      </form>
    </section>
  );
};
