import { Component } from "solid-js";
import Card from "@/components/Card";


const Skeleton: Component = () => {
  return <Card>
    <div class="animate-pulse flex space-x-4">
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-700 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
          </div>
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>


        <div class="space-y-3">
          <div class="h-2 bg-slate-700 rounded"></div>
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
        </div>


        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
          </div>
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>


        <div class="space-y-3">
          <div class="h-2 bg-slate-700 rounded"></div>
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
        </div>

      </div>
    </div>
  </Card>
}


export default Skeleton
