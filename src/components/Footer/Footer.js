import React from 'react';
import { animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrap, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterEle';
import { SocialMedia, SocialMediaWrap, SocialLogo, SocialIconLink, SocialIcons, CopyRight } from './FooterEle';


const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrap>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signin">How it Works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrap>
          <FooterLinksWrap>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrap>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>DOLLAR</SocialLogo>
            <CopyRight>Dollar © {new Date().getFullYear()} All rights reserved.</CopyRight>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
            
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
            
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
