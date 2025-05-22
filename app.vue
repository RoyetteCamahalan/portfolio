<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-center p-6 lg:px-8 gap-6" aria-label="Global">
        <div class="flex lg:hidden flex-1 justify-end">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex gap-10">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-lgtext-gray-900">{{ item.name
            }}</a>
        </div>
        <div class="hidden lg:flex">
          <a href="#"
            class="rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Download
            CV</a>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-end">
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-normal/7 font-semibold text-gray-900 hover:bg-gray-50">{{
                    item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#"
                  class="rounded-full bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Download
                  CV</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <section class="flex relative items-center justify-center">
      <div class="w-full max-w-7xl flex justify-center">
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 mx-8">
          <div class="self-center p-2">
            <div>
              <h1 class="text-sm text-blue-400">
                Hey There 👋 I am
              </h1>
              <span class="text-gray-900 text-2xl/8 font-semibold"> Royette Camahalan </span>
              <h1 class="text-lg text-gray-500 font-semibold">
                Software Developer
              </h1>
              <p class="text-gray-500 mt-3 flex items-center gap-2">
                .Net | Maui | C# | VB | PHP | Laravel | Vue | Nuxt
              </p>
              <div class="flex gap-2 my-4">
                <a href="#"
                  class="rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                  Download CV
                </a>
                <a href="#"
                  class="rounded-full bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div class="h-screen flex items-center justify-center">
            <img class="w-md bg-transparent rounded-lg" src="/img/profile_3.png" />
          </div>
        </div>
      </div>
      <div class="">
        <span class="absolute right-0 bottom-0">
          <svg width="350" height="375" viewBox="0 0 375 490" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="356.5" cy="356.5" r="356.5" fill="url(#paint0_linear_6:121)"></circle>
            <defs>
              <linearGradient id="paint0_linear_6:121" x1="356.5" y1="0" x2="356.5" y2="713"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7"></stop>
                <stop offset="1" stop-color="#1E3BB3"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span class="absolute top-8 left-0">
          <svg width="48" height="95" viewBox="0 0 48 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0.5" cy="47.5" r="47.5" fill="url(#paint0_radial_6:121)"></circle>
            <defs>
              <radialGradient id="paint0_radial_6:121" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                gradientTransform="translate(0.5) rotate(90) scale(95)">
                <stop stop-color="white"></stop>
                <stop offset="0.569" stop-color="#F0F4FD"></stop>
                <stop offset="0.993" stop-color="#D9E0F0"></stop>
              </radialGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
    <section class="bg-gray-100 flex items-center justify-center">
      <div class="w-full max-w-7xl py-8">
        <div class="flex">
          <MapPinIcon class="w-10 h-10 text-blue-600"></MapPinIcon>
          <h4 class="text-blue-600 text-2xl lg:text-[32px] font-bold font-Syne mb-6">Based in Philippines</h4>
        </div>
        <p class="paragraph mb-7">
          Experienced software developer with dynamic skills to adjust several development environment. Strong
          background
          in project planning to deployment up to project maintenance and support.</p>

        <div class="mt-6 border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <div class="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
              <dt class="text-sm/6 font-medium text-gray-900">Full name</dt>
              <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Royette M. Camahalan</dd>
            </div>
            <div class="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
              <dt class="text-sm/6 font-medium text-gray-900">Nationality</dt>
              <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Filipino</dd>
            </div>
            <div class="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
              <dt class="text-sm/6 font-medium text-gray-900">Email address</dt>
              <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">royette.camahalan09@gmail.com</dd>
            </div>
            <div class="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
              <dt class="text-sm/6 font-medium text-gray-900">Experience</dt>
              <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">9+ years</dd>
            </div>
          </dl>
        </div>

      </div>
    </section>

    <section class="bg-gray-100 flex items-center justify-center">
      <div class="w-full max-w-7xl py-8">
        <div>
          <div class="grid grid-cols-1 sm:hidden">
            <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
            <select aria-label="Select a tab"
              class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
              <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
            </select>
            <ChevronDownIcon
              class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
              aria-hidden="true" />
          </div>
          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav class="-mb-px flex" aria-label="Tabs">
                <a v-for="tab in tabs" :key="tab.name" :href="tab.href"
                  :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium']"
                  :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/16/solid'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Works', href: '#' },
  { name: 'Contact', href: '#' },
]
const tabs = [
  { name: 'All', href: '#', current: true },
  { name: 'Web', href: '#', current: false },
  { name: 'Desktop', href: '#', current: false },
  { name: 'Mobile', href: '#', current: false },
]

const mobileMenuOpen = ref(false)
</script>