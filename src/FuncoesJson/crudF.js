import { api } from 'boot/axios'

export default function usoApi (url) {

  const list = async () => {

    console.log("Teste de get bem executado")

    try{

      const { data } = await api.get(url)
      return data

      // Preciso puxar os valores de Data
      // de alguma forma, procurar solução console.log(data)


    } catch (error){

      throw new Error(error)

    }

  }

  ///////////////////////////////////////////////////////////////////////////

  const post = async (dadosJ) => {

    try{

      const { data } = await api.post(url, dadosJ)
      return data

    } catch (error) {

      throw new Error(error)

    }

  }

  ////////////////////////////////////////////////////////////////////////////////

  const update = async (dadosJ) => {

    try{

      const { data } = await api.put(`${url}/${dadosJ.id}`, dadosJ)
      return data

    } catch (error) {

      throw new Error(error)

    }

  }


  ///////////////////////////////////////////////////////////////////////////////

  const remove = async (dadosJ) => {

    try{

      const { data  } = await api.delete(`${url}/${dadosJ.id}`)
      return data

    } catch (error) {

      throw new Error(error)

    }

  }

  return {

    list,
    post,
    update,
    remove

  }

}
