<template>
  <Transition name="fade">
    <div 
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
      @click.self="$emit('close')"
    >
      
      <div 
        class="relative p-[12px] w-[90%] sm:w-[400px] min-h-[100px] overflow-y-auto 
               bg-[#FFFFFF80] rounded-[8px] sm:p-[24px] shadow-xl
               text-[12px] text-[#0D0E0E]"
      >
        
        <button 
          @click="$emit('close')"
          class="absolute top-[12px] right-[12px] text-[#0D0E0E] hover:text-[#555555]"
        >
          <svg class="h-[24px] w-[24px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div class="mb-[16px] flex justify-center">
          <slot name="logo"></slot>
        </div>

        <div class="text-center">
          <slot name="content">
            <p class="font-inter">Este es un mensaje por defecto.</p>
          </slot>
        </div>

        <div class="mt-[24px] flex justify-end space-x-[12px]">
          <slot name="footer">
            <button 
              @click="$emit('close')"
              class="rounded-[6px] bg-blue-600 px-[16px] py-[8px] text-[12px] font-medium text-white hover:bg-blue-700"
            >
              Aceptar
            </button>
          </slot>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
defineEmits(['close']);
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>