import React, { useState } from "react";
import ArrowRight from "../../../icons/arrow-right.svg";
import ArrowLeft from "../../../icons/arrow-left.svg";
import Hair_1 from "./Hair_1.svg";
import Hair_2 from "./Hair_2.svg";
import Hair_3 from "./Hair_3.svg";
import Lips_1 from "./Lips_1.svg";
import Lips_2 from "./Lips_2.svg";
import Lips_3 from "./Lips_3.svg";
import Background_1 from "./Background_1.svg";
import Background_2 from "./Background_2.svg";
import Background_3 from "./Background_3.svg";
import Background_4 from "./Background_4.svg";
import Background_5 from "./Background_5.svg";
import Background_6 from "./Background_6.svg";
import Background_7 from "./Background_7.svg";
import Background_8 from "./Background_8.svg";
import Background_9 from "./Background_9.svg";
import Background_10 from "./Background_10.svg";
import TShirt_golden from './Clothes/T-shirt_golden.svg';
import TShirt_skyblue from './Clothes/T-shirt_skyblue.svg';
import TShirt_green from './Clothes/T-shirt_green.svg';
import TShirt_light from './Clothes/T-shirt_light.svg';
import TShirt_dark from './Clothes/T-shirt_dark.svg';
import TShirt_pink from './Clothes/T-shirt_pink.svg';
import TShirt_rose from './Clothes/T-shirt_rose.svg';
import TShirt_brown from './Clothes/T-shirt_brown.svg';
import Eyes_green from "./Eyes/Eyes_green.svg";
import Eyes_blue from "./Eyes/Eyes_blue.svg";
import Eyes_brown from "./Eyes/Eyes_brown.svg";
import Eyes_amber from "./Eyes/Eyes_amber.svg";
import Eyes_grey from "./Eyes/Eyes_grey.svg";
import Eyes_red from "./Eyes/Eyes_red.svg";
import Eyes_violet from "./Eyes/Eyes_violet.svg";
import Eyes_black from "./Eyes/Eyes_black.svg";
import EmptyArea from "./Empty_area.svg";
import Glasses from "./Glasses_1.svg";
import Eyebrows_ginger from './Eyebrows/Eyebrows_ginger.svg';
import Eyebrows_brown from './Eyebrows/Eyebrows_brown.svg';
import Eyebrows_black from './Eyebrows/Eyebrows_black.svg';
import Eyebrows_blond from './Eyebrows/Eyebrows_blond.svg';
import Eyebrows_grey from './Eyebrows/Eyebrows_grey.svg';
import Eyebrows_blue from './Eyebrows/Eyebrows_blue.svg';
import Eyebrows_pink from './Eyebrows/Eyebrows_pink.svg';
import Eyebrows_green from './Eyebrows/Eyebrows_green.svg';
import Skin_Tone_1 from "./Avatars-4.2.svg";
import Skin_Tone_2 from './Skin_tone_2.svg';
import Skin_Tone_3 from './Skin_tone_3.svg';
import Skin_Tone_4 from './Skin_tone_4.svg';
import Skin_Tone_5 from './Skin_tone_5.svg';
import Skin_Tone_6 from './Skin_tone_6.svg';
import Skin_Tone_7 from './Skin_tone_7.svg';
import Skin_Tone_8 from './Skin_tone_8.svg';
import Skin_Tone_9 from './Skin_tone_9.svg';
import IconButton from "../../Layout/Buttons/Button/IconButton.component";
import Container from "../../Layout/Container/Container.component";
import Hair_3_brown from './Hair_3_variations/Hair_3_brown.svg'
import Hair_3_dark from './Hair_3_variations/Hair_3_dark_brown.svg'
import Hair_3_blond from './Hair_3_variations/Hair_3_blond_2.svg'
import Hair_3_grey from './Hair_3_variations/Hair_3_grey.svg'
import Hair_3_pink from './Hair_3_variations/Hair_3_pink.svg'
import Hair_3_blue from './Hair_3_variations/Hair_3_blue.svg'
import Hair_3_green from './Hair_3_variations/Hair_3_green.svg'
import Hair_2_brown from './Hair_2_variations/Hair_2_brown.svg'
import Hair_2_dark_brown from './Hair_2_variations/Hair_2_dark_brown.svg'
import Hair_2_blond from './Hair_2_variations/Hair_2_blond.svg'
import Hair_1_brown from './Hair_1_variations/Hair_1_brown.svg'
import Hair_1_dark from './Hair_1_variations/Hair_1_dark_brown.svg'
import Hair_1_blond from './Hair_1_variations/Hair_1_blond.svg'
import Hair_1_grey from './Hair_1_variations/Hair_1_grey.svg'
import Hair_1_pink from './Hair_1_variations/Hair_1_pink.svg'
import Hair_1_blue from './Hair_1_variations/Hair_1_blue.svg'
import Hair_1_green from './Hair_1_variations/Hair_1_green.svg'
import Page from "../../Layout/Page/Page.component";
import {Link} from "react-router-dom";
import Badge from "../../Layout/Badge/Badge.component";

