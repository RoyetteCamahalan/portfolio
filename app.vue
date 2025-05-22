<template>
  <div class="bg-white">
    <header class="fixed bg-white/80 inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-center p-4 lg:px-8 gap-6" aria-label="Global">
        <div class="flex lg:hidden flex-1 justify-end">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex gap-10">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm/6 font-semibold">{{ item.name
            }}</a>
        </div>
        <div class="hidden lg:flex">
          <a href="/Royette Camahalan-Resume.pdf" download
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
                <a href="/Royette Camahalan-Resume.pdf" download
                  class="rounded-full bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Download
                  CV</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <section id="home" class="flex relative items-center justify-center">
      <div class="w-full max-w-7xl flex justify-center">
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 mx-8">
          <div class="self-center p-2 mt-28 sm:my-2">
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
                <a href="/Royette Camahalan-Resume.pdf" download
                  class="rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                  Download CV
                </a>
                <a href="#contact"
                  class="rounded-full bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div class="sm:h-screen h-fit flex items-center justify-center">
            <img class="w-md bg-transparent rounded-lg" src="/img/profile_3.png" />
          </div>
        </div>
      </div>
      <div class="">
        <span class="absolute right-0 bottom-0">
          <svg class="w-42 h-48 lg:w-64 lg:h-80" viewBox="0 0 375 490" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <section id="about" class="bg-gray-100 px-6 py-8 sm:py-24 flex items-center justify-center">
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

    <RecentWorks></RecentWorks>

    <section id="contact">
      <div class="isolate bg-white px-6 py-8">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div class="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="mx-auto max-w-2xl text-center">
          <p class="mt-2 text-lg/8 text-blue-600 font-semibold">Contact me</p>
          <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Have an Project in Mind?</h2>
        </div>
        <form method="POST" @submit.prevent="sendMail" class="mx-auto mt-16 max-w-xl sm:mt-20">
          <LoadingSpinner :isActive="state.isPageLoading">
            <div class="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label for="name" class="block text-sm/6 font-semibold text-gray-900">Name</label>
                <div class="mt-2.5">
                  <input type="text" name="name" id="name" autocomplete="full-name" v-model="state.form.name"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                  <FormError :error="v$.form.name && v$.form.name.$errors && v$.form.name.$errors.length > 0 ? v$.form.name.$errors[0].$message : null "/>
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
                <div class="mt-2.5">
                  <input type="email" name="email" id="email" autocomplete="email" v-model="state.form.email"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                      <FormError :error="v$.form.email && v$.form.email.$errors && v$.form.email.$errors.length > 0 ? v$.form.email.$errors[0].$message : null "/>
                  </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
                <div class="mt-2.5">
                  <textarea name="message" id="message" rows="4" v-model="state.form.message"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                  <FormError :error="v$.form.message && v$.form.message.$errors && v$.form.message.$errors.length > 0 ? v$.form.message.$errors[0].$message : null "/>
                  <FormError :error="state.error && state.error.length > 0 ? state.error : null "/>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
            </div>
          </LoadingSpinner>
        </form>
      </div>
    </section>
    <footer class="mx-auto max-w-7xl px-6 py-8 sm:py-24 lg:px-8 lg:py-32">
      <div class="mt-12 border-t border-gray-900/10 pt-8 flex items-center justify-between">
        <p class="text-sm/6 text-gray-600">&copy; 2025 Royette Camahalan.</p>
        <div class="flex gap-x-6 md:order-2">
          <a v-for="item in social" :key="item.name" :href="item.href" target="_blank" class=" flex items-center justify-center text-gray-600 hover:text-gray-800">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="size-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/16/solid'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import { clientService } from '@/components/api/ClientService';

useHead({
  title: 'Royette Camahalan - Porfolio',
})

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Works', href: '#works' },
  { name: 'Contact', href: '#contact' },
]

const state = reactive({
  error: '',
  isPageLoading: false,
  form:{
    name: '',
    email: '',
    message: ''
  },
  isSent: false
})
const mobileMenuOpen = ref(false)

const social = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/royette.camahalan',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/royettecamahalan',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/RoyetteCamahalan',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/royette-camahalan-43b017181/',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 18 18' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ]
  const validators = computed(() => {
    return {
      form:{
        name: { required: helpers.withMessage('This field is required.', required) },
        email: { required: helpers.withMessage('This field is required.', required),
                 email: helpers.withMessage('Email is invalid', email) },
        message: { required: helpers.withMessage('This field is required.', required) },
        }
      }
})

const v$ = useVuelidate(validators, state)

async function sendMail(){
    v$.value.$validate()
    if(!v$.value.$error){
        state.isPageLoading = true
        try{
            await clientService.sendMail(state.form)
            state.error = ''
            state.isSent = true
        }catch(error){
            state.error = error
        }
        state.isPageLoading = false
    }
}
</script>