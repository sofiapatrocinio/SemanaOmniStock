import React, {useEffect, useContext, useState} from 'react';
import {AuthContext} from '../../store/authContext';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import './style.css'
import CategoriesService from '../../services/Categories'


export default function NewProductModal({modalVisible, setModalVisible, loadCategories,}) {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const createNewCategory = async () => {
        try{
            console.log(name, description, user._id);
            await CategoriesService.createCategory(name, description, user._id);
            loadCategories();
            setModalVisible(false);
        }catch(error) {
            alert('Não foi possível criar a categoria');
        }
    } 
    
    return ( 
        <Modal isOpen={modalVisible} toggle={() => {
            setModalVisible(!modalVisible);
        }}>
        <ModalHeader toggle={() => {
            setModalVisible(!modalVisible);
        }}>Adicionar nova categoria
        </ModalHeader>
        <ModalBody>
         <input onChange={(event) => setName(event.target.value)} placeholder="Nome" />
         <input onChange={(event) => setDescription(event.target.value)} placeholder="Descrição" />
        </ModalBody>
        <ModalFooter>
         <button onClick={createNewCategory}>Adicionar</button>
        </ModalFooter>
      </Modal>
    )
}