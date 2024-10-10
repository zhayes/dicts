import { type Component } from 'solid-js';
import Card from '@/components/Card';
import AudioPlayer from '@/components/Audio';
import aTags from '@/directives/ATag';

aTags;


const Vocabular: Component<{
  item: Record<string, any>
  word?: string
  pos_len: number
  index: number
}> = ({ item, word, pos_len, index }) => {

  return <Card class="font-math">
    <div class="text-black text-base leading-8">
      <div class='flex items-baseline space-x-2'>
        <span class="text-4xl font-semibold relative  font-math">
          <i class="text-xs text-red-500 absolute -top-2 -left-2">{item.POS&&pos_len>1 ? index+1 : null }</i>
          { item.word || word }
        </span>
        <span class="text-orange-400 italic">{ item.POS }</span>
      </div>
      <div class='flex items-center gap-3  font-math'>
        <span class="mr-5">{ item.PronCodes }</span>
        {
          item.word_audio?.map((audio_src: string, i:number) => {
            return <AudioPlayer src={audio_src} color={i===0? 'red' : 'blue'} />
          })
        }
      </div>
    </div>

    <div class='mt-10  font-math'>
      {
        item?.examples?.map?.((item:any) => {
          const url_map:any = {};
          item?.a?.forEach?.(([w_1, w_2]:string[]) => {
            url_map[w_1] = `/dictionary/${w_2}`
          })

          return <div class="mb-10">
            <div class="mb-3 text-lg">
              {
                item.main_example_means ?
                <button class='px-2 py-1 leading-3 border border-black border-b-4 border-b-black bg-gray-600 text-white rounded text-lg mr-2 font-semibold'>{ item.main_example_means }</button>
                : null
              }

              <span class="text-green-500">{ item.is_countable }</span>
              <span class="text-lg font-extrabold" use:aTags={{ style: 'baseline', url_map, targets: item?.a?.map(([w_1, w_2]:string[]) => w_1)}}>{ item.definition }</span>
            </div>
            {
              item.example_list.map((item:any) => {
                return <div class="flex flex-col justify-start leading-8 mb-4">
                  <div class='flex gap-1 items-center mb-2'>
                    {
                      item.audio_src ? <AudioPlayer src={item.audio_src} color="gray" /> : null
                    }

                    <span class="font-semibold leading-6">{ item.example_main_title}</span>
                    <span class="font-semibold leading-6">{ item.content }</span>
                  </div>

                  {
                    item.exp_item?.map((exp:any) => {
                      return <div class="flex text-base items-center gap-1 mb-2">
                        {
                          exp.audio_src ? <AudioPlayer src={exp.audio_src} color="gray" />  : null
                        }

                        <div class="text-gray-600">{ exp.content }</div>
                      </div>
                    })
                  }
                  </div>

              })
            }
          </div>
        })
      }
    </div>




    {
      item.corpus_list?.length ?
      <div
          class="p-5 border-2 rounded-md text-base leading-8 bg-gray-100  font-math"
      >
        <div class="font-bold text-2xl">CORPUS</div>

        {
          item.corpus_list?.map(({ corpus_title, corpus_exas, a}:any) => {
            const url_map:any = {};
            a?.forEach?.(([w_1, w_2]:string[]) => {
              url_map[w_1] = `/dictionary/${w_2}`
            })

            return <div class='mt-6' use:aTags={{style: 'baseline', url_map, targets: a?.map(([w_1, w_2]:string[]) => w_1)}}>
              <div class="mb-3 font-semibold text-xl">{ corpus_title }</div>

              {
                corpus_exas?.map((exp:any) => {
                  return <div class='mb-3 leading-5'>{ exp }</div>
                })
              }
            </div>
          })
        }
        </div>
        :
        null
    }
    </Card>

}


export default Vocabular;
