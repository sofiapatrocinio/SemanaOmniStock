import React, {useState} from 'react';
import { Tooltip } from 'reactstrap';
import './style.css';
import { FaRegEdit } from 'react-icons/all';
import moment from "moment";
import EditProductModal from '../EditProductModal'


export default function ProductCard({product, getProducts}){
    console.log(product);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const [editModalVisible, setEditModalVisible] = useState(false);

    return(
        <div className="product-card">
        <EditProductModal modalVisible={editModalVisible} setModalVisible={setEditModalVisible} getProducts={getProducts} product={product} />
   <div>
    <p>{product.name}</p>
    <p>{moment(product.createdAt).format("DD/MM/YYYY")}</p>
    </div>
    <div className="product-right-info">
    <div className="product-price">
    <p>{`R$ ${product.price}`}</p>
    <p className="product-category" id="product-category">
    {product.category.name}
    </p>
     <Tooltip
 placement="bottom"
 isOpen={tooltipOpen}
 target="product-category"
 toggle={toggle}
 >
 {product.category.description}
 </Tooltip>
 </div>
 <FaRegEdit size={30} color="#444" className="edit-icon" onClick={() => setEditModalVisible(true)}/>
 </div>
 </div>
    )
}