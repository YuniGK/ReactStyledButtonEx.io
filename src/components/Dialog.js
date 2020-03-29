import React, {useState, useEffect} from 'react';
import styled, { keyframes, css} from 'styled-components';
import Button from './Button';

const fadeIn = keyframes`
    from{opacity:0;}
    to{opacity:1;}
`;

const fadeOut = keyframes`
    from{opacity:1;}
    to{opacity:0;}
`;

const slideUp = keyframes`
    form{transform : translateY(200px)}
    to{transform : translateY(0)}
`;

const slideDown = keyframes`
    form{transform : translateY(0)}
    to{transform : translateY(200px)}
`;

const DarkBackground = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(0,0,0,.5);

    animation-duration:.25s;
    animation-timing-function:ease-out;
    animation-name:${fadeIn};
    animation-fill-mode:forwards; /* 애니메이션이 끝났을 경우 유지한다. */

    ${props => props.disappear && css`
        animation-name:${fadeOut};
    `}
`
const DialogBlock = styled.div`
    width:320px;
    padding:2rem;
    background:#fff;
    border-radius:4px;
    animation-duration:.25s;
    animation-timing-function:ease-out;
    animation-name:${slideUp};
    animation-fill-mode:forwards;

    ${props => props.disappear && css`
        animation-name:${slideDown};
    `}

    h3{
        margin:0;
        font-size:1.5rem;
    }

    p{
        font-size:1.125rem;
    }
`
const ButtonGroup = styled.div`
    margin:3rem 1rem;
    display:flex;
    justify-content:flex-end;
`

/* 상속 받은 스타일의 내용을 수정할 때 */
const ShortMarginButton = styled(Button)`
    & + & {
        margin-left : 0.25rem;
    }
`;

function Dialog({title, children, confirmText, cancelText, onConfirm, onCancel, visible}){

    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(visible);//현재 상태가, 진행중임을 감지

    useEffect(()=>{
        //visible true -> flase
        if(localVisible && !visible){
            setAnimate(true);
            setTimeout(()=> setAnimate(false), 250);
        }

        //visible 값이 변경될 때마다 동기화해준다.
        setLocalVisible(visible);

    }, [localVisible, visible])

    //if(!visible) return null;
    if(!localVisible && !animate) return null;

    return(
        <DarkBackground disappear={!visible}>
            <DialogBlock disappear={!visible}>
                <h3>{title}</h3>
                <p>{children}</p>

                <ButtonGroup>
                    {/*  
                    <Button outline color="gray">
                        {cancelText}
                    </Button>

                    기존의 스타일을 덮어쓸 경우 
                    
                    <Button outline color="gray">
                        {cancelText}
                    </Button>
                    */}
                    <ShortMarginButton outline color="gray" onClick={onCancel}>
                        {cancelText}
                    </ShortMarginButton>
                    <ShortMarginButton color="pink" onClick={onConfirm}>
                        {confirmText}
                    </ShortMarginButton>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    );
}

Dialog.defaultProps = {
    cancelText : '취소',
    confirmText : '확인'
}

export default Dialog;