export const validateProduct = (product) => {
    const errors = {};

    // Nombre
    if (!product.name.trim()) {
        errors.name = "El nombre es obligatorio";
    } else if (product.name.trim().length < 3) {
        errors.name = "El nombre debe tener al menos 3 caracteres";
    }

    // Precio
    if (!product.price || Number(product.price) <= 0) {
        errors.price = "El precio debe ser mayor que 0";
    }

    // Categoría
    if (!product.category) {
        errors.category = "Debes seleccionar una categoría";
    }

    // Descripción
    if (!product.description.trim()) {
        errors.description = "La descripción es obligatoria";
    } else if (product.description.trim().length < 15) {
        errors.description =
            "La descripción debe tener al menos 15 caracteres";
    }

    // Imagen
    if (!product.file) {
        errors.file = "Debes seleccionar una imagen";
    }

    return errors;
};