<template>
	<v-container class="bg-red-accent-2 h-100 py-14"
		><v-container id="configuracoes" class="bg-white h-100 w-75">
			<v-card elevation="0" class="d-flex"
				><v-card-title class="text-red-accent-2 text-h5 ml-n4"
					>Perfil</v-card-title
				>
				<template v-slot:prepend
					><v-icon color="red-accent-2" size="x-large"
						>mdi-account-circle-outline</v-icon
					></template
				>
			</v-card>
			<v-divider
				color="red-accent-2"
				thickness="3"
				class="border-opacity-100 mx-4 mt-1"
			></v-divider>
			<v-btn
				:ripple="false"
				variant="plain"
				class="w-100 d-flex justify-space-between px-4 text-h5 mt-8"
				><template v-slot:append
					><v-icon size="x-large">mdi-chevron-right</v-icon></template
				>Editar perfil</v-btn
			>
			<v-btn
				:ripple="false"
				variant="plain"
				class="w-100 d-flex justify-space-between px-4 text-h5 mt-4 mt-10"
				><template v-slot:append
					><v-icon size="x-large">mdi-chevron-right</v-icon></template
				>Alterar senha</v-btn
			>
			<v-btn
				:ripple="false"
				variant="plain"
				class="w-100 d-flex justify-space-between px-4 text-h5 mt-4 mt-10"
				><template v-slot:append
					><v-icon size="x-large">mdi-chevron-right</v-icon></template
				>Termos e privacidade</v-btn
			>
			<v-card elevation="0" class="d-flex mt-10"
				><v-card-title class="text-red-accent-2 text-h5 ml-n4"
					>Notificações</v-card-title
				>
				<template v-slot:prepend
					><v-icon color="red-accent-2" size="x-large"
						>mdi-bell-outline</v-icon
					></template
				>
			</v-card>
			<v-divider
				color="red-accent-2"
				thickness="3"
				class="border-opacity-100 mx-4 mt-1"
			></v-divider>
			<v-btn
				:ripple="false"
				variant="plain"
				class="w-100 d-flex justify-space-between px-4 text-h5 mt-8"
				><template v-slot:append
					><v-switch color="red-accent-2" class="mt-5"></v-switch></template
				>Notificações</v-btn
			>
			<v-btn
				:ripple="false"
				variant="plain"
				class="w-100 d-flex justify-space-between px-4 text-h5 mt-4 mt-10"
				><template v-slot:append
					><v-switch color="red-accent-2" class="mt-5"></v-switch></template
				>Notificações de tarefas</v-btn
			>
			<v-card elevation="0" class="d-flex mt-8"
				><v-card-title class="text-red-accent-2 text-h5 ml-n4"
					>Mais configurações</v-card-title
				>
				<template v-slot:prepend
					><v-icon color="red-accent-2" size="x-large"
						>mdi-dots-horizontal-circle-outline</v-icon
					></template
				>
			</v-card>
			<v-divider
				color="red-accent-2"
				thickness="3"
				class="border-opacity-100 mx-4 mt-1"
			></v-divider>
			<v-btn
				:ripple="false"
				variant="plain"
				class="w-100 d-flex justify-space-between px-4 text-h5 mt-8"
				><template v-slot:append
					><v-icon size="x-large">mdi-chevron-right</v-icon></template
				>Idioma</v-btn
			>
			<v-btn
				:ripple="false"
				variant="plain"
				class="w-100 d-flex justify-space-between px-4 text-h5 mt-8"
				><template v-slot:append
					><v-icon size="x-large">mdi-chevron-right</v-icon></template
				>País</v-btn
			>
		</v-container></v-container
	>
</template>

<script>
export default {
	name: 'Configuracoes',
};
</script>

<style>
#configuracoes {
	border-radius: 20px;
}
</style>
