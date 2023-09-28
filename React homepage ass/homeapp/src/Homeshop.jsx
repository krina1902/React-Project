import React, { useState } from 'react';
import logo from './logo.png';
import slideimg from './slideimg.png'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBInputGroup, MDBInput,
  MDBBadge, MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas,faHeart, faCodeCompare, faUser } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'





export default function Homeshop() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
     <MDBContainer breakpoint="xl">
    <MDBNavbar expand='lg' light bgColor='light' >
      <MDBContainer fluid >
        <MDBNavbarBrand href='#'><img src={logo} className='logo'></img></MDBNavbarBrand>
         

                <MDBInputGroup className='search'>
            <MDBInput label='Search'  />
            <MDBBtn rippleColor='dark'>
                <MDBIcon icon='search' />
            </MDBBtn>
            </MDBInputGroup>

            <MDBDropdown group className='shadow-0'>
        <MDBDropdownToggle color='dark'>Location</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Surat</MDBDropdownItem>
          <MDBDropdownItem link>Ahemdabad</MDBDropdownItem>
          <MDBDropdownItem link>Rajkot</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

      
        <MDBNavbarNav className='d-flex flex-row icon' >
          <MDBNavbarItem className='me-3 me-lg-0'>
            <MDBNavbarLink href='#'>
              <MDBIcon fas icon='shopping-cart' size='l' />
              <MDBBadge color='danger' notification pill>1</MDBBadge> Cart
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem className='me-3 me-lg-0'>
            <MDBNavbarLink href='#'>
            <FontAwesomeIcon icon={faHeart}/>   
            <MDBBadge color='danger' notification pill>1</MDBBadge>  Wishlist
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem className='me-3 me-lg-0'>
            <MDBNavbarLink href='#'>
            <FontAwesomeIcon icon={faCodeCompare}/> Compare
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem className='me-3 me-lg-0'>
            <MDBNavbarLink href='#'>
            <FontAwesomeIcon icon={faUser} /> User
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
      </MDBNavbar>
      {/*------------------------------------------------------  */}
      <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block stext'
        itemId={1}
        src={slideimg}
        alt='...'
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'>
      </MDBCarouselItem>

    </MDBCarousel>
    </MDBContainer>

    </>
  );
}