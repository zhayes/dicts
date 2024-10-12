import { alovaInstance } from '@/utils/request';


export const search_word = (word:string) => {
  return alovaInstance.Get<Response>(`/api/search/${word}`).then(res=>res.clone().json())
}


export const get_word = (word:string) => {
  return alovaInstance.Get<Response>(`/api/word/${word}`).then((res) => res.json())
}


export const update_word = (word:string) => {
  return alovaInstance.Post<Response>(`/api/update/${word}`).then(res=>res.clone().json())
}



export const get_vocabulary = (word:string) => {
  return alovaInstance.Get<Response>(`/api/dictionary/${word}`).then((res) => res.json())
}

export const update_vocabulary = (word:string) => {
  return alovaInstance.Post<Response>(`/api/update/dictionary/${word}`).then((res) => res.json())
}


export const search_vocabulary = (word:string) => {
  return alovaInstance.Post<Response>(`/api/dictionary/search/${word}`).then((res) => res.json())
}



export const translate = (word:string)=>{
  return alovaInstance.Post<Response>(`/api/translate/${word}`).then((res) => res.json())
}