import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Loading from './components/Loading'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  display: flex;
  gap: 1em;
  @media (max-width: 992px) {
    display: grid;
    grid-template-comlumns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen= styled.img`
  max-width: 400px;
  width: 100%;
  height: 100%;
  margin: 50px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`
const App = () => {

  const [monedas, setMonedas] = useState({})
  const [ cotizacion, setCotizacion] = useState({})
  const [ loading, setLoading] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setLoading(true)
        const { moneda, criptomoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setCotizacion(resultado.DISPLAY[criptomoneda][moneda])
        setLoading(false)
      }
      cotizarCripto()
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen 
        src={ImagenCripto}
        alt='Imagen-criptomonedas'
      />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Formulario 
          setMonedas={setMonedas}
        />

        { loading && <Loading/>}

        {
          cotizacion.PRICE && !loading &&
            <Resultado
              cotizacion={cotizacion}
            />
        }
      </div>
    </Contenedor>
  )
}

export default App
