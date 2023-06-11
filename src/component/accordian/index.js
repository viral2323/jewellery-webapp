import React from "react";
import './accordian.style.scss'
import {Link} from "react-router-dom";

export default function Accordian(props) {
    const handleClickLinkDrawer = (id) => {
        const ele = document.getElementById(id)
        const aElement = document.querySelector(`#${id} .footer_item_title_small`);
        if (aElement.ariaExpanded != "false") {
            aElement.setAttribute('aria-expanded', 'false')
        } else {
            aElement.setAttribute('aria-expanded', 'true')
        }
        ele.classList.toggle('active')
    }

    const storeFilterValue = (category, subCategory) => {
        props.handleFilter(category, subCategory)
    }
    const checkIsSelected = (category, subCategory) => {
       const i =  props.filterData.some((item) => {
            return item.category == category && item.subCategory == subCategory;
        })
        return i;
    }
    return (<div className={`footer__container ${props.isFilter ? 'filter_container' : ""}`}>
        {props.isFilter && <p className='filter_text'>Product Filter...</p>}
            <ul className={`footer_list ${props.isFilter ? 'filter_list' : ''}`}>
                {props.data.map((item) => {
                    return (<li className={`footer_listItem ${props.isFilter ? 'filter_listTem' : ""}`}>
                            <div className='footer_contain' id={item.id}>
                                <h2 className='footer_item_title'>{item.title}</h2>
                                <a className='footer_item_title_small' onClick={() => handleClickLinkDrawer(item.id)}
                                   aria-expanded='false'>
                                    <span className='title'>{item.title}</span>
                                    <i className='icon'/>
                                </a>
                                <ul className={`list_item ${props.isFilter ? 'filter_list_item' : ''}`}>
                                    {item.items.map((childItem) => {
                                        return (<li className='item'>
                                            {!props.isFilter && <Link className='item_link' to={childItem.url}>{childItem.key}</Link>}
                                            {props.isFilter && <span className='filter_item'>
                                                <input checked={checkIsSelected(item.title, childItem.value)} className='filter_checkbox' type='checkbox' onClick={() => storeFilterValue(item.title, childItem.value)}/>
                                                <p className='filter_item'>{childItem.value}</p>
                                            </span>}
                                            </li>)
                                    })}
                                </ul>
                            </div>
                        </li>)
                })}
            </ul>
        </div>)
}