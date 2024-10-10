import Slider from './StyledSlider';
import { useState, useId, FC } from 'react';
import { ColorType } from '../types';
import Style from './ColorSliders.module.css';

type ColorSlidersProps = {
    defaultColor: ColorType;
    changeColor: (color: ColorType) => void;
}

const ColorSliders:FC<ColorSlidersProps> = ({defaultColor, changeColor}) => { 
    const [colorR, setColorR] = useState(defaultColor.R);
    const [colorG, setColorG] = useState(defaultColor.G);
    const [colorB, setColorB] = useState(defaultColor.B);
    const idR = useId();
    const idG = useId();
    const idB = useId();

    return (
        <div className={Style.colors}>
            <label htmlFor={idR} className={Style.colors__label}>red: </label>
            <Slider
                min={0}
                max={255}
                id={idR}
                defaultValue={defaultColor.R}
                onChange={(e) => setColorR(parseInt(e.currentTarget.value))}
                backgroundColor={`rgb(${colorR}, ${colorG}, ${colorB})`}
                thumbColor={`rgb(${colorR}, 0, 0)`}
            />
            
            <label htmlFor={idG} className={Style.colors__label}>green: </label>
            <Slider
                min={0}
                max={255}
                id={idG}
                defaultValue={defaultColor.G}
                onChange={(e) => setColorG(parseInt(e.currentTarget.value))}
                backgroundColor={`rgb(${colorR}, ${colorG}, ${colorB})`}
                thumbColor={`rgb(0, ${colorG}, 0)`}
            />

            <label htmlFor={idB} className={Style.colors__label}>blue: </label>
            <Slider
                min={0}
                max={255}
                id={idB}
                defaultValue={defaultColor.B}
                onChange={(e) => setColorB(parseInt(e.currentTarget.value))}
                backgroundColor={`rgb(${colorR}, ${colorG}, ${colorB})`}
                thumbColor={`rgb(0, 0, ${colorB})`}
            />

            <div className={Style.colors__button}>
                <button onClick={() => location.reload()}>reset page</button>
                <button onClick={() => changeColor({R: colorR, G: colorG, B: colorB})}>change color</button>
            </div>
        </div>
    );
}

export default ColorSliders;