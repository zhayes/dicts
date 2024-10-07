import { type Component, createSignal, createEffect } from "solid-js";
import { useParams, useNavigate } from '@solidjs/router'
import Dropdown from "@/components/Dropdown";
import { search_word, search_vocabulary } from '@/api';
import { debounce } from '@/utils/radash';
import usePressKeyboard, { KEYBOARD } from "@/utils/usePressKeyboard";

const search_classnames = `
  rounded-xl
  pr-14
  py-4
  px-5
  flex-1
  h-13
  bg-transparent
  text-xl
  font-mono
  font-medium
  outline-none
  hover:outline
  outline-offset-4
  focus:outline-4
  hover:outline-4
  hover:outline-red-600
  focus:outline-red-600
  focus:outline-offset-8
  transition-all
  focus:bg-white
`

const Search: Component<any> = () => {
  const [isFocus, setFocus] = createSignal(false);
  const [word_options, set_word_options] = createSignal<{name?:string, value?:string}[]>([]);
  const [word, setWord] = createSignal('');
  const params = useParams();
  const navigator = useNavigate();
  let doropdownComponentRef:any = null;
  let selected_word_index = -1;
  let inputRef: any = null;

  const setSelectionRange = () => {
    setTimeout(() => {
      const length = inputRef.value.length;
      inputRef.setSelectionRange(length, length);
    }, 0)
  }

  const [setListener, removeListener] = usePressKeyboard([KEYBOARD.UP, KEYBOARD.DOWN], (code) => {
    if (!isFocus()) return;

    if (code === KEYBOARD.UP) {
      selected_word_index--;
      const { name } = doropdownComponentRef.selectedPreItem() || {};
      name && setWord(name);
      setSelectionRange();
    }

    if (code === KEYBOARD.DOWN) {
      selected_word_index++;
      const { name } = doropdownComponentRef.selectedNextItem() || {};
      name && setWord(name);
      setSelectionRange();
    }
  });

  //搜索下拉
  const searchHandle = (v:string) => {
    if (!v.trim()) return;
    const fetch_data = window.location.pathname.split("/")[1] === "dictionary" ? search_vocabulary : search_word;

    fetch_data(v.trim()).then(({ data }) => {
      const remoate_names = data.map((item: any) => item.name);
      const index = remoate_names.indexOf(v);
      if (index != -1) {
        const item = data.splice(index, 1)[0];
        set_word_options([item].concat(data));
      } else {
        set_word_options(word_options().concat(data))
      }
    })
  }

  //输入延迟搜索
  const lazySearch = debounce({delay: 500}, (v:string) => {
    searchHandle(v)
  })

  const targetInput = (target?:HTMLInputElement) => {
    setWord(target!.value);
    const val = word()?.trim?.();
    set_word_options([{ name: val, value: val, type: 'manual'}].filter(({ name }) => !!name));
    val && lazySearch(val);
  }

  createEffect(() => {
    const word = decodeURIComponent(params.word?.trim?.() || '');
    setWord(word);
  })

  createEffect(() => {
    removeListener();

    if (isFocus()) {
      setListener();
    }
  })

  return <Dropdown visible={isFocus()} options={word_options()} ref={doropdownComponentRef}>
    <div class="flex items-center flex-1 rounded-xl border-2 border-gray-200 bg-gray-200 hover:bg-white relative">
      <input
        role="search"
        class={search_classnames}
        placeholder={isFocus() ? '搜索' : 'Search'}
        value={word()}
        ref={inputRef}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => {
          setTimeout(() => {
            setFocus(false)
          }, 100)
        }}
        onInput={(event: InputEvent) => {
          targetInput(event.target as HTMLInputElement)
        }}
        onKeyPress={(e) => {
          const target = e.target as HTMLInputElement

          if ((e.which || e.keyCode) === 13) {
            const value = target.value?.trim?.();
            const is_dict = location.pathname.split("/")[1]
            navigator(`${is_dict==='dictionary'? '/dictionary/' : '/word/'}${encodeURIComponent(value)}`)

            inputRef?.blur?.();
          }
        }}
      />

      <svg
        onClick={() => {
          console.log(word())
          word().trim() && searchHandle(word().trim())
        }}
        class="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6 absolute right-5 font-bold">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </div>
  </Dropdown>
}


export default Search;
