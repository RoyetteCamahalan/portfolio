<template>
    <section id="works" class="bg-gray-200 px-6 py-12">
      <div class="flex items-center justify-center">
        <div class="w-full max-w-xl py-8">
          <div>
            <div class="mx-auto max-w-2xl text-center">
              <h2 class="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Recent Works!</h2>
            </div>
            <div class="mt-4">
              <div class="border-b border-gray-200">
                <nav class="-mb-px flex" aria-label="Tabs">
                  <a v-for="tab in tabs" :key="tab.name" @click="selectTab(tab.name)"
                    :class="[tab.name === state.selectedWork ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium']"
                    :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div class="w-full max-w-7xl flex items-center justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div v-for="item in state.works" :key="item.name" @click="selectWork(item)"
                class="relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <img :src="item.thumbnail" class="w-fit h-content overflow-hidden rounded"/>
                <span class="px-2 py-1 absolute bg-blue-600 top-0 left-0 text-xs text-white">{{ item.name }}</span>
              </div>
            </div>
        </div>
      </div>
    </section>
    <TransitionRoot as="template" :show="state.isModalShow">
    <Dialog class="relative z-10" @close="state.isModalShow = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-7xl sm:p-6">
              <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden" @click="state.isModalShow = false">
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="size-6" aria-hidden="true" />
                </button>
              </div>
              <div class="flex justify-center">
                <img v-if="state.selectedImage" :src="state.selectedImage" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const tabs = [
  { name: 'All', href: '#'},
  { name: 'Web', href: '#'},
  { name: 'Desktop', href: '#' },
  { name: 'Mobile', href: '#' },
]


const works = [
  { name: "Hexabyt", category: "Web", thumbnail: "/img/hexabyt.png", href: "https://hexabyt.com/" },
  { name: "DM'S Consultancy Inc.", category: "Web", thumbnail: "/img/dms.png", href: "https://dmsconsultancyinc.com/development" },
  { name: "Simple SFA - Web", category: "Web", thumbnail: "/img/sfaweb.png", href: "https://sfa.simplesoftech.com/" },
  { name: "Real Estate Management System", category: "Desktop", thumbnail: "/img/ires.png", href: "" },
  { name: "Clinic Management System", category: "Desktop", thumbnail: "/img/cms.png", href: "" },
  { name: "Laboratory Information System", category: "Desktop", thumbnail: "/img/lis.png", href: "" },
  { name: "PhilHealth EClaims", category: "Desktop", thumbnail: "/img/eclaims.png", href: "" },
  { name: "Department of Health EMR", category: "Desktop", thumbnail: "/img/doh.png", href: "" },
  { name: "Simple SFA (Branch Manager App)", category: "Mobile", thumbnail: "/img/sfadm_1.png", href: "" },
  { name: "Restaurant Ordering App", category: "Mobile", thumbnail: "/img/hg.png", href: "" },
]
const state = reactive({
  works: works,
  selectedWork: "All",
  isModalShow: false,
  selectedImage: ''
})


function selectTab(tab){
  state.selectedWork = tab
  if(tab === 'All')
    state.works = works
  else
    state.works = works.filter(work => work.category === tab)
}

function selectWork(item){
  if(item && item.href)
    window.open(item.href, '_blank');
  else if(item && item.thumbnail){
    state.isModalShow = true
    state.selectedImage = item.thumbnail
  }
}
</script>