import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    updateDoc,
    deleteDoc,
    orderBy,
} from "firebase/firestore";

import { db } from "../firebase/config";

// Referencia a la colección
const productsRef = collection(db, "products");

/* -------------------------------------------------------------------------- */
/*                               TRAER PRODUCTOS                              */
/* -------------------------------------------------------------------------- */

export const getProducts = async () => {
    try {
        const snapshot = await getDocs(productsRef);

        const products = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        // Coffee primero, Accessories después
        products.sort((a, b) => {
            const order = {
                coffee: 0,
                accessories: 1,
            };

            return order[a.category] - order[b.category];
        });

        return products;
    } catch (error) {
        console.error("Error al traer productos:", error);
        return [];
    }
};

/* -------------------------------------------------------------------------- */
/*                            TRAER PRODUCTO POR ID                           */
/* -------------------------------------------------------------------------- */

export const getProductById = async (id) => {
    try {
        const productRef = doc(db, "products", id);

        const snapshot = await getDoc(productRef);

        if (snapshot.exists()) {
            return {
                id: snapshot.id,
                ...snapshot.data(),
            };
        }

        return null;
    } catch (error) {
        console.error("Error al traer producto:", error);
        return null;
    }
};

/* -------------------------------------------------------------------------- */
/*                            FILTRAR POR CATEGORÍA                           */
/* -------------------------------------------------------------------------- */

export const getByCategory = async (category) => {
    try {
        const q = query(
            productsRef,
            where("category", "==", category),
            orderBy("category")
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error("Error al filtrar productos:", error);
        return [];
    }
};

/* -------------------------------------------------------------------------- */
/*                              CREAR PRODUCTO                                */
/* -------------------------------------------------------------------------- */

export const createProduct = async (productData) => {
    try {
        const docRef = await addDoc(productsRef, productData);

        return docRef.id;
    } catch (error) {
        console.error("Error al crear producto:", error);
        throw error;
    }
};

/* -------------------------------------------------------------------------- */
/*                             ACTUALIZAR PRODUCTO                            */
/* -------------------------------------------------------------------------- */

export const updateProduct = async (id, productData) => {
    try {
        const productRef = doc(db, "products", id);

        await updateDoc(productRef, productData);
    } catch (error) {
        console.error("Error al actualizar producto:", error);
        throw error;
    }
};

/* -------------------------------------------------------------------------- */
/*                              ELIMINAR PRODUCTO                             */
/* -------------------------------------------------------------------------- */

export const deleteProduct = async (id) => {
    try {
        const productRef = doc(db, "products", id);

        await deleteDoc(productRef);
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        throw error;
    }
};