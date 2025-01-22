<template>
    <UContainer>
      <UCard>
        <template #header>
          <div class="flex justify-between items-center">
            <p>Welcome to 
              <span :class="`text-${primaryColor}-500 font-bold`">N</span>uxt<span :class="`text-${secondaryColor}-500 font-bold`">UI</span>
              Starter
            </p>
            <div class="flex gap-2">
              <USelect
                v-model="primaryColor"
                :options="colorOptions"
                placeholder="Primary color"
                class="w-40"
              />
              <USelect
                v-model="secondaryColor"
                :options="colorOptions"
                placeholder="Secondary color"
                class="w-40"
              />
              <USelect
                v-model="terciaryColor"
                :options="colorOptions"
                placeholder="Terciary color"
                class="w-40"
              />
              <ColorScheme>
                <USelect 
                  v-model="$colorMode.preference" 
                  :options="['system', 'light', 'dark']" 
                />
              </ColorScheme>
            </div>
          </div>
        </template>
      </UCard>
    </UContainer>
</template>
  
<script setup>
const { primaryColor, secondaryColor, terciaryColor, colorOptions } = useColor()
</script>
