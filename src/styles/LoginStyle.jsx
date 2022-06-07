import styled from 'styled-components'

export const LoginContainer =  styled.div`
        margin: 0 auto;
        padding: 2% 0;
        width: 100%;
        height: 100vh;
        background-color: gray;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        @media (min-width: 1024px){
            max-width: 960px
         }
        @media (min-width: 1216px){
            max-width: 1152px
        }
        @media (min-width: 1408px){
            max-width: 1244px
        }
        @media (max-width: 482px){
            flex-direction: column;
            justify-content: space-evenly;
            height: 94vh;
            padding: 0;
        }
    `

export const LoginDiv = styled.div`
    margin: 1%;
    width: 45%;
    height: 45%;
    background-color: white;
    margin: auto;
    border-radius: 2%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    padding: 3%;
    @media (max-width: 481px){
        background-color: blue;
        width: 95%;
        height: 48%;
        margin: 0 1%;
    }
`

// export const Logo = styled.div`
//     display:flex;
//     align-items:center;
//     a{
//         font-size:1.8rem;
//         font-weight:800;
//         color: ${props=> props.theme.text}
//     }
//     span{
//         background-color:red;
//         border-radius:100%;
//         padding: 0.2rem 0rem;
//         font-size:0.8rem;
//         font-weight:800;
//         cursor: pointer;
//         color: ${props=> props.theme.text}
//     }
// `
