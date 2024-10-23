import { Component } from "solid-js";
import NotFound from "@/components/StatusMsg/404";
import ServerError from "@/components/StatusMsg/500";
import Logo from '@/assets/imgs/logo.png';

const StatusMsg: Component<{code:400|500}> = (props) => {
  const Comp = {
    400: <NotFound />,
    500: <ServerError />
    }[props.code]

  return <div class="flex items-center justify-center flex-col m-auto">
    { Comp }
    <img src={ Logo } class="h-40" />
  </div>
}


export default StatusMsg;
