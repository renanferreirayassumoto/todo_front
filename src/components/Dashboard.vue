<template>
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
					<v-list-item v-bind="props" class="mx-2">
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
		</v-list>
	</v-navigation-drawer>

	<div class="bg-red-accent-2 w-100 h-100 pt-16">
		<div class="pt-16 w-75 mx-auto">
			<v-text-field
				v-model="taskName"
				label="Qual sua próxima tarefa?"
				variant="solo-filled"
				rounded="xl"
				append-inner-icon="mdi-calendar"
				@click:append-inner="showCalendar = !showCalendar"
				@keydown.enter="createTask"
			>
				<template #prepend-inner>
					<v-icon
						@click="isPurpleClicked = !isPurpleClicked"
						:color="isYellowClicked || isBlueClicked ? 'grey' : 'purple'"
						class="mx-1"
						size="medium"
						>mdi-circle</v-icon
					>
					<v-icon
						@click="isYellowClicked = !isYellowClicked"
						:color="isPurpleClicked || isBlueClicked ? 'grey' : 'yellow'"
						class="mx-1"
						size="medium"
						>mdi-circle</v-icon
					>
					<v-icon
						@click="isBlueClicked = !isBlueClicked"
						:color="isYellowClicked || isPurpleClicked ? 'grey' : 'blue'"
						class="mx-1 mr-6"
						size="medium"
						>mdi-circle</v-icon
					>
				</template>
			</v-text-field>
			<v-date-picker v-model="taskDate" v-if="showCalendar"></v-date-picker>
		</div>
	</div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';
import axios from 'axios';

export default {
	name: 'Dashboard',
	data() {
		return {
			current_user: '',
			isPurpleClicked: false,
			isYellowClicked: false,
			isBlueClicked: false,
			taskDate: new Date(),
			showCalendar: false,
			taskName: '',
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
	watch: {
		taskDate(newVal) {
			this.showCalendar = false;
		},
	},
	methods: {
		createTask() {
			let status = '';
			if (this.isPurpleClicked) {
				status = 'financeiro';
			} else if (this.isYellowClicked) {
				status = 'pessoal';
			} else if (this.isBlueClicked) {
				status = 'saude';
			}
			let tratarDate = this.taskDate.toISOString();

			const token = localStorage.getItem('access_token');

			axios
				.post(
					'http://localhost:3000/tasks',
					{
						name: this.taskName,
						status: status,
						deadline: tratarDate,
					},
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				.then((response) => {
					if (response.status === 201) {
						this.taskName = '';
						status = '';
						tratarDate = null;
					}
				})
				.catch((err) => {
					console.error('Erro no cadastro da task: ', err);
				});
		},
	},
};
</script>

<style></style>
