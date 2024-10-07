import { type Component, createSignal, createEffect } from 'solid-js';
import { reload, useParams } from '@solidjs/router';
import Layout, { Container, Header } from '@/components/Layout';
import Search from '@/components/Search';
import WordCard from '@/components/WordCard';
import Skeleton from '@/components/Skeleton';
import StatusMsg from '@/components/StatusMsg';
import { update_word, get_word } from '@/api';

const App: Component = () => {
  const params = useParams();
  const [statusCode, setStatusCode] = createSignal<400|500|null>(null);
  const [loading, setLoading] = createSignal<boolean>(false);
  const [data, setData] = createSignal<{
    results?: Word[],
    near_words?: string[]
  }>({});

  createEffect(() => {
    const word = params.word?.trim?.();
    setLoading(true)
    word && get_word(word).then(async(data) => {
      try {

        if (!data) {
          await update_word(word).then((data) => {
            if (!data.description) setStatusCode(400);

            const info = data.description;
            setData(JSON.parse(info))
            setStatusCode(null);
          }).catch(() => {
            setStatusCode(500);
          }).finally (() => {
            setLoading(false);
          });

          return
        }

        const info = data.description;

        setData(JSON.parse(info))
        setStatusCode(null);

        window.document.body.scrollIntoView({behavior: 'smooth'})
      } catch (err) {
        setData({})
        setLoading(false);
      }
    }).finally (() => {
      setLoading(false);
    });
  })

  return (
    <Layout>
      <Header>
        <div class='max-w-screen-sm flex flex-1 m-auto sticky top-8'>
          <Search />
        </div>
      </Header>
      <Container class={statusCode() ? 'flex' : undefined}>
        {
          statusCode() ? <StatusMsg code={statusCode() as 400|500} /> :
          <div class="flex items-start gap-5 flex-wrap">
            <div class="w-full sm:flex-1 shrink-0 min-h-full">
              {
                  loading() ?
                  <Skeleton />
                  :
                  data()?.results?.map((word) => {
                    return <WordCard data={ word }/>
                  })
              }
            </div>


          {
            loading() || !data()?.near_words?.length ? null :
            <div class="shrink-0 mt-10 w-full sm:w-40 sticky top-36 text-black bg-white border border-slate-300 shadow rounded-md px-4 py-4 cursor-pointer leading-7">

              <div class="font-bold text-base mb-2">相近词汇</div>

              {
                  data()?.near_words?.map((w) => {
                    return <a href={`/word/${w}`} class="flex hover:text-red-800">{ w }</a>
                  })
                }

            </div>
          }

          </div>
        }


      </Container>

      <div class="text-center text-sm text-gray-500 p-4">{ new Date().getFullYear() <= 2024 ? 2024 : `2024 - ${new Date().getFullYear()}`}</div>
    </Layout>
  );
};

export default App;
