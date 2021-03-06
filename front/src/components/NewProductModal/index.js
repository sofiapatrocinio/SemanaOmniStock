import React, {useEffect, useContext, useState} from 'react';
import {AuthContext} from '../../store/authContext';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import './style.css'
import ProductService from '../../services/Product'
import CategoriesService from '../../services/Categories'
import NewCategoryModal from '../NewCategoryModal'

export default function NewProductModal({modalVisible, setModalVisible, getProducts}) {
    const {user} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [newCategoryModalVisible, setNewCategoryModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    useEffect(() => {
        if(user) loadCategories();
    }, [user]);

    const createProduct = async () => {
        try {
            await ProductService.createProduct(name, price, user._id, category);
            getProducts();
            setModalVisible(false);
        }catch(error){
            alert('Não foi possível criar seu produto!');
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
        }}>Adicionar produto
        </ModalHeader>
        <ModalBody>
         <input placeholder="Nome" onChange={(event) => setName(event.target.value)} />
         <input placeholder="Preço" onChange={(event) => setPrice(event.target.value)} />
         <div className="category-selector">
         <select placeholder="Categoria" onChange={(event) => setCategory(event.target.value)}>
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
         <button onClick={createProduct}>Adicionar</button>
        </ModalFooter>
      </Modal>
    )
}