import React, {useState} from "react";


const SoftUIGenButton = ({props, children, onClick, state=''}) => {

    let mainColor, font, darkerShadow, lighterShadow = '#000';
    let Blur, shadowLength = 0;
    //TODO might be improved

    if (typeof(props) != "undefined"){
        mainColor = props.mainColor;
        font = props.font;
        darkerShadow = props.darkerShadow;
        lighterShadow = props.lighterShadow;
        Blur = props.Blur;
        shadowLength = props.shadowLength;
    }

    const buttonStyle = {
        default:{
            width: "100%",
            backgroundColor:mainColor,
            transition: 'background-color .5s, color .5s',
            border:`1px solid ${mainColor}`,
            color:font,
            boxShadow: `${shadowLength}px ${shadowLength}px ${Blur}px 0 ${darkerShadow},
                   -${shadowLength}px -${shadowLength}px ${Blur}px 0 ${lighterShadow}`,
            borderRadius: '12px',
            padding: '.375rem .75rem',
            fontWeight:'bold'
        },
        active:{
            width: "100%",
            backgroundColor:mainColor,
            transition: 'background-color .5s, color .5s',
            border:`1px solid ${mainColor}`,
            color:font,
            boxShadow: `inset ${shadowLength}px ${shadowLength}px ${Blur}px 0 ${darkerShadow},
                   inset -${shadowLength}px -${shadowLength}px ${Blur}px 0 ${lighterShadow}`,
            borderRadius: '12px',
            padding: '.375rem .75rem',
            fontWeight:'bold'
        },
        hover:{
            width: "100%",
            border:`1px solid ${mainColor}`,
            transition: 'background-color .5s, color .5s',
            borderRadius: '12px',
            padding: '.375rem .75rem',
            backgroundColor:font,
            color:mainColor,
            fontWeight:'bold'
        }
    }

    const [buttonActive, setButtonActive] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);

    function setButtonStyle() {
        switch(state){
            case 'active':
                return buttonStyle.active
            case 'hover':
                return buttonStyle.hover
            case "default":
                return buttonStyle.default
            default:
                if (buttonActive){
                    return buttonStyle.active
                } else if (buttonHover) {
                    return buttonStyle.hover
                } else return buttonStyle.default
        }
    }

    return (
        <button
        onMouseDown={() => setButtonActive(true)}
        onMouseUp={() => setButtonActive(false)}
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
        style={setButtonStyle()}
        onClick={onClick}
        >
            {children}
        </button>)
}

export default SoftUIGenButton;