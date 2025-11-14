<template>
  <div>
    <div class="w-full flex justify-center py-[32px] px-[10px] md:py-[100px] md:px-[0px] bg-cover bg-center relative"
      style="background-image: url('/images/index/bg_value.webp');">
      <div class="absolute inset-0 bg-black/80 pointer-events-none z-0"></div>
      <div class="w-full flex flex-col justify-center max-w-[800px] space-y-[60px] z-10 relative">
        <div class="flex justify-center items-center">
          <BaseImg src="common/logo_dark.png" class="w-[393px] h-auto object-contain" />
        </div>
        <div class="flex justify-center items-center">
          <div class="font-interSemiRegular text-white text-light text-[14px] md:text-[16px] text-center">
            OMODA y JAECOO llegan a Ecuador de la mano de Automotores y Anexos S.A.<br /><br />
            Con más de 60 años de experiencia representando marcas como Nissan, Renault, Foton y BAIC, la
            compañía da un nuevo paso para rediseñar lo convencional en movilidad. Innovación, diseño y servicios
            integrales como seminuevos, renting y posventa se unen para ofrecerte una experiencia distinta. El futuro
            del camino empieza hoy, y tú puedes ser parte.
          </div>
        </div>
        <div class="flex justify-center items-center">
          <BaseImg src="common/logo_ayasa_dark.webp" class="w-[300px] object-contain" />
        </div>
        <div class="flex justify-center items-center">
          <div class="font-interSemiRegular text-white text-light text-[14px] md:text-[16px] text-center">
            OMODA y JAECOO llegan para rediseñar lo convencional y quienes quieren vivir movilidad premium
            accesible.<br /><br />
            Marcas globales que han conquistado Europa con su diseño vanguardista, tecnología premium y
            seguridad certificada con 5 estrellas. Respaldadas por un grupo automotriz del Fortune Global 500,
            convierten cada camino en una nueva forma de expresarte.
          </div>
        </div>
        <div class="flex justify-center items-center w-full">
          <div class="flex justify-center items-center space-x-[27px] w-[290px] h-[65px]">
            <a href="https://www.euroncap.com/en/results/jaecoo/7+phev/54532" target="_blank" rel="noopener"
              class="flex justify-center items-center bg-white w-[92px] h-full cursor-pointer">
              <BaseImg src="common/logo_europnacp_light.webp" class="w-[81px] h-[41px] object-contain" />
            </a>
            <a href="https://www.ancap.com.au/safety-ratings/omoda/c5-009fb6c6-accf-4473-bd4b-f93044e7b8ca/632e46"
              target="_blank" rel="noopener"
              class="flex justify-center items-center bg-white w-[92px] h-full cursor-pointer">
              <BaseImg src="common/logo_ancap_light.webp" class="w-[81px] h-[50px] object-contain" />
            </a>
            <a href="https://fortune.com/company/chery-holding-group/" target="_blank" rel="noopener"
              class="flex h-full cursor-pointer">
              <BaseImg src="common/logo_global500.webp" class=" w-[53px] object-cover" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>