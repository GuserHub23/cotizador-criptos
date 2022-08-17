import styled from "@emotion/styled"

const ContainerResultado = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: start;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 900;
    }
`
const Resultado = ({cotizacion}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion
    return (
        <ContainerResultado>
            <Imagen 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt='imagen cripto' 
            />
            <div>
                <Texto>
                    Ultima actualización : <span>{LASTUPDATE}</span>
                </Texto>
                <Precio>
                    Precio actual : <span>{PRICE}</span>
                </Precio>
                <Texto>
                    Precio más ALTO del día: <span>{HIGHDAY}</span>
                </Texto>
                <Texto>
                    Precio más BAJO del día: <span>{LOWDAY}</span>
                </Texto>
                <Texto>
                    Validación últimas 24 horas : <span>{CHANGEPCT24HOUR}</span>
                </Texto>
            </div>
        </ContainerResultado>
    )
}

export default Resultado
