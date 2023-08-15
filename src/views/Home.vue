<script setup>
import { Carousel } from 'flowbite-vue'
const pictures = [
  {
    'src': 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_911,c_limit/61409afd-bb00-4452-b5fb-b784b6a682a3/nike-just-do-it.jpg',
    'alt': 'Picture 1',
  },
  {
    'src': 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_911,c_limit/71dc8fc1-97c2-493c-bdaa-8d46f51ff85e/nike-just-do-it.jpg',
    'alt': 'Picture 2',
  },
  {
    'src': 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_911,c_limit/b3e44fd7-df8f-449a-a2c7-48bb948518ab/nike-just-do-it.png',
    'alt': 'Picture 3',
  },
  {
    'src': 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_911,c_limit/efc21be6-ab7a-44d0-9e03-09755bc6133a/nike-just-do-it.jpg',
    'alt': 'Picture 4',
  }
]

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
  <Carousel :pictures="pictures"></Carousel>

  <div class="bg-white">
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
</template>


