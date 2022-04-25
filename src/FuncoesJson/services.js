import usoApi from 'src/FuncoesJson/crudF'

export default function postService (){

  console.log('teste1')

  const url = 'http://localhost:3000/usuario';

  const {list, post, update, remove} = usoApi(url)

  return{

    list,
    post,
    update,
    remove

  }

}