const AvatarGenerator = () => {
    //TODO Refactor this mess

    // initial State
    //TODO refactor to the one object
    const
        [hairCounter, setHairCounter] = useState(2),
        [eyesCounter, setEyesCounter] = useState(0),
        [eyeBrowsCounter, setEyesBrowsCounter] = useState(0),
        [glassesCounter, setGlassesCounter] = useState(1),
        [lipsCounter, setLipsCounter] = useState(1),
        [backgroundCounter, setBackgroundCounter] = useState(0),
        [clothesCounter, setClothesCounter] = useState(0),
        [skinToneCounter, setSkinToneCounter] = useState(0),
        [hairColorCounter, setHairColorCounter] = useState(0);

    //TODO use svg wrapper instead of assets import

  //    Feature Arrays
  const skinToneArray =
      [Skin_Tone_1, Skin_Tone_2, Skin_Tone_3, Skin_Tone_4, Skin_Tone_5, Skin_Tone_6, Skin_Tone_7, Skin_Tone_8, Skin_Tone_9];
  const glassesArray = [Glasses, EmptyArea];
  // Hair arrays
  const Hair_Type_1 = [Hair_1, Hair_1_dark, Hair_1_brown,Hair_1_blond, Hair_1_grey,
        Hair_1_pink, Hair_1_blue, Hair_1_green];
  //TODO Add different colorsHair_2_dark_brown.svg
  const Hair_Type_2 = [Hair_2, Hair_2_dark_brown, Hair_2_brown,Hair_2_blond,
        Hair_2,Hair_2,Hair_2,Hair_2];
  const Hair_Type_3 = [Hair_3, Hair_3_dark, Hair_3_brown,Hair_3_blond, Hair_3_grey,
        Hair_3_pink, Hair_3_blue, Hair_3_green];
    //TODO fix to return index 0 (bold hair array have only 1 element)
  const Hair_bold = [EmptyArea,EmptyArea,EmptyArea,EmptyArea,
        EmptyArea,EmptyArea,EmptyArea,EmptyArea];
  const hairArray = [Hair_Type_1, Hair_Type_2, Hair_Type_3, Hair_bold];
  // End of the Hair arrays
  const eyesArray = [Eyes_green, Eyes_blue, Eyes_grey, Eyes_violet, Eyes_brown,
        Eyes_amber, Eyes_red, Eyes_black];
  const lipsArray = [Lips_1, Lips_2, Lips_3];
  const backgroundArray = [Background_1, Background_2, Background_3, Background_4, Background_5,
        Background_6, Background_7, Background_8, Background_9, Background_10];
  const clothesArray = [TShirt_golden, TShirt_skyblue, TShirt_green, TShirt_pink,
        TShirt_rose, TShirt_light, TShirt_dark, TShirt_brown];
  const eyebrowsArray = [Eyebrows_ginger , Eyebrows_black,Eyebrows_brown, Eyebrows_blond,
        Eyebrows_grey, Eyebrows_pink, Eyebrows_blue, Eyebrows_green];

  //  Count function  | isCountUp = true => Count up, false => count down
  function count(counterName, setCounter, itemsQuantity, isCountUp) {
    if (isCountUp){
      let Counter = counterName;
      if (Counter < itemsQuantity-1) {
        Counter += 1;
      } else {
        Counter = 0;
      }
      setCounter(Counter);
    } else {
      let Counter = counterName;
      if (Counter > 0) {
        Counter -= 1;
      } else {
        Counter = itemsQuantity-1;
      }
      setCounter(Counter);
    }
  }

  //    Set Feature function chooses image to display
  function setFeature(counter, partsArray, isArrayNested = false) {
    if (isArrayNested){
        if (partsArray.indexOf(partsArray[counter]) === counter){
        return partsArray[counter][hairColorCounter]}
    }  else {
        if (partsArray.indexOf(partsArray[counter]) === counter){
            return partsArray[counter]}
    }
  }

  //Render
  return (
      <Page>
          <div className={'container'}>
          <div className={'container'}>
              <Link to='/' style={{color:'#ed2939'}}>
                  Back to the homepage
              </Link>
              <h3>Avatar generator</h3>
              <h5>Version <Badge type={'small'}>0.17</Badge></h5>
              <h6>Currently in early stage of development</h6>
          </div>
          <div className='row mt-4 mb-4' style={{marginRight:'0px', marginLeft:'0px'}}>
              <div className='col-md-6 text-center m3-5'>
              <Container style={{height:'100%'}}>
                  <div className='d-flex justify-content-center' style={{height:'100%', minHeight:'250px'}}>
                      <img
                          className='img-fluid'
                          src={setFeature(skinToneCounter, skinToneArray)}
                          style={{
                              height: "100%",
                              zIndex: 1,
                              position: "absolute"
                          }}
                          alt='Responsive'
                      />
                      <img
                          className='img-fluid'
                          src={setFeature(glassesCounter,glassesArray)}
                          style={{
                              height: "100%",
                              zIndex: 4,
                              position: "absolute"
                          }}
                          alt='Responsive'
                      />
                      <img
                          className='img-fluid'
                          src={setFeature(eyesCounter, eyesArray)}
                          style={{
                              height: "100%",
                              zIndex: 3,
                              position: "absolute"
                          }}
                          alt='Responsive'
                      />
                      <img
                          className='img-fluid'
                          src={setFeature(eyeBrowsCounter, eyebrowsArray)}
                          style={{
                              height: "100%",
                              zIndex: 3,
                              position: "absolute"
                          }}
                          alt='Responsive'
                      />
                      <img
                          className='img-fluid'
                          src={setFeature(hairCounter, hairArray, true)}
                          style={{
                              height: "100%",
                              zIndex: 5,
                              position: "absolute"
                          }}
                          alt='Responsive'
                      />
                      <img
                          className='img-fluid'
                          src={setFeature(clothesCounter, clothesArray)}
                          style={{
                              height: "100%",
                              zIndex: 2,
                              position: "absolute"
                          }}
                          alt='Responsive'
                      />
                      <img
                          className='img-fluid'
                          src={setFeature(lipsCounter, lipsArray)}
                          style={{
                              height: "100%",
                              zIndex: 2,
                              position: "absolute"
                          }}
                          alt='static'
                      />
                      <img
                          className='img-fluid'
                          src={setFeature(backgroundCounter, backgroundArray)}
                          style={{
                              height: "100%",
                              zIndex: 0,
                              position: "absolute"
                          }}
                          alt='Responsive'
                      />
                  </div>
              </Container>
          </div>
              <div className='col-md-3 mt-3 mb-3 text-center'>
            <Container>
                <div className='mb-2'>
                <p className='card-title'><span className='badge'>Change Hairstyle</span></p>
                <IconButton style={{marginRight:'0.5rem'}} onClick={() => count(hairCounter, setHairCounter, hairArray.length, false)} image={ArrowLeft}/>
                <IconButton onClick={() => count(hairCounter, setHairCounter, hairArray.length, true)} image={ArrowRight}/>
            </div>
                <div className='mb-2'>
                    <p className='card-title'><span className='badge'>Change Hair color</span></p>
                    <IconButton style={{marginRight:'0.5rem'}} onClick={() => count(hairColorCounter, setHairColorCounter,hairArray[hairCounter].length, false)} image={ArrowLeft}/>
                    <IconButton onClick={() => count(hairColorCounter, setHairColorCounter,hairArray[hairCounter].length, true)} image={ArrowRight}/>
                </div>
                <div className='mb-2'>
                    <p className='card-title'><span className='badge'>Change Eye color</span></p>
                    <IconButton style={{marginRight:'0.5rem'}} onClick={() => count(eyesCounter, setEyesCounter,eyesArray.length, false)} image={ArrowLeft}/>
                    <IconButton onClick={() => count(eyesCounter, setEyesCounter,eyesArray.length, true)} image={ArrowRight}/>
                </div>
                <div className='mb-2'>
                    <p className='card-title'><span className='badge'>Change Glasses</span></p>
                    <IconButton style={{marginRight:'0.5rem'}} onClick={() => count(glassesCounter, setGlassesCounter,glassesArray.length, false)} image={ArrowLeft}/>
                    <IconButton onClick={() => count(glassesCounter, setGlassesCounter,glassesArray.length, true)} image={ArrowRight}/>
                </div>
                <div className='mb-2'>
                    <p className='card-title'><span className='badge'>Change Eyebrows</span></p>
                    <IconButton style={{marginRight:'0.5rem'}} onClick={() => count(eyeBrowsCounter, setEyesBrowsCounter, eyebrowsArray.length, false)} image={ArrowLeft}/>
                    <IconButton onClick={() => count(eyeBrowsCounter, setEyesBrowsCounter, eyebrowsArray.length, true)} image={ArrowRight}/>
                </div>
            </Container>
          </div>
              <div className='col-md-3 mt-3 mb-3 text-center'>
            <Container>
                <div className='mb-2'>
                    <p className='card-title'><span className='badge'>Change Lips</span></p>
                    <IconButton style={{marginRight:'0.5rem'}} onClick={() => count(lipsCounter, setLipsCounter,lipsArray.length, false)} image={ArrowLeft}/>
                    <IconButton onClick={() => count(lipsCounter, setLipsCounter,lipsArray.length, true)} image={ArrowRight}/>
                </div>
                <div className='mb-2'>
                    <p className='card-title'><span className='badge'>Change Background</span></p>
                    <IconButton style={{marginRight:'0.5rem'}} onClick={() => count(backgroundCounter, setBackgroundCounter, backgroundArray.length, false)} image={ArrowLeft}/>
                    <IconButton onClick={() => count(backgroundCounter, setBackgroundCounter, backgroundArray.length, true)} image={ArrowRight}/>
                </div>
                <div className='mb-2'>
                    <p className='card-title'><span className='badge'>Change Clothes</span></p>
                    <IconButton style={{marginRight:'0.5rem'}} onClick={() => count(clothesCounter, setClothesCounter, clothesArray.length, false)} image={ArrowLeft}/>
                    <IconButton onClick={() => count(clothesCounter, setClothesCounter, clothesArray.length, true)} image={ArrowRight}/>
                </div>
                <div className='mb-2'>
                    <p className='card-title'><span className='badge'>Change Skin tone</span></p>
                    <IconButton style={{marginRight:'0.5rem'}} onClick={() => count(skinToneCounter, setSkinToneCounter, skinToneArray.length, false)} image={ArrowLeft} />
                    <IconButton onClick={() => count(skinToneCounter, setSkinToneCounter, skinToneArray.length, true)} image={ArrowRight} />
                </div>
                <div className='mb-2'>
                    <p className='card-title'><span className='badge badge-secondary'>TODO</span></p>
                    <IconButton style={{marginRight:'0.5rem'}} disabled={true} image={ArrowLeft}/>
                    <IconButton disabled={true} image={ArrowRight}/>
                </div>
            </Container>
        </div>
          </div>
          </div>
      </Page>
  );
};

export default AvatarGenerator;
