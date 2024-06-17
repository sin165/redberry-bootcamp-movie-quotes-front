<script setup lang="ts">
import LayoutsMain from '@/layouts/LayoutsMain.vue'
import UserAvatar from '@/components/shared/UserAvatar.vue'
import ProfileInput from '@/components/profile/ProfileInput.vue'
import ProfileInputDisabled from '@/components/profile/ProfileInputDisabled.vue'
import ProfileInputAvatar from '@/components/profile/ProfileInputAvatar.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useUserStore } from '@/store/UserStore'
import { ref } from 'vue'
import { useForm } from 'vee-validate'

const userStore = useUserStore()

const newAvatar = ref<string | null>(null)
const avatarInput = ref()
const editNameOpen = ref(false)
const editPasswordOpen = ref(false)

const cancel = () => {
  editNameOpen.value = false
  editPasswordOpen.value = false
  newAvatar.value = null
  avatarInput.value.clearFileInput()
}

const selectAvatar = (url: string | null) => {
  newAvatar.value = url
}

const { handleSubmit } = useForm()

const onSubmit = handleSubmit(async (values) => {
  if (!values.name && !values.password && !values.avatar) {
    cancel()
    return
  }
  console.log(values)
})
</script>

<template>
  <LayoutsMain>
    <div>
      <div class="my-8">
        <h1 class="ml-15 mb-32">{{ $t('my_profile') }}</h1>
        <form class="max-w-250 mb-150" @submit="onSubmit">
          <div class="bg-night-dark pb-40">
            <div class="w-47 h-29 mx-auto relative">
              <div class="size-47 absolute bottom-0 bg-night-dark rounded-full">
                <UserAvatar :newAvatar="newAvatar" />
              </div>
            </div>
            <label class="mx-auto block mt-2 mb-10 text-xl w-max cursor-pointer">
              {{ $t('upload_new_photo') }}
              <ProfileInputAvatar ref="avatarInput" @avatarSelect="selectAvatar" />
            </label>
            <div class="w-max mx-auto space-y-14">
              <fieldset class="space-y-14">
                <ProfileInputDisabled
                  :label="$t('name')"
                  :value="userStore.name"
                  :edit="true"
                  @edit="editNameOpen = true"
                />
                <ProfileInput
                  v-if="editNameOpen"
                  name="name"
                  :label="$t('new_name')"
                  :placeholder="$t('enter_new_name')"
                  rules="lowercase|min:3|max:15"
                />
              </fieldset>
              <fieldset class="space-y-14">
                <ProfileInputDisabled :label="$t('email')" :value="userStore.email" />
              </fieldset>
              <fieldset class="space-y-14">
                <ProfileInputDisabled
                  :label="$t('password')"
                  value="••••••••••••"
                  :edit="true"
                  @edit="editPasswordOpen = true"
                />
                <ProfileInput
                  v-if="editPasswordOpen"
                  name="password"
                  :label="$t('new_pass')"
                  :placeholder="$t('enter_new_pass')"
                  type="password"
                  rules="lowercase|min:8|max:15"
                />
                <ProfileInput
                  v-if="editPasswordOpen"
                  name="password_confirmation"
                  :label="$t('confirm_new_pass')"
                  :placeholder="$t('confirm_new_pass')"
                  type="password"
                  rules="confirmed:@password"
                />
              </fieldset>
            </div>
          </div>
          <div v-if="editNameOpen || editPasswordOpen || newAvatar" class="my-17 flex justify-end">
            <button type="button" class="px-4 mr-2 text-xl" @click="cancel">
              {{ $t('button.cancel') }}
            </button>
            <div>
              <BaseButton type="submit">{{ $t('button.save_changes') }}</BaseButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  </LayoutsMain>
</template>
