import React, {useEffect, useContext, useState} from 'react';
import {AuthContext} from '../../store/authContext';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import './style.css'
import ProductService from '../../services/Product'
import CategoriesService from '../../services/Categories'
import NewCategoryModal from '../NewCategoryModal'

export default function NewProductModal({modalVisible, setModalVisible, product, getProducts}) {
    const {user} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [newCategoryModalVisible, setNewCategoryModalVisible] = useState(false);
    const [name, setName] = useState(product?.name);
    const [price, setPrice] = useState(product?.price);
    const [category, setCategory] = useState(product?.category?._id);
    useEffect(() => {
        if(user) loadCategories();
    }, [user]);

    const editProduct = async () => {
        try {
            await ProductService.editProduct(name, price, user._id, category, product._id);
            getProducts();
            setModalVisible(false);
        }catch(error){
            console.log(error);
            alert('Não foi possível editar seu produto!');
        }
    };

    async function loadCategories(){
        const response = await CategoriesService.loadCategories(user._id);
        setCategories(response);
    }

    return ( 
        <Modal isOpen={modalVisible} toggle={() => {
            setModalVisible(!modalVisible);
        }}>
        <NewCategoryModal modalVisible={newCategoryModalVisible} setModalVisible={setNewCategoryModalVisible} loadCategories={loadCategories}/>
        <ModalHeader toggle={() => {
            setModalVisible(!modalVisible);
        }}>Editar produto
        </ModalHeader>
        <ModalBody>
         <input defaultValue={product?.name} placeholder="Nome" onChange={(event) => setName(event.target.value)} />
         <input defaultValue={product?.price} placeholder="Preço" onChange={(event) => setPrice(event.target.value)} />
         <div className="category-selector">
         <select defaultValue={product?.category?._id} placeholder="Categoria" onChange={(event) => setCategory(event.target.value)}>
             <option value="">Categoria</option>
             {
                 categories.map((category) => (
                    <option value={category._id}>{category.name}</option>
                 ))
             }
             </select>
         <button onClick={() => setNewCategoryModalVisible(true)}>+</button>
         </div>
        </ModalBody>
        <ModalFooter>
         <button onClick={editProduct}>Editar</button>
        </ModalFooter>
      </Modal>
    )
}