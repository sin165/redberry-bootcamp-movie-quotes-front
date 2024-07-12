<script setup lang="ts">
import LayoutsMain from '@/layouts/LayoutsMain.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import ListCard from '@/components/list/ListCard.vue'
import { useFetch } from '@/composables/useFetch'

const { data, executeFetch } = useFetch('/movies')
executeFetch()
</script>

<template>
  <LayoutsMain>
    <div class="mt-5 mx-9 lg:mx-0 mb-64 flex lg:justify-end">
      <div class="w-full max-w-355">
        <div class="flex justify-between">
          <div class="font-medium lg:flex lg:gap-3.5">
            <h1 class="text-2xl">{{ $t('my_list_of_movies') }}</h1>
            <p class="lg:text-2xl">({{ $t('total') }} {{ data?.data.length }})</p>
          </div>
          <div>
            <BaseButton :plus="true">
              {{ $t('add_movie') }}
            </BaseButton>
          </div>
        </div>
        <div class="mt-8 flex flex-col gap-15 lg:gap-x-12.5 lg:flex-row flex-wrap">
          <ListCard v-for="movie in data?.data" :key="movie.id" :movie="movie" />
        </div>
      </div>
    </div>
  </LayoutsMain>
</template>
