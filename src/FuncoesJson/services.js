import usoApi from 'src/FuncoesJson/crudF'

export default function postService (){

  console.log('teste1')

  const url = 'https://teste-f22a1-default-rtdb.firebaseio.com/fuck.json';

  const {list, post, update, remove} = usoApi(url)

  return{

    list,
    post,
    update,
    remove

  }

}
