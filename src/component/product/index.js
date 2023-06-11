import React, {useEffect, useState} from "react";
import './product.style.scss'
import ProductCard from "./productCard";
import {product} from "./data";
import gridIcon from '../../assets/menu.png'
import listIcon from '../../assets/list.png'
import Accordian from "../accordian";
import {productData} from './productData'
import {useSelector} from "react-redux";
import BreadCrumb from "./breacCrumb";

export default function Product() {
    const [isGrid, setIsGrid] = useState(true)
    const [filterData, setFilterData] = useState([])
    const [filterCategory, setFilterCategory] = useState([])
    const selectedCategory = useSelector((state) => state)
    const filter = 'invert(67%) sepia(32%) saturate(509%) hue-rotate(0deg) brightness(97%) contrast(88%)'
    const changeProductLayout = (key) => {
        if(key == 'grid'){
            setIsGrid(true)
        }else{
            setIsGrid(false)
        }
    }

    useEffect(() => {
        handleFilterData()
    }, [filterCategory])

    useEffect(() => {
        handleStoreFilterItem(selectedCategory?.category, selectedCategory?.subCategory)
    },[selectedCategory])

    const handleFilterData = () => {
        const data = []
        const filterdData = product.filter((item) => {
            filterCategory.filter((filterItem) => {
                if(filterItem.category == item.productCategory && filterItem.subCategory == item.productSubCategory){
                    data.push(item)
                    // return item;
                }
            })
        })
        setFilterData([...data])
    }

    const handleStoreFilterItem = (category,subCategory) => {
        const index = filterCategory.findIndex((item) => {
            return item.category === category && item.subCategory === subCategory;
        });

        if (index !== -1) {
            const filterData = filterCategory.filter((item) => {
                if(item.category == category){
                    if(item.subCategory !== subCategory){
                        return item;
                    }
                }else{
                    return item;
                }
            })
            setFilterCategory([...filterData])
        } else {
            // Entry doesn't exist, so add it
            if(!category) return
            setFilterCategory([...filterCategory, {category,subCategory}])
        }
    }
console.log('filterc', filterCategory.length, 'filterd', filterData)
    return (
        <>
            <BreadCrumb filterData={filterCategory}/>
            <div className="product_wrapper">
                <div className='product_filter_sidebar'>
                    <Accordian data={productData} filterData={filterCategory} isFilter={true} handleFilter={handleStoreFilterItem}/>
                </div>
                <div className='product_viewer_wrapper' >
                    <div className='grid_section'>
                        <button className='icon' onClick={() => changeProductLayout('grid')}><img className='change_layout' style={isGrid ? {filter: filter} : {}} src={gridIcon}/></button>
                        <button className='icon' onClick={() => changeProductLayout('list')}><img className='change_layout' style={!isGrid ? {filter: filter} : {}} src={listIcon}/></button>
                    </div>
                    {(filterCategory.length ==  0 ? true : filterData.length > 0 ? true : false) && <div className={`product_viewer ${isGrid ? 'product_grid' : ''}`}>
                        {(filterData.length > 0 ? filterData : product).map((item) => {
                            return (
                                <ProductCard isGrid={isGrid} item={item}/>
                            )
                        })}
                    </div>}
                    {filterCategory.length > 0 && filterData.length == 0 && <div style={{marginTop: '100px', fontSize: '25px'}}>Ohh! There is no item found based on your filter. Try out other filter</div>}
                </div>
            </div>
        </>
    )
}