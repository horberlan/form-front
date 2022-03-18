import React, { useState } from 'react'
import * as S from "./styles";
import Bg from '../../img/Background-Header.png';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';


export default function Form() {

    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    const [userData, setUserData] = useState({
        react: "",
        vue: "",
        angular: "",
        quantidade: "",
        mensagem: ""

    });
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value });
    };


    // connect with firebase 
    const submitData = async (event) => {
        event.preventDefault();
        const { react, vue, angular, quantidade, mensagem } = userData;
        const res = await fetch
            ("https://teste-bem-pago-default-rtdb.firebaseio.com/usersmessages.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "POST"
                    },
                    body: JSON.stringify({
                        react,
                        vue,
                        angular,
                        quantidade,
                        mensagem
                    })
                }
            );
        if (res) {
            ModalSucesso();
        } else {
            ModalError();
        }
    };
    return (
        <>
            <S.Container>
                <form name="contact">
                    <S.Formulario>
                        <S.Header>
                            <SpanHeader pre="Formulário" text="para compra de" pos="Pacote de adesivos" />
                            <BgHeader />
                        </S.Header>
                        <S.ContainerFormulario>
                            <Title titulo="Quais adesivos:" />
                            <S.IputsBox>
                                <div className="itemFlex">
                                    <input type="checkbox"
                                        name="name"
                                        value={userData.react}
                                        onChange={postUserData}>
                                    </input>
                                    <label> React</label>
                                </div>
                                <div className="itemFlex">
                                    <input type="checkbox"
                                        name="name"
                                        value={userData.vue}
                                        onChange={postUserData}>
                                    </input>
                                    <label> Vue</label>
                                </div>
                                <div className="itemFlex">
                                    <input type="checkbox"
                                        name="name"
                                        value={userData.angular}
                                        onChange={postUserData}>
                                    </input>
                                    <label> Angular</label>
                                </div>
                            </S.IputsBox>
                            <Title titulo="Quantos adesivos de cada?" />
                            <S.ContainerSelect>
                                <S.ButtonQunat type="button" onClick={decNum}>-</S.ButtonQunat>
                                <S.InputQuant required type="text" value={num} name="email" onChange={postUserData} />
                                <S.ButtonQunat type="button" onClick={incNum}>+</S.ButtonQunat>
                            </S.ContainerSelect>
                            <Title titulo="Observações:" />
                            <S.TextArea placeholder='Algum comentário?'
                                name="mensagem"
                                value={userData.mensagem}
                                onChange={postUserData}>
                            </S.TextArea>
                        </S.ContainerFormulario>
                        <S.ContainerSubmit>
                            <S.ButtonForm type="submit" value="submit" onClick={submitData}>
                                Enviar
                            </S.ButtonForm>
                        </S.ContainerSubmit>
                    </S.Formulario>
                </form>
            </S.Container>
        </>
    )

}

// components with props
export const Title = ({ titulo }) => (
    <S.TextBold>{titulo}</S.TextBold>
)
export const BgHeader = () => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="100%" viewBox="0 0 1920.000000 714.000000"
        preserveAspectRatio="xMidYMid meet" style={{ position: "absolute", zIndex: "0", marginTop: "-2px", borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>

        <g transform="translate(0.000000,714.000000) scale(0.100000,-0.100000)"
            fill="#2e3575" stroke="none">
            <path d="M7 7133 c-4 -3 -7 -907 -7 -2008 l0 -2002 73 -33 c39 -18 324 -152
632 -298 1033 -488 1396 -650 1980 -884 1392 -558 2693 -896 4015 -1042 544
-61 963 -80 1580 -73 483 6 606 11 1015 48 1931 172 3912 792 5870 1839 1255
671 2519 1520 3778 2538 125 101 234 197 242 213 13 24 15 146 15 849 0 793
-1 820 -18 809 -14 -9 -1270 -4 -5088 20 -4504 28 -5571 32 -9575 31 -2478 0
-4509 -3 -4512 -7z"/>
        </g>
    </svg>


)
export const SpanHeader = ({ pre, text, pos }) => (
    <>
        <S.Span>{pre}</S.Span>
        <S.Span>{text} </S.Span>
        <S.Span><strong>{pos}</strong></S.Span>
    </>
)



// modais/alertas
export const ModalError = () => {
    Swal.fire({
      title: "Problemas na submissão, aguarde um momento.",
      icon: "error",
      position: "top-right",
      showConfirmButton: false,
      toast: true,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: "my-toast",
        icon: "icon-center",
        title: "left-gap",
        content: "left-gap",
      },
    });
  };
  export const ModalSucesso = () => {
    Swal.fire({
      title: "Formulário submetido",
      icon: "success",
      position: "top-right",
      showConfirmButton: false,
      toast: true,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: "my-toast",
        icon: "icon-center",
        title: "left-gap",
        content: "left-gap",
      },
    });
  };
  