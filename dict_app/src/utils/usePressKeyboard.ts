
export enum KEYBOARD {
  "ENTER"= 13,
  "UP"=38,
  "DOWN"=40
}


export default (key_codes:KEYBOARD[], cb: (code_val:KEYBOARD)=>void) => {

  const listener = (e:KeyboardEvent) => {
    const target = e.target as HTMLInputElement;
    const code = e.which || e.keyCode;

    if (key_codes.includes(code)) {
      cb && cb(code);
    }
  }

  return [
    () => {
      window.addEventListener("keydown", listener)
    },
    () => {
      window.removeEventListener("keydown", listener)
    }
  ]
}
