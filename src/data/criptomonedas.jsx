import { useState, useEffect } from "react"

const criptomonedas = () => {

    const [ criptos, setCriptos] = useState([])
    
    useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD'
            
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
    
            const arrayCrytos = resultado.Data.map( cripto => {
                
                const objeto = {
                    id : cripto.CoinInfo.Name,
                    name : cripto.CoinInfo.FullName
                }
                return objeto
            })
            setCriptos(arrayCrytos)
        }
        consultarApi();
    }, [])
    return [ criptos ]
}

export default criptomonedas