<template>
	<v-app>
		<v-navigation-drawer width="300" permanent>
			<v-list-item
				class="pt-10 d-flex justify-center"
				prepend-avatar="https://picsum.photos/200"
			>
				<template v-slot:prepend>
					<v-avatar size="70"></v-avatar>
				</template>
				<v-list-item-title class="text-subtitle-1 font-weight-thin"
					>To-Do</v-list-item-title
				>
				<v-list-item-subtitle class="text-h4 text-red-accent-2">{{
					current_user
				}}</v-list-item-subtitle>
			</v-list-item>

			<v-divider
				thickness="4"
				color="red-accent-2"
				class="border-opacity-100 w-66 mx-auto mb-16 mt-12"
			></v-divider>

			<v-list>
				<v-list-group>
					<template v-slot:activator="{ props }">
						<v-list-item v-bind="props" class="mx-2" to="/dashboard">
							<template v-slot:prepend>
								<v-icon
									icon="mdi-calendar-outline"
									color="red-accent-2"
									size="x-large"
								></v-icon>
							</template>
							<v-list-item-title class="text-subtitle-1"
								>Tarefas para hoje</v-list-item-title
							></v-list-item
						>
					</template>

					<v-list-item v-bind="props"
						><template v-slot:prepend>
							<v-icon
								icon="mdi-circle"
								size="x-small"
								class="mr-4 ml-4 mr-n3"
								color="purple"
							></v-icon> </template
						><v-list-item-title>Financeiro</v-list-item-title></v-list-item
					>
					<v-list-item v-bind="props"
						><template v-slot:prepend>
							<v-icon
								icon="mdi-circle"
								size="x-small"
								class="mr-4 ml-4 mr-n3"
								color="yellow"
							></v-icon> </template
						><v-list-item-title>Pessoal</v-list-item-title></v-list-item
					>
					<v-list-item v-bind="props"
						><template v-slot:prepend>
							<v-icon
								icon="mdi-circle"
								size="x-small"
								class="mr-4 ml-4 mr-n3"
								color="blue"
							></v-icon> </template
						><v-list-item-title>Saúde</v-list-item-title></v-list-item
					>
				</v-list-group>

				<v-list-item to="/scheduled" class="mx-2 mt-5">
					<template v-slot:prepend>
						<v-icon
							icon="mdi-calendar-clock"
							color="red-accent-2"
							size="x-large"
						></v-icon>
					</template>
					<v-list-item-title class="text-subtitle-1"
						>Tarefas agendadas</v-list-item-title
					>
				</v-list-item>

				<v-list-item to="/configuracoes" class="mx-2 mt-5">
					<template v-slot:prepend>
						<v-icon icon="mdi-cog" color="red-accent-2" size="x-large"></v-icon>
					</template>
					<v-list-item-title class="text-subtitle-1"
						>Configurações</v-list-item-title
					>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';
import axios from 'axios';

export default {
	name: 'App',

	data() {
		return {
			current_user: '',
		};
	},
	mounted() {
		this.token = localStorage.getItem('access_token');
		try {
			let decoded = VueJwtDecode.decode(this.token);
			this.current_user = decoded.username;
		} catch (error) {
			console.error(error);
		}

		this.fetchTask();
	},
	methods: {
		fetchTask() {
			axios
				.get('http://localhost:3000/tasks', {
					headers: {
						Authorization: `Bearer ${this.token}`,
					},
				})
				.then((response) => {
					this.tasks = response.data;
				})
				.catch((err) => {
					console.error('Erro ao buscar tarefas: ', err);
				});
		},
	},
};
</script>
