<template>
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
						size="large"
						>mdi-circle</v-icon
					>
					<v-icon
						@click="isYellowClicked = !isYellowClicked"
						:color="isPurpleClicked || isBlueClicked ? 'grey' : 'yellow'"
						class="mx-1"
						size="large"
						>mdi-circle</v-icon
					>
					<v-icon
						@click="isBlueClicked = !isBlueClicked"
						:color="isYellowClicked || isPurpleClicked ? 'grey' : 'blue'"
						class="mx-1 mr-6"
						size="large"
						>mdi-circle</v-icon
					>
				</template>
			</v-text-field>
			<v-date-picker v-model="taskDate" v-if="showCalendar"></v-date-picker>
		</div>
		<div class="w-66 mx-auto mt-16">
			<v-card
				v-for="task in tasks"
				:key="task.id"
				class="d-flex align-center mt-6"
				height="60"
				rounded="xl"
			>
				<template v-slot:prepend
					><v-icon
						icon="mdi-circle"
						:color="
							task.status == 'pessoal'
								? 'yellow'
								: task.status == 'saude'
								? 'blue'
								: 'purple'
						"
					></v-icon
				></template>
				<v-card-title
					class="font-weight-regular text-h5"
					:class="{ 'text-decoration-line-through': task.checked }"
					>{{ task.name }}</v-card-title
				>
				<v-card-text
					class="mt-4 d-flex justify-end text-subtitle-1 font-weight-medium"
					>{{ formatDate(task.deadline) }}</v-card-text
				>
				<v-card-actions class="mt-5"
					><v-checkbox
						v-model="task.checked"
						@click="updateTask(task.id, task.checked)"
					></v-checkbox
				></v-card-actions>
			</v-card>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Dashboard',
	data() {
		return {
			isPurpleClicked: false,
			isYellowClicked: false,
			isBlueClicked: false,
			taskDate: new Date(),
			showCalendar: false,
			taskName: '',
			tasks: [],
			token: '',
			isTaskChecked: false,
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

			axios
				.post(
					'http://localhost:3000/tasks',
					{
						name: this.taskName,
						status: status,
						deadline: tratarDate,
						checked: false,
					},
					{
						headers: {
							Authorization: `Bearer ${this.token}`,
						},
					}
				)
				.then((response) => {
					if (response.status === 201) {
						this.taskName = '';
						status = '';
						tratarDate = null;
						this.fetchTask();
					}
				})
				.catch((err) => {
					console.error('Erro no cadastro da task: ', err);
				});
		},
		formatDate(dateString) {
			const date = new Date(dateString);
			const dia = String(date.getDate()).padStart(2, '0');
			const mes = String(date.getMonth() + 1).padStart(2, '0');
			const ano = String(date.getFullYear()).slice(2);
			return `${dia}/${mes}/${ano}`;
		},
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
		updateTask(taskId, checked) {
			const newChecked = !checked;
			axios
				.patch(
					`http://localhost:3000/tasks/${taskId}`,
					{ checked: newChecked },
					{
						headers: {
							Authorization: `Bearer ${this.token}`,
						},
					}
				)
				.then((response) => {
					console.log('cheguei aqui');
					this.fetchTask();
				})
				.catch((err) => {
					console.error('Erro na atualização da task: ', err);
				});
		},
	},
};
</script>

<style></style>
