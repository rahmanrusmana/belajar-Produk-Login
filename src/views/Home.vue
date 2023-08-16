<script setup>
const products = [
    {
      id: 1,
      name: 'Nike Victori One',
      href: '#',
      imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9893c3aa-14b8-4bae-8ca6-9db6675e410f/victori-one-slides-QTTJHP.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$29,33',
      color: 'Men`s Slidesk',
    },
    {
      id: 2,
      name: 'Nike Air Force 1`07',
      href: '#',
      imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21d38052-598b-44f6-a857-123c9f72b015/air-force-1-07-shoes-WrLlWX.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$101,02',
      color: 'Men`s Shoes',
    },
    {
      id: 2,
      name: 'Nike Vaporfly 3',
      href: '#',
      imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/09f365a5-5753-450f-901d-7fafe8915ca0/vaporfly-3-road-racing-shoes-xsDgvM.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$221,58',
      color: 'Men`s Road Racing Shoes',
    },
    {
      id: 2,
      name: 'Nike Motiva',
      href: '#',
      imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ea08d51f-4841-403c-bbc3-fc256164d05b/motiva-walking-shoes-Fjzkq7.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$110,79',
      color: 'Men`s Walking Shoes',
    },
    
    // More products...
  ]
</script>
<template>
  <div class="bg-white">
    <div class="w-full bg-cover bg-center" style="height:32rem; background-image: url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);">
        <div class="flex items-center justify-left h-full w-full bg-gray-900 bg-opacity-50">
            <div class="">
                <h1 class="text-white text-2xl font-extrabold uppercase md:text-3xl ml-10">INDEPENDENCE DAY<br>EXTRA 17% OFF</h1>
                <p class="text-white text-base font-semibold uppercase md:text-base ml-10">Deals not to be missed! Get moving before your favorites are gone</p>

                <a href="/Conten" class="ml-10 mt-3 relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-white border-2 border-white-600 rounded-full hover:text-black group hover:bg-gray-50">
                  <span class="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span class="relative">Start Shopping</span>
                </a>
            </div>
        </div>
    </div>

    <div class="">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Easy Everyday Essentials</h2>
  
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="product in products" :key="product.id" class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-100">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


