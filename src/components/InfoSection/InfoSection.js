import React from 'react'
import { Button } from '../ButtonEle'
import { InfoContainer, InfoWrap, InfoRow, Column1, TextWrap, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img } from './InfoEle'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, description, darkText, buttonLabel, img, alt, primary, dark}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrap>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrap>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to="home" 
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offest={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrap>
      </InfoContainer>
    </>
  )
}

export default InfoSection
