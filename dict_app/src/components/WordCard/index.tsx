import { type Component } from "solid-js";
import Card from '@/components/Card';
import aTags from '@/directives/ATag';

aTags;


const WordCard: Component<{
  data: Word
}> = (props) => {
  const word = props.data;
  return <Card>
    <h1 class="mb-6 text-3xl font-bold italic">
      { word.title.split('(')[0] }
      {
        word.title.split('(')[1] ? <i class="text-xl text-gray-600">{ '('+word.title.split('(')[1] }</i> : null
      }
    </h1>

    {/* <div class="divide-x-2 mb-2"></div> */}

    {
      word.descs.map((txt) => {
        const url_map:Record<string, string> = {};

        word.a_tag.forEach((w) => {
          url_map[w] = `/word/${w}`
        })

        return <p
          class="leading-relaxed text-base sm:text-xl mb-6 text-justify"
          use:aTags={{targets: word.a_tag, url_map}}
        >
        { txt }
        </p>
      })
    }

  </Card>
}


export default WordCard
