import { type Component, createSignal, createEffect, ComponentProps, type JSX } from 'solid-js';
import { reload, useParams } from '@solidjs/router';
import { Container, Header } from '@/components/Layout';
import aTags from '@/directives/ATag';
import { get_vocabulary, update_vocabulary } from '@/api';
import Vocabular from '@/components/VocabularyCard';
import Search from '@/components/Search';
import StatusMsg from '@/components/StatusMsg';
import Skeleton from '@/components/Skeleton';

aTags;


export default (props: ComponentProps<any>):JSX.Element => {
  const [dict, setDict] = createSignal<Record<string, any>>({});
  const [loading, setLoading] = createSignal<Boolean>(true);
  const [statusCode, setStatusCode] = createSignal<400|500|null>(null);
  let searchRef;

  const update_handle = async(word:string) => {
    return await update_vocabulary(word.trim().split(" ").join("-")).then((res) => {
      const data = res.data;
      const word = res.word;

      if (!data) {
        setDict({})
        setStatusCode(400)
        return;
      }
      const dict = JSON.parse(data);

      dict.word = word;
      searchRef!.setValue(word);
      setDict(dict)
      setStatusCode(null)
    }).catch(() => {
      setDict({})
      setStatusCode(500)
    })
  }

  createEffect(async() => {
    const params = useParams();
    const word = decodeURIComponent(params.word || '')

    if (!word?.trim?.()) return;
    setLoading(true)
    const { data } = await get_vocabulary(word.trim().split(" ").join("-")).catch((e) => { setStatusCode(500); setLoading(false)});

    if (!data?.data) {
      await update_handle(word).finally(() => { setLoading(false) })
      return;
    };

    const dict = JSON.parse(data.data)

    if (Array.isArray((dict))) {
      setDict({
        "word_family": [],
        "dicts": dict,
        word
      })
    } else {
      dict.word = word;
      setDict(dict)
    }
    setStatusCode(null)
    setLoading(false)
  })


  return <>
    <div class="p-6 bg sticky top-0 bg-red-900 z-10 shadow-lg">
      <div class='max-w-screen-sm flex flex-1 m-auto'>
        <Search ref={searchRef} />
      </div>
    </div>
    <Container>

      {
        loading() ? <Skeleton /> : dict()?.dicts?.map?.((item:any, i:number) => {
          const pos_len = dict()?.dicts.map((item:any) => item.POS).filter((item:string) => !!item).length;
          return <Vocabular item={item} word={dict().word} pos_len={pos_len} index={i} />
        })
      }

      {
        statusCode() && !loading() ? <div class="h-96 flex items-center justify-center">
          <StatusMsg code={statusCode()!}/>
        </div> : null
      }

    </Container>
  </>
}
