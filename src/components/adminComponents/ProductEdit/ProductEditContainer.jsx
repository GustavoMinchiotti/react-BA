import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ProductFormUI } from "../ProductForm/ProductFormUI";
import { validateProduct } from "../../../utils/validateProduct";
import {
  getProductById,
  updateProduct,
} from "../../../services/productsService";
import { uploadImage } from "../../../services/uploadImage";

export const ProductEditContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductById(id);

        if (!data) {
          alert("Producto no encontrado");
          navigate("/admin");
          return;
        }

        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    const validation = validateProduct({
      ...product,
      file: true,
    });

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    try {
      setSaving(true);

      let imageUrl = product.image;

      // Si eligió una imagen nueva, la subimos
      if (file) {
        imageUrl = await uploadImage(file);
      }

      await updateProduct(id, {
        name: product.name,
        description: product.description,
        category: product.category,
        price: Number(product.price),
        image: imageUrl,
      });

      navigate("/admin");
    } catch (error) {
      console.error(error);

      setErrors({
        general: "No se pudo actualizar el producto.",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Cargando producto...</p>;

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={saving}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
      editMode={true}
    />
  );
};
