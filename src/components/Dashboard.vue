<template>
	<v-navigation-drawer permanent>
		<v-list-item
			prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
			:title="current_user"
			nav
		>
		</v-list-item>

		<v-divider></v-divider>

		<v-list density="compact" nav>
			<v-list-item
				prepend-icon="mdi-calendar-blank"
				title="Tarefas para hoje"
				value="dailyTasks"
			></v-list-item>
			<v-list-item
				prepend-icon="mdi-calendar-clock-outline"
				title="Tarefas agendadas"
				value="scheduledTasks"
			></v-list-item>
		</v-list>
	</v-navigation-drawer>

	<div class="bg-red-accent-2 w-100 h-100 pt-16">
		<div class="pt-16 w-75 mx-auto">
			<v-text-field
				label="Qual sua próxima tarefa?"
				variant="solo-filled"
				rounded="xl"
				append-inner-icon="mdi-calendar"
			></v-text-field>
		</div>
	</div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';

export default {
	name: 'Dashboard',
	data() {
		return {
			current_user: '',
		};
	},
	mounted() {
		let token = localStorage.getItem('access_token');
		try {
			let decoded = VueJwtDecode.decode(token);
			this.current_user = decoded.username;
		} catch (error) {
			console.error(error);
		}
	},
};
</script>

<style></style>
