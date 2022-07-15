import { dataEntry } from '../types'
import data from '../services/data.json'
import jwt from 'jsonwebtoken'

const token: string = jwt.sign(
  { token: 'tokenGenerado' },
  'secretKey'
)
/* console.log(`mi token es: ${token}`) */

const allData: dataEntry[] = data

const getAllData = async (req: any, res: any): Promise<any> => {
  try {
    const authorization = await req.get('Authorization')
    if (authorization == null || authorization !== token) {
      res.status(400).json({ message: 'Necesita autorización para acceder a la API' })
    }

    const id = req.params.id
    const selectedPerson = allData.find(element => element.numserie === +id)
    if (selectedPerson == null) {
      res.status(404).json({ message: 'Los datos solicitados no existen' })
    } else if (selectedPerson.tipo_dispositivo === 3) {
      res.status(200).json({ abuelo: selectedPerson })
    } else if (selectedPerson.tipo_dispositivo === 2) {
      const infoAbuelo = allData.find(element => element.numserie === selectedPerson.id_abuelo)
      res.status(200).json({
        abuelo: {
          infoDelAbuelo: infoAbuelo,
          padre: selectedPerson
        }
      })
    } else {
      const infoPadre = allData.find(element => element.numserie === selectedPerson.id_padre)
      const infoAbuelo = allData.find(element => element.numserie === infoPadre?.id_abuelo)
      res.status(200).json({
        abuelo: {
          infoDelAbuelo: infoAbuelo,
          padre: {
            infoDelPadre: infoPadre,
            hijo: {
              infoDelHijo: selectedPerson
            }
          }
        }
      })
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
export default getAllData
