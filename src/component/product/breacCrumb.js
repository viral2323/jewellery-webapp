import React, {useEffect, useState} from "react";

export default function BreadCrumb(props){
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')
console.log(props.filterData)

    useEffect(() => {
        if(props.filterData.length == 1 && props.filterData[0]?.category && props.filterData[0]?.subCategory){
            setCategory(props.filterData[0]?.category)
            setSubCategory(props.filterData[0]?.subCategory)
        }else{
            setCategory('All')
            setSubCategory('All')
        }
    },[props.filterData])

    return(
        <>
           <div className='breadcrumb'>
               <p className='title'>{category} <span style={{color: '#8b837d'}}>|</span> {subCategory}</p>
           </div>
        </>
    )
}