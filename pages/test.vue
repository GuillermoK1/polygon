<template>
    <UContainer>
        <UBadge class="bg-gradient-to-r from-blue-500 to-indigo-500">
            Large Card to show gradient color (hard coded)
        </UBadge>
        <div class="bg-gradient-to-r from-blue-500 to-indigo-500 py-6 h-auto">
            Division or section using gradient color (hard coded)
        </div>
        <UBadge
        :color="primaryColor">
            Card
        </UBadge>
        <div :class="[`bg-${primaryColor}-500`, 'py-6', 'h-auto']"
        >
            First division or section using primary color
        </div>
        <UBadge
        :color="secondaryColor">
            Card
        </UBadge>
        <div :class="[`bg-${secondaryColor}-500`, 'py-6', 'h-auto']"
        >
            Second division or section using secondary color
        </div>

        <!-- From here on, variables don't work because I'm trying to use them for gradient styling.
         It seems like Tailwind doesn't accept multiple variables for dynamic styling on the fly.
         Maybe the way to solve it is adding some configurations but... who wants to?  -->

        <UBadge
        :class="[
                'bg-gradient-to-r',
                `to-sky-500`, // It will render the primary color according to the config file instead. 
                `to-${secondaryColor}-500`
            ]">
            Card
        </UBadge>
        <div
        :class="[
                'bg-gradient-to-r',
                `from-${primaryColor}-500`,// Not rendered
                `to-sky-500`,// Not rendered
                'py-6',
                'h-auto'
            ]"
        >
            Third division using gradient color with primary color selector and hard coded secondary color
        </div>
        <div
            :class="[
                'bg-gradient-to-r',
                `from-sky-500`,// Rendered!
                `to-${secondaryColor}-500`,// Not rendered
                'py-6',
                'h-auto'
            ]"
        >
            Fourth division using gradient color with hard coded primary color and secondary color selector
        </div>
    </UContainer>
</template>

<script setup>
const { primaryColor, secondaryColor } = useColor()
</script>