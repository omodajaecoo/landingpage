<template>
  <div
    class="w-full flex justify-center items-center min-h-[100px] pt-[0px] py-[10px] pb-[10px] sm:pb-[32px]"
    style="background: linear-gradient(to bottom, #0D0E0E, #67B0C4);"
  >
    <div class="w-[800px] max-w-[90%] flex flex-col items-center">


      <div class="w-full rounded-[8px] bg-white/50 p-[10px] sm:p-[32px]">
        <form @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-[24px] gap-y-[10px]">
            <div>
              <label for="field1" class="block text-[12px] font-inter font-semibold text-[#0D0E0E] mb-[4px]">Nombre *</label>
              <input 
                v-model="form.nombre"
                type="text" 
                id="field1" 
                placeholder="Nombre"
                :class="{ 'border-[#B1000F]': errors.nombre }"
                class="w-full rounded-[8px] font-interRegular border bg-white px-[14px] py-[8px] text-[14px] text-[#0D0E0E] placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#67B0C4]"
              >
              <p v-if="errors.nombre" class="mt-[4px] text-[12px] font-inter font-semibold text-[#B1000F]">{{ errors.nombre }}</p>
            </div>
            <div>
              <label for="field2" class="block text-[12px] font-inter font-semibold text-[#0D0E0E] mb-[4px]">Apellido *</label>
              <input 
                v-model="form.apellido"
                type="text" 
                id="field2" 
                placeholder="Apellido"
                :class="{ 'border-[#B1000F]': errors.apellido }"
                class="w-full rounded-[8px] font-interRegular border bg-white px-[14px] py-[8px] text-[14px] text-[#0D0E0E] placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#67B0C4]"
              >
              <p v-if="errors.apellido" class="mt-[4px] text-[12px] font-inter font-semibold text-[#B1000F]">{{ errors.apellido }}</p>
            </div>
            <div>
              <label for="field3" class="block text-[12px] font-inter font-semibold text-[#0D0E0E] mb-[4px]">Cédula de identidad *</label>
              <input 
                v-model="form.cedula"
                type="text" 
                id="field3" 
                placeholder="1234567891011"
                :class="{ 'border-[#B1000F]': errors.cedula }"
                class="w-full rounded-[8px] font-interRegular border bg-white px-[14px] py-[8px] text-[14px] text-[#0D0E0E] placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#67B0C4]"
              >
              <p v-if="errors.cedula" class="mt-[4px] text-[12px] font-inter font-semibold text-[#B1000F]">{{ errors.cedula }}</p>
            </div>
            <div>
              <label for="field4" class="block text-[12px] font-inter font-semibold text-[#0D0E0E] mb-[4px]">Correo *</label>
              <input 
                v-model="form.correo"
                type="email" 
                id="field4" 
                placeholder="Correo"
                :class="{ 'border-[#B1000F]': errors.correo }"
                class="w-full rounded-[8px] font-interRegular border bg-white px-[14px] py-[8px] text-[14px] text-[#0D0E0E] placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#67B0C4]"
              >
              <p v-if="errors.correo" class="mt-[4px] text-[12px] font-inter font-semibold text-[#B1000F]">{{ errors.correo }}</p>
            </div>
            <div>
              <label for="field5" class="block text-[12px] font-inter font-semibold text-[#0D0E0E] mb-[4px]">Celular *</label>
              <div 
                class="flex items-center w-full rounded-[8px] border bg-white transition-all duration-200 focus-within:ring-2 focus-within:ring-[#67B0C4]"
                :class="{ 'border-[#B1000F]': errors.celular, 'border-[#C6C6C6]': !errors.celular }"
              >
                <span class="pl-[14px] pr-[4px] text-[#0D0E0E] text-[14px]">(593)</span>
                <input 
                  v-model="form.celular"
                  type="text" 
                  id="field5" 
                  placeholder="991234567"
                  class="w-full flex-1 font-interRegular bg-transparent py-[8px] pr-[14px] text-[14px] text-[#0D0E0E] placeholder:text-[#8E8E8E] focus:outline-none"
                >
              </div>
              <p v-if="errors.celular" class="mt-[4px] text-[12px] font-inter font-semibold text-[#B1000F]">{{ errors.celular }}</p>
            </div>
            <div>
              <label for="field6" class="block text-[12px] font-inter font-semibold text-[#0D0E0E] mb-[4px]">Ciudad</label>
              <div class="relative">
                <select 
                  v-model="form.ciudad"
                  id="field6" 
                  class="w-full rounded-[8px] font-interRegular border border-[#C6C6C6] bg-white px-[14px] py-[8px] text-[14px] text-[#0D0E0E] focus:outline-none focus:ring-2 focus:ring-[#67B0C4] appearance-none pr-[36px]"
                >
                  <option value="" disabled>Selecciona una ciudad</option>
                  <option v-for="ciudad in ciudades" :key="ciudad" :value="ciudad">{{ ciudad }}</option>
                </select>
                <span class="pointer-events-none absolute right-[14px] top-1/2 transform -translate-y-1/2 text-[#0D0E0E] text-[18px]">
                 <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 7.75205L0 1.75205L1.4 0.352051L6 4.95205L10.6 0.352051L12 1.75205L6 7.75205Z" fill="#1C1B1F"/>
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label for="field7" class="block text-[12px] font-inter font-semibold text-[#0D0E0E] mb-[4px]">Modelo de interés</label>
              <div class="relative">
                <select 
                  v-model="form.modelo_interes"
                  id="field7" 
                  class="w-full rounded-[8px] font-interRegular border border-[#C6C6C6] bg-white px-[14px] py-[8px] text-[14px] text-[#0D0E0E] focus:outline-none focus:ring-2 focus:ring-[#67B0C4] appearance-none pr-[36px]"
                >
                  <option value="" disabled>Selecciona un modelo</option>
                  <option v-for="modelo in modelos" :key="modelo" :value="modelo">{{ modelo }}</option>
                </select>
                <span class="pointer-events-none absolute right-[14px] top-1/2 transform -translate-y-1/2 text-[#0D0E0E] text-[18px]">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 7.75205L0 1.75205L1.4 0.352051L6 4.95205L10.6 0.352051L12 1.75205L6 7.75205Z" fill="#1C1B1F"/>
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label for="field8" class="block text-[12px] font-inter font-semibold text-[#0D0E0E] mb-[4px]">OMODA & JAECOO store</label>
              <input 
                v-model="form.concesionario"
                type="text" 
                id="field8" 
                placeholder="Store"
                readonly
                class="w-full rounded-[8px] font-interRegular border border-[#C6C6C6] bg-gray-200 px-[14px] py-[8px] text-[14px] text-[#555] cursor-not-allowed"
              >
            </div>
          </div>
          <!-- terms -->
          <div style="height:108px; overflow-y:auto; " class="w-full font-inter rounded-[8px] mt-[10px] text-[#0D0E0E] text-[12px] custom-scrollbar">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta iure iste aliquam laborum nobis recusandae quod repellendus repudiandae dolorum, exercitationem ratione ex neque veritatis, in at ut consequuntur perferendis! Dicta?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta iure iste aliquam laborum nobis recusandae quod repellendus repudiandae dolorum, exercitationem ratione ex neque veritatis, in at ut consequuntur perferendis! Dicta?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta iure iste aliquam laborum nobis recusandae quod repellendus repudiandae dolorum, exercitationem ratione ex neque veritatis, in at ut consequuntur perferendis! Dicta?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta iure iste aliquam laborum nobis recusandae quod repellendus repudiandae dolorum, exercitationem ratione ex neque veritatis, in at ut consequuntur perferendis! Dicta?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta iure iste aliquam laborum nobis recusandae quod repellendus repudiandae dolorum, exercitationem ratione ex neque veritatis, in at ut consequuntur perferendis! Dicta?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta iure iste aliquam laborum nobis recusandae quod repellendus repudiandae dolorum, exercitationem ratione ex neque veritatis, in at ut consequuntur perferendis! Dicta?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta iure iste aliquam laborum nobis recusandae quod repellendus repudiandae dolorum, exercitationem ratione ex neque veritatis, in at ut consequuntur perferendis! Dicta?
          </div>
          <div class="mt-[10px]">
            <label for="terms" class="flex items-center cursor-pointer font-inter">
              <input 
                v-model="termsAccepted"
                type="checkbox" 
                id="terms" 
                required
                class="appearance-none h-[24px] w-[24px] rounded-[6px] border border-[#C6C6C6] bg-white
                       focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#67B0C4]
                       checked:bg-white checked:bg-no-repeat checked:bg-center
                       checked:bg-[url('data:image/svg+xml,%3csvg%20viewBox%3d%220%200%2016%2016%22%20fill%3d%22black%22%20xmlns%3d%22http%3a//www.w3.org/2000/svg%22%3e%3cpath%20d%3d%22M12.207%204.793a1%201%200%20010%201.414l-5%205a1%201%200%2001-1.414%200l-2-2a1%201%200%20011.414-1.414L6.5%209.086l4.293-4.293a1%201%200%20011.414%200z%22/%3e%3c/svg%3e')]"
              >
              <span class="ml-[8px] font-inter text-[12px] font-semibold text-[#0D0E0E]">Acepto términos y condiciones</span>
            </label>
            <label for="privacy" class="flex font-inter items-center cursor-pointer mt-[10px]">
              <input 
                v-model="privacyAccepted"
                type="checkbox" 
                id="privacy" 
                required
                class="appearance-none h-[24px] w-[24px] rounded-[6px] border border-[#C6C6C6] bg-white
                       focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#67B0C4]
                       checked:bg-white checked:bg-no-repeat checked:bg-center
                       checked:bg-[url('data:image/svg+xml,%3csvg%20viewBox%3d%220%200%2016%2016%22%20fill%3d%22black%22%20xmlns%3d%22http%3a//www.w3.org/2000/svg%22%3e%3cpath%20d%3d%22M12.207%204.793a1%201%200%20010%201.414l-5%205a1%201%200%2001-1.414%200l-2-2a1%201%200%20011.414-1.414L6.5%209.086l4.293-4.293a1%201%200%20011.414%200z%22/%3e%3c/svg%3e')]"
              >
              <span class="ml-[8px] text-[12px] font-inter font-semibold text-[#0D0E0E]">Acepto las políticas de privacidad</span>
            </label>
          </div>
          <div class="flex justify-center mt-[24px]">
            <button 
              type="submit" 
              :disabled="loading"
              class="w-full h-[40px] bg-[#67B0C4] text-[14px] text-white font-inter font-normal flex items-center justify-center transition-colors
                     sm:w-[150px] sm:h-[56px] md:w-[160px] md:h-[74px] sm:bg-transparent sm:border sm:border-white sm:text-[20px] sm:hover:bg-white/10
                     disabled:border-gray-500 disabled:text-gray-500 disabled:cursor-not-allowed"
            >
              {{ loading ? 'Enviando...' : 'Enviar' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';

const config = useRuntimeConfig()


// --- OPCIONES PARA LOS SELECTS ---
const ciudades = ['QUITO', 'GUAYAQUIL', 'CUENCA', 'MANTA', 'AMBATO', 'OTROS'];
const modelos = ['OMODA C5 GASOLINA', 'OMODA C5 FHEV SHS COMFORT', 'OMODA C5 FHEV SHS LUXURY', 'JAECOO J7 PHEV SHS STANDARD', 'JAECOO J7 PHEV SHS PREMIUM', 'OMODA EV BEV'];

// --- LÓGICA DEL FORMULARIO ---
const form = ref({
  nombre: '',
  apellido: '',
  cedula: '',
  correo: '',
  celular: '',
  ciudad: '',
  modelo_interes: '',
  concesionario: '',
  terminos_aceptados: false,
});

const termsAccepted = ref(false);
const privacyAccepted = ref(false);

const errors = ref({
  nombre: '',
  apellido: '',
  cedula: '',
  correo: '',
  celular: '',
});

const loading = ref(false);

watch(() => form.value.ciudad, (nuevaCiudad) => {
  switch (nuevaCiudad) {
    case 'QUITO': form.value.concesionario = 'OMODA & JAECOO – EL LABRADOR'; break;
    case 'GUAYAQUIL': form.value.concesionario = 'OMODA & JAECOO – JUAN TANCA MARENGO'; break;
    case 'CUENCA': form.value.concesionario = 'OMODA & JAECOO – CUENCA'; break;
    default: form.value.concesionario = 'OMODA & JAECOO POP UP STORE';
  }
});

const validateForm = () => {
  errors.value = { nombre: '', apellido: '', cedula: '', correo: '', celular: '' };
  let isValid = true;
  const nameRegex = /^[a-zA-Z0-9\sñÑáéíóúÁÉÍÓÚüÜ]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const numericRegex = /^[0-9]*$/;

  if (!form.value.nombre) {
    errors.value.nombre = 'El nombre es obligatorio.';
    isValid = false;
  } else if (form.value.nombre.length < 2 || form.value.nombre.length > 50) {
    errors.value.nombre = 'Debe tener entre 2 y 50 caracteres.';
    isValid = false;
  } else if (!nameRegex.test(form.value.nombre)) {
    errors.value.nombre = 'Contiene caracteres no permitidos.';
    isValid = false;
  }

  if (!form.value.apellido) {
    errors.value.apellido = 'El apellido es obligatorio.';
    isValid = false;
  } else if (form.value.apellido.length < 2 || form.value.apellido.length > 50) {
    errors.value.apellido = 'Debe tener entre 2 y 50 caracteres.';
    isValid = false;
  } else if (!nameRegex.test(form.value.apellido)) {
    errors.value.apellido = 'Contiene caracteres no permitidos.';
    isValid = false;
  }

  if (!form.value.cedula) {
    errors.value.cedula = 'La cédula es obligatoria.';
    isValid = false;
  } else if (!numericRegex.test(form.value.cedula)) {
    errors.value.cedula = 'Solo se permiten números.';
    isValid = false;
  } else if (form.value.cedula.length > 13) {
    errors.value.cedula = 'No debe exceder los 13 caracteres.';
    isValid = false;
  }

  if (!form.value.correo) {
    errors.value.correo = 'El correo es obligatorio.';
    isValid = false;
  } else if (!emailRegex.test(form.value.correo)) {
    errors.value.correo = 'El formato del correo no es válido.';
    isValid = false;
  }

  if (!form.value.celular) {
    errors.value.celular = 'El celular es obligatorio.';
    isValid = false;
  } else if (!numericRegex.test(form.value.celular)) {
    errors.value.celular = 'Solo se permiten números.';
    isValid = false;
  } else if (form.value.celular.length !== 10) {
    errors.value.celular = 'Debe tener exactamente 10 dígitos.';
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;
  if (loading.value) return;
  loading.value = true;

  const finalPayload = {
    ...form.value,
    terminos_aceptados: termsAccepted.value && privacyAccepted.value,
  };

  const endpoint = config.public.formURL;
  const headers = { 'Content-Type': 'application/json', 'X-CLIENT-SECRET': config.public.secKey };
  const body = JSON.stringify(finalPayload);

  try {
    const response = await fetch(endpoint, { method: 'POST', headers, body });
    if (response.ok) {
      alert('¡Formulario enviado con éxito!');
      form.value = { nombre: '', apellido: '', cedula: '', correo: '', celular: '', ciudad: '', modelo_interes: '', concesionario: '', terminos_aceptados: false };
      termsAccepted.value = false;
      privacyAccepted.value = false;
    } else {
      const errorData = await response.json();
      console.error('Error en la respuesta del servidor:', errorData);
      alert(`Error: ${errorData.message || 'No se pudo enviar el formulario.'}`);
    }
  } catch (error) {
    console.error('Error de red o de conexión:', error);
    alert('Error de conexión. Por favor, revisa tu internet.');
  } finally {
    loading.value = false;
  }
};
</script>
<style scoped>
/* Para navegadores basados en WebKit (Chrome, Safari, Edge, etc.) */
.custom-scrollbar::-webkit-scrollbar {
  width: 7px; /* Ancho del scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent; /* Fondo del track transparente */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #000000; /* Color negro para el pulgar */
  border-radius: 6px;      /* Bordes redondeados para el pulgar */
}

/* Para Firefox */
.custom-scrollbar {
  scrollbar-width: thin; /* Hace el scrollbar más delgado */
  scrollbar-color: #000000 transparent; /* Color del pulgar y del track */
}
</style>