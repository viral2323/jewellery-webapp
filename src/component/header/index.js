import React, {useEffect, useState} from "react";
import {category} from "../../data/category";
import {searchCategory} from '../../data/searchCategory'
import './header.style.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark, faMagnifyingGlass, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectCategory} from "../../redux/productAction";

export default function Header(props) {
    const [openDrawer, setOpenDrawer] = useState('')
    const [small, setSmall] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false);
    const [searchBar, setSearchBar] = useState((false))
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const pixel = openDrawer == "Women" ? '101px' : openDrawer == 'Men' ? "calc(142px + 1rem)" : openDrawer == "Accessories" ? "calc(183px + 2rem)" : '-1px'

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                    if (window.innerWidth > 599) {
                        setSmall(window.pageYOffset > 109)
                    } else {
                        setSmall(window.pageYOffset > 50)
                    }
                }
            );
        }
    }, []);

    const handleDrawer = (value) => {
        setOpenDrawer(value)
    }
    const filterCategory = (item) => {
        return item.name == openDrawer
    }
    const handleSearchBar = (e) => {
        const newData = searchCategory.filter((item) => {
            if (e.target.value && item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                return item
            }
        })
        setSearchResult([...newData])
    }

    const handleAccordian = (value) => {
        if (value == openDrawer) {
            setOpenDrawer('')
        } else {
            setOpenDrawer(value)
        }
    }

    const handleRedirect = (e, category, subCategory) => {
        e.preventDefault()
        if (location.pathname == '/') {
            dispatch(selectCategory({category: category, subCategory: subCategory}))
            navigate('products')
        }else{
            dispatch(selectCategory({category: category, subCategory: subCategory}))
        }
        setSearchBar(false)
        setOpenSidebar(false)
        setOpenDrawer('')
    }

    return (
        <>
            <div className={`header__desktop ${small ? "small" : ''}`}>
                <div className="header__topbar">
                    <div className="header__row">
                        <Link to='/coming-soon' data-badge='20px' >FREE SHIPPING OVER $999</Link>
                        <Link to='/coming-soon'>24/7 FREE SUPPORT</Link>
                    </div>
                    <div className="header__row">
                        <a href="tel:888-343-3434">ENQUIRES +888-343-3434</a>
                    </div>
                </div>
                <div className="header__middlebar">
                    {/*<img src="https://cdn.shopify.com/s/files/1/0605/4785/8664/files/logo.png?v=1635404181"/>*/}
                    <h1 className='brand_name'>Jewelry</h1>
                </div>
                <div className="header__bottombar" onMouseLeave={() => handleDrawer('')}>
                    <ul>
                        <li onMouseOver={() => handleDrawer('Women')}>Women</li>
                        {/*<input type='checkbox' style={{display: 'none'}}/>*/}
                        <li onMouseOver={() => handleDrawer('Men')}>Men</li>
                        {/*<input type='checkbox' style={{display: 'none'}}/>*/}
                        <li onMouseOver={() => handleDrawer('Accessories')}>Accessories</li>
                        {/*<input type='checkbox' style={{display: 'none'}}/>*/}
                    </ul>
                    <ul>
                        <li onClick={() => setSearchBar(!searchBar)}>search</li>
                        <Link to='/coming-soon' style={{textDecoration: 'none'}}><li>wishlist</li></Link>
                        <Link to='/coming-soon' style={{textDecoration: 'none'}}><li className='header__cart' cart-item="5">cart</li></Link>
                    </ul>
                    <div className={`header__category_viewer ${openDrawer}`} onMouseLeave={() => handleDrawer('')}
                         style={openDrawer ? {visibility: "visible"} : {}}>
                        <ul>
                            {
                                category.filter((item) => filterCategory(item)).map((value) => {
                                    return value.item.map((i) => {
                                        return <li onClick={(e) => handleRedirect(e,value.name,i)}>{i}</li>
                                    })
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`header__mobile ${small ? "small" : ''}`}>
                <h1 className='brand_name'>Jewelry</h1>
                <div className='header__mobile__menus'>
                    <FontAwesomeIcon onClick={() => setOpenSidebar(!openSidebar)}  style={{fontSize: '25px', filter: 'invert(68%) sepia(68%) saturate(247%) hue-rotate(0deg) brightness(88%) contrast(91%)'}} icon={faBars}/>
                    <FontAwesomeIcon onClick={() => setSearchBar(!searchBar)}  style={{fontSize: '25px', filter: 'invert(68%) sepia(68%) saturate(247%) hue-rotate(0deg) brightness(88%) contrast(91%)'}} icon={faMagnifyingGlass}/>
                </div>
            </div>

            <div className={`header_sidebar ${openSidebar ? "collapse" : ""}`}>
                <div className='sidebar_close' onClick={() => setOpenSidebar(!openSidebar)}>
                    <FontAwesomeIcon icon={faXmark} size="xl" style={{fontSize: '25px'}}/>
                </div>
                <div className='sidebar_item'>
                    <div onClick={() => handleAccordian('Women')}>Women <FontAwesomeIcon
                        icon={openDrawer == "Women" ? faMinus : faPlus} size="lg"/></div>
                    <div onClick={() => handleAccordian('Men')}>Men <FontAwesomeIcon
                        icon={openDrawer == "Men" ? faMinus : faPlus} size="lg"/></div>
                    <div onClick={() => handleAccordian('Accessories')}>Accessories <FontAwesomeIcon
                        icon={openDrawer == "Accessories" ? faMinus : faPlus} size="lg"/></div>
                    {<ul className={`${["Men", "Women", "Accessories"].includes(openDrawer) == true ? 'active' : ''}`}
                         style={{top: pixel}}>
                        {
                            category.filter((item) => filterCategory(item)).map((value) => {
                                return value.item.map((i) => {
                                    return <li onClick={(e) => handleRedirect(e,value.name,i)}>{i}</li>
                                })
                            })
                        }
                    </ul>}
                </div>
            </div>
            <div className={`header__search ${searchBar ? "active" : ""}`}>
                <div className='header__search__wrapper'>
                    <input type='text' onChange={handleSearchBar} placeholder='Search Category/Product'/>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{filter: 'invert(68%) sepia(68%) saturate(247%) hue-rotate(0deg) brightness(88%) contrast(91%)'}}/></button>
                    {searchResult && searchResult.length > 0 && <div className='search_content'>
                        <ul>
                            {searchResult.map((item) => {
                                return <li onClick={(e) => handleRedirect(e,item.category,item.OriName)}>{item.name}</li>
                            })}
                        </ul>
                    </div>}
                </div>
                <div className='search__close'>
                    <FontAwesomeIcon onClick={() => setSearchBar(!searchBar)} icon={faXmark} size="xl"/>
                </div>
            </div>
        </>

    )
}