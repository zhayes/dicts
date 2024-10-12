import { Component } from "solid-js";
import NotFound from "@/components/StatusMsg/404";
import ServerError from "@/components/StatusMsg/500";


const StatusMsg: Component<{code:400|500}> = (props) => {
  const Comp = {
    400: <NotFound />,
    500: <ServerError />
    }[props.code]

  return Comp
}


export default StatusMsg;
