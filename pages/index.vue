<template>
    <UContainer class="my-4 flex flex-col space-y-4">
        <!-- First section -->
        <div :class="[`bg-${secondaryColor}-500`, 'h-auto', 'rounded-lg', 'p-2']">
        1
        <div>
            <UCard>
                <UCardHeader>
                    <h2>
                        This is the first proyect section.
                    </h2>
                </UCardHeader>
                <UCardBody>
                    <p>
                        This is the body of the first section.
                    </p>
                </UCardBody>
            </UCard>
        </div>
        </div>
        <UButton
        :color="terciaryColor">
        Visit
        </UButton>
        <!-- Second section -->
        <div :class="[`bg-${secondaryColor}-500`, 'h-auto', 'rounded-lg', 'p-2']">
        2
        <div>
            <UCard>
                <UCardHeader>
                    <h2>
                        This is the second proyect section.
                    </h2>
                </UCardHeader>
                <UCardBody>
                    <p>
                        This is the body of the second section.
                    </p>
                </UCardBody>
            </UCard>
        </div>
        </div>
        <UButton
        :color="terciaryColor">
        Visit
        </UButton>
        <!-- Third section -->
        <div :class="[`bg-${secondaryColor}-500`, 'h-auto', 'rounded-lg', 'p-2']">
        3
        <div>
            <UCard>
                <UCardHeader>
                    <h2>
                        This is the third proyect section.
                    </h2>
                </UCardHeader>
                <UCardBody>
                    <p>
                        This is the body of the third section.
                    </p>
                </UCardBody>
            </UCard>
        </div>
        </div>
        <UButton
        :color="terciaryColor">
        Visit
        </UButton>
        <!-- Fourth section -->
        <div :class="[`bg-${secondaryColor}-500`, 'h-auto', 'rounded-lg', 'p-2']">
        4
        <div>
            <UCard>
                <UCardHeader>
                    <h2>
                        This is the fourth proyect section.
                    </h2>
                </UCardHeader>
                <UCardBody>
                    <p>
                        This is the body of the fourth section.
                    </p>
                </UCardBody>
            </UCard>
        </div>
        </div>
        <UButton
        :color="terciaryColor">
        Visit
        </UButton>
        <!-- Fifth section -->
        <div :class="[`bg-${secondaryColor}-500`, 'h-auto', 'rounded-lg', 'p-2']">
        5
        <div>
            <UCard>
                <UCardHeader>
                    <h2>
                        This is the fifth proyect section.
                    </h2>
                </UCardHeader>
                <UCardBody>
                    <p>
                        This is the body of the fifth section.
                    </p>
                </UCardBody>
            </UCard>
        </div>
        </div>
        <UButton
        :color="terciaryColor">
        Visit
        </UButton>
        <!-- Sixth section -->
        <div :class="[`bg-${secondaryColor}-500`, 'h-auto', 'rounded-lg', 'p-2']">
        6
        <div>
            <UCard>
                <UCardHeader>
                    <h2>
                        This is the sixth proyect section.
                    </h2>
                </UCardHeader>
                <UCardBody>
                    <p>
                        This is the body of the sixth section.
                    </p>
                </UCardBody>
            </UCard>
        </div>
        </div>
        <UButton
        :color="terciaryColor">
        Visit
        </UButton>
        <!-- Seventh section -->
        <div :class="[`bg-${secondaryColor}-500`, 'h-auto', 'rounded-lg', 'p-2']">
        7
        <div>
            <UCard>
                <UCardHeader>
                    <h2>
                        This is the seventh proyect section.
                    </h2>
                </UCardHeader>
                <UCardBody>
                    <p>
                        This is the body of the seventh section.
                    </p>
                </UCardBody>
            </UCard>
        </div>
        </div>
        <UButton
        :color="terciaryColor">
        Visit
        </UButton>
        <!-- Eigth section -->
        <div :class="[`bg-${secondaryColor}-500`, 'h-auto', 'rounded-lg', 'p-2']">
        8
        <div>
            <UCard>
                <UCardHeader>
                    <h2>
                        This is the eigth proyect section.
                    </h2>
                </UCardHeader>
                <UCardBody>
                    <p>
                        This is the body of the eigth section.
                    </p>
                </UCardBody>
            </UCard>
        </div>
        </div>
        <UButton
        :color="terciaryColor">
        Visit
        </UButton>
        <!-- Nineth section -->
        <div :class="[`bg-${secondaryColor}-500`, 'h-auto', 'rounded-lg', 'p-2']">
        9
        <div>
            <UCard>
                <UCardHeader>
                    <h2>
                        This is the nineth proyect section.
                    </h2>
                </UCardHeader>
                <UCardBody>
                    <p>
                        This is the body of the nineth section.
                    </p>
                </UCardBody>
            </UCard>
        </div>
        </div>
        <UButton
        :color="terciaryColor">
        Visit
        </UButton>
    </UContainer>
</template>

<script setup>
const { primaryColor, secondaryColor, terciaryColor } = useColor()
</script>
