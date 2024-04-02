<template>
	<div class="h-100 w-100 bg-grey-lighten-5">
		<v-row class="d-flex align-center justify-center h-100 w-50 mx-auto">
			<v-col
				xl="6"
				lg="6"
				md="6"
				sm="12"
				xs="12"
				class="h-50 d-flex flex-column justify-center px-16 bg-white"
			>
				<div>
					<div class="d-flex align-center justify-space-between mb-6">
						<div class="text-h4 font-weight-thin">Login</div>
						<div>
							<v-hover v-slot="{ isHovering, props }">
								<v-icon
									:color="isHovering ? 'red-accent-2' : 'grey'"
									size="x-large"
									v-bind="props"
									>mdi-facebook</v-icon
								>
							</v-hover>
							<v-hover v-slot="{ isHovering, props }">
								<v-icon
									size="x-large"
									class="ml-2"
									v-bind="props"
									:color="isHovering ? 'red-accent-2' : 'grey'"
									>mdi-twitter</v-icon
								>
							</v-hover>
						</div>
					</div>
					<v-form class="d-flex aling-center flex-column"
						><v-text-field
							v-model="email"
							label="Email"
							prepend-inner-icon="mdi-email"
							variant="solo-filled"
							type="email"
							rounded="xl"
							flat
							:rules="[rules.required]"
						></v-text-field>
						<v-text-field
							v-model="password"
							label="Senha"
							prepend-inner-icon="mdi-lock-outline"
							variant="solo-filled"
							:append-inner-icon="marker ? 'mdi-eye-off' : 'mdi-eye'"
							@click:append-inner="toggleMarker"
							@keydown.enter="login"
							:type="marker ? 'password' : 'text'"
							rounded="xl"
							flat
							:rules="[rules.required]"
						></v-text-field>

						<v-btn
							v-bind="props"
							text="Login"
							class="font-weight-light py-7 d-flex aling-center text-subtitle-1"
							rounded="xl"
							color="red-accent-2"
							id="loginButton"
							@click="login"
						></v-btn>
					</v-form></div
			></v-col>
			<v-col
				xl="6"
				lg="6"
				md="6"
				sm="12"
				xs="12"
				class="bg-red-accent-2 h-50 d-flex align-center justify-center flex-column"
			>
				<div class="d-flex justify-center flex-column align-center">
					<h1 class="mb-4">Bem-vindo ao Login</h1>
					<h4 class="mb-3 font-weight-light">Não tem uma conta?</h4>
					<v-hover v-slot="{ isHovering, props }">
						<v-btn
							class="mt-2 py-6 d-flex align-center"
							v-bind="props"
							:variant="isHovering ? 'tonal' : 'outlined'"
							rounded="xl"
							:color="isHovering ? 'white' : 'white'"
							>Inscrever-se</v-btn
						>
					</v-hover>
				</div></v-col
			>
		</v-row>
	</div>

	<alertComponent
		v-model="isLogged"
		closable
		text="Credenciais incorretas"
		title="Erro"
		variant="tonal"
		type="error"
		border="top"
		width="400"
		class="botaoLogin"
	/>
</template>

<script>
import axios from 'axios';
import alertComponent from './Alert.vue';

export default {
	name: 'Login',
	data() {
		return {
			marker: true,
			email: '',
			password: '',
			isLogged: false,
			rules: {
				required: (value) => !!value || 'O campo é obrigatório',
			},
		};
	},
	components: {
		alertComponent,
	},
	methods: {
		toggleMarker() {
			this.marker = !this.marker;
		},
		login() {
			axios
				.post('http://localhost:3000/auth', {
					email: this.email,
					password: this.password,
				})
				.then((response) => {
					const accessToken = response.data.access_token;
					localStorage.setItem('access_token', accessToken);
					this.$router.push('/dashboard');
				})
				.catch((error) => {
					if (error.response && error.response.status === 401) {
						this.isLogged = true;
						setTimeout(() => {
							this.isLogged = false;
						}, 3000);
					}
				});
		},
	},
};
</script>

<style>
#loginButton:hover {
	animation: blink 0.2s linear !important;
}

@keyframes blink {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.botaoLogin {
	position: absolute;
	top: 0;
	transform: translate(-50%);
	left: 50%;
	margin-top: 10px;
}
</style>
