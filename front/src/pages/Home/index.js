import React, {useContext, useEffect, useState} from "react";
import { useHistory } from 'react-router-dom'
import { AuthContext}  from '../../store/authContext'
import ProductCard from '../../components/ProductCard'
import './style.css'
import logo from '../../assets/img/Logo-01.png'
import { HiOutlineLogout } from "react-icons/hi";
import ProductService from '../../services/Product'
import NewProductModal from '../../components/NewProductModal';


export default function Home () {
    const history = useHistory();
    const { user, isUserLogged, signOut } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [newProductModalVisible, setNewProductModalVisible] = useState(false);

    useEffect(() => {
        if(!isUserLogged){
            history.push('/');
        }
    }, [isUserLogged]);

    useEffect(() => {
        if(user)getProducts();
    }, []);
    
    async function getProducts(){
        try {
            const response = await ProductService.loadProducts(user._id);
            console.log(response);
            setProducts(response);
        } catch (error) {
            console.log(error.response);
        }
    }

    return(
        <div className="home-container">
            <NewProductModal modalVisible={newProductModalVisible}
        setModalVisible = {setNewProductModalVisible} />
            <div className="home-header"> 
                <img src={logo} alt="logo" width="150px" />
                <HiOutlineLogout className="logout-button" color="#AC1C1C" size={50} onClick={signOut} />
            </div>
            <h2>{`Bem vinda ao seu estoque, ${user?.name}!`}</h2>
            <input placeholder="Buscar um produto"/>
            <button className="add-product" onClick={() => {
                setNewProductModalVisible(true)}}>+</button>
            {products.length ? products.map(product => <ProductCard product={product} getProducts={getProducts} />)
             : ( <p>Você ainda não possui produtos em seu estoque</p>) }
        </div>
    )
}