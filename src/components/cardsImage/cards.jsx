import TheFool from './Cards-png/00-TheFool.png';
import TheMagician from './Cards-png/01-TheMagician.png';
import TheHighPriestess from './Cards-png/02-TheHighPriestess.png';
import TheEmpress from './Cards-png/03-TheEmpress.png';
import TheEmperor from './Cards-png/04-TheEmperor.png';
import TheHierophant from './Cards-png/05-TheHierophant.png';
import TheLovers from './Cards-png/06-TheLovers.png';
import TheChariot from './Cards-png/07-TheChariot.png';
import Strength from './Cards-png/08-Strength.png';
import TheHermit from './Cards-png/09-TheHermit.png';
import WheelOfFortune from './Cards-png/10-WheelOfFortune.png';
import Justice from './Cards-png/11-Justice.png';
import TheHangedMan from './Cards-png/12-TheHangedMan.png';
import Death from './Cards-png/13-Death.png';
import Temperance from './Cards-png/14-Temperance.png';
import TheDevil from './Cards-png/15-TheDevil.png';
import TheTower from './Cards-png/16-TheTower.png';
import TheStar from './Cards-png/17-TheStar.png';
import TheMoon from './Cards-png/18-TheMoon.png';
import TheSun from './Cards-png/19-TheSun.png';
import Judgement from './Cards-png/20-Judgement.png';
import TheWorld from './Cards-png/21-TheWorld.png';
import { SliderImage } from './SliderImage';




const handleDragStart = (e) => e.preventDefault();



export const cardsSlider = [
    <SliderImage key={1} src={TheFool} onDragStart={handleDragStart} role="presentation"  data-value="1"/>,
    <SliderImage key={2} src={TheMagician} onDragStart={handleDragStart} role="presentation" data-value="2"/>,
    <SliderImage key={3} src={TheHighPriestess} onDragStart={handleDragStart} role="presentation" data-value="3"/>,
    <SliderImage key={4} src={TheEmpress} onDragStart={handleDragStart} role="presentation" data-value="4"/>,
    <SliderImage key={5} src={TheEmperor} onDragStart={handleDragStart} role="presentation" data-value="5"/>,
    <SliderImage key={6} src={TheHierophant} onDragStart={handleDragStart} role="presentation" data-value="6" />,
    <SliderImage key={7} src={TheLovers} onDragStart={handleDragStart} role="presentation" data-value="7" />,
    <SliderImage key={8} src={TheChariot} onDragStart={handleDragStart} role="presentation" data-value="8" />,
    <SliderImage key={9} src={Strength} onDragStart={handleDragStart} role="presentation" data-value="9" />,
    <SliderImage key={10} src={TheHermit} onDragStart={handleDragStart} role="presentation" data-value="10" />,
    <SliderImage key={11} src={WheelOfFortune} onDragStart={handleDragStart} role="presentation" data-value="11" />,
    <SliderImage key={12} src={Justice} onDragStart={handleDragStart} role="presentation" data-value="12" />,
    <SliderImage key={13} src={TheHangedMan} onDragStart={handleDragStart} role="presentation" data-value="13" />,
    <SliderImage key={14} src={Death} onDragStart={handleDragStart} role="presentation" data-value="14" />,
    <SliderImage key={15} src={Temperance} onDragStart={handleDragStart} role="presentation" data-value="15" />,
    <SliderImage key={16} src={TheDevil} onDragStart={handleDragStart} role="presentation" data-value="16" />,
    <SliderImage key={17} src={TheTower} onDragStart={handleDragStart} role="presentation" data-value="17" />,
    <SliderImage key={18} src={TheStar} onDragStart={handleDragStart} role="presentation" data-value="18" />,
    <SliderImage key={19} src={TheMoon} onDragStart={handleDragStart} role="presentation" data-value="19" />,
    <SliderImage key={20} src={TheSun} onDragStart={handleDragStart} role="presentation" data-value="20" />,
    <SliderImage key={21} src={Judgement} onDragStart={handleDragStart} role="presentation" data-value="21" />,
    <SliderImage key={22} src={TheWorld} onDragStart={handleDragStart} role="presentation" data-value="22" />,
];