
export { }

declare module "solid-js" {
  namespace JSX {
    interface Directives {
      aTags: {
        url_map: Record<string, string>,
        targets: string[],
        style?: string
      }
    }
  }
}


declare global {

  interface Word {
    title:string,
    descs: string[],
    a_tag: string[]
  }


  interface WordInfo {
    results: Word[],
    all_link_words: string[],
    near_words: string[],
    extend_words: string[]
  }
}
