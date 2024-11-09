import React from "react";
import { useState } from "react";
import FormularyTextField from "./utils/FormTextField";
import { Product } from "../../Types/Product";
import { createProduct } from "../../services/ProductService";

const CreateProudct = () =>{
    const [name, setName] = useState("")
    const [description, setDescrip] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [category, setCategory] = useState("")

    const newProduct: Product = {
        name,
        description,
        price: parseInt(price),
        stock: parseInt(stock),
        category,
        id: 0
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        console.log(name, description, price, stock, category)
     
        const createdProduct = await createProduct(newProduct);
        console.log("Product created successfully:", createdProduct);
        setName("");
        setDescrip("");
        setPrice("");
        setStock("");
        setCategory("");

    }
    return (
        <React.Fragment>
        <h2 className="text-blue">PRODUCT CREATE FORM</h2>
        <form onSubmit={handleSubmit}>
        <FormularyTextField
                    label="Name"
                    type="text"
                    value={name}
                    onChangeform={(e) => setName(e.target.value)}
                />
                <FormularyTextField
                    label="Description"
                    type="text"
                    value={description}
                    onChangeform={(e) => setDescrip(e.target.value)}
                />
                <FormularyTextField
                    label="Price"
                    type="text"
                    value={price}
                    onChangeform={(e) => setPrice(e.target.value)}
                />
                <FormularyTextField
                    label="Stock"
                    type="text"
                    value={stock}
                    onChangeform={(e) => setStock(e.target.value)}
                />
                <FormularyTextField
                    label="Category"
                    type="text"
                    value={category}
                    onChangeform={(e) => setCategory(e.target.value)}
                />
                <button className="bg-cyan-500 hover:bg-cyan-600" type="submit">Create Product</button>
        </form>
        </React.Fragment>
    );
}

export default CreateProudct;