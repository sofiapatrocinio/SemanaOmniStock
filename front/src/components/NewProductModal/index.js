import React, {useEffect, useContext, useState} from 'react';
import {AuthContext} from '../../store/authContext';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import './style.css'
import CategoriesService from '../../services/Categories'
import NewCategoryModal from '../NewCategoryModal'

export default function NewProductModal({modalVisible, setModalVisible}) {
    const {user} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [newCategoryModalVisible, setNewCategoryModalVisible] = useState(false);
    useEffect(() => {
        if(user) loadCategories();
    }, [user]);

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
         <input placeholder="Nome" />
         <input placeholder="Descrição" />
         <div className="category-selector">
         <select placeholder="Categoria">
             <option>Categoria</option>
             {
                 categories.map((category) => (
                    <option>{category.name}</option>
                 ))
             }
             </select>
         <button onClick={() => setNewCategoryModalVisible(true)}>+</button>
         </div>
        </ModalBody>
        <ModalFooter>
         <button>Adicionar</button>
        </ModalFooter>
      </Modal>
    )
}