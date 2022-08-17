import styled from '@emotion/styled'

const Texto = styled.div`
    font-size: 22px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    text-align: center;
    color: #FFF;
    background-color: #B7322C;
    padding: 15px;
    border-bottom: 5px solid red
`

const Error = ({children}) => {
    return (
        <Texto>
            {children}
        </Texto>
    )
}

export default Error
