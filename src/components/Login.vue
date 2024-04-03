<template>
	<div class="h-100 w-100 bg-grey-lighten-5">
		<v-row class="d-flex align-center justify-center h-100 w-50 mx-auto">
			<v-col
				xl="6"
				lg="6"
				md="6"
				sm="12"
				xs="12"
				class="h-50 d-flex flex-column justify-center px-16 bg-white card"
				:class="{ flipped: isFlipped }"
			>
				<div class="front">
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
					</v-form>
				</div>

				<div class="back w-75">
					<div class="text-h5 mb-4 font-weight-black text-center">CADASTRO</div>
					<v-form>
						<v-text-field
							v-model="user"
							label="Usuário"
							prepend-inner-icon="mdi-account"
							rounded="xl"
							variant="solo-filled"
							flat
							:rules="[rules.required]"
						></v-text-field>
						<v-text-field
							v-model="email"
							label="E-mail"
							prepend-inner-icon="mdi-email"
							rounded="xl"
							variant="solo-filled"
							flat
							:rules="[rules.required]"
						></v-text-field>
						<v-text-field
							v-model="password"
							label="Senha"
							prepend-inner-icon="mdi-lock-outline"
							rounded="xl"
							variant="solo-filled"
							flat
							:append-inner-icon="marker ? 'mdi-eye-off' : 'mdi-eye'"
							@click:append-inner="toggleMarker"
							:type="marker ? 'password' : 'text'"
							:rules="[rules.required]"
						></v-text-field>
						<v-checkbox :rules="[rules.required]"
							><template v-slot:label>
								<div>
									Eu li e aceito os
									<span
										@click="dialog = true"
										class="text-red-accent-2 text-decoration-underline font-weight-bold"
										>termos e condições</span
									>
								</div>
							</template></v-checkbox
						>

						<v-dialog v-model="dialog"
							><v-card
								class="mx-auto"
								max-width="500"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed semper odio, sed dictum nisi. Fusce pulvinar metus quis aliquet porta. Nulla non tellus laoreet velit malesuada maximus ut vitae lectus. Integer quis metus at leo tristique mattis ut non elit. Maecenas rutrum, ante non ullamcorper mollis, massa sapien semper neque, vel dictum augue lorem id tellus. Sed ultricies metus nec mollis vestibulum. Praesent feugiat at lacus quis laoreet. Nulla quis feugiat nulla. Aliquam hendrerit justo orci. Phasellus elementum aliquet quam, sed auctor lacus tristique quis. Etiam sit amet lobortis lacus. Cras ornare urna interdum gravida placerat. Donec blandit enim augue. Ut commodo tellus sit amet eros pharetra rutrum. Phasellus in libero id felis ornare posuere sed quis felis.

Donec elementum neque non ante mollis, non condimentum diam tempor. Praesent pellentesque vulputate nibh. Morbi eget lorem eros. Donec vitae condimentum nisi, vel tincidunt sapien. Pellentesque non neque mollis, placerat elit vel, commodo erat. Praesent ac tempor quam, et molestie arcu. Donec tincidunt felis mauris, et aliquet turpis laoreet id. Maecenas consectetur ac orci id vulputate.

Cras nec scelerisque est. Cras sit amet magna eleifend ipsum porttitor facilisis. Morbi dictum ac leo ut scelerisque. Aenean maximus auctor erat id blandit. Sed vitae odio urna. Quisque sit amet arcu nibh. Etiam sit amet libero at massa pellentesque ultricies. Suspendisse et metus a velit placerat pretium at nec nunc. Donec quis nulla vitae neque fermentum auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sollicitudin aliquet pharetra.

Pellentesque malesuada, felis eget euismod elementum, enim dolor posuere erat, ac feugiat purus diam ut libero. Sed in orci eleifend, aliquet ligula ac, pretium lorem. Integer at luctus risus, eget cursus ante. Nunc neque purus, tincidunt ut orci eget, tristique tincidunt ante. Nullam et sapien et orci malesuada ullamcorper in id arcu. Mauris quis sapien eget nisi tincidunt cursus. In interdum hendrerit elit ut malesuada. Vestibulum vel pharetra sem.

Praesent malesuada ex dignissim, maximus libero dignissim, dignissim nisl. Maecenas eu lacinia lectus. Proin ac purus faucibus, hendrerit turpis at, tristique ex. Ut pretium aliquam sem in rutrum. Integer in tortor nulla. Sed placerat, sapien at dapibus malesuada, mi metus mollis tortor, id interdum erat leo id orci. Maecenas hendrerit odio dui, at auctor diam porttitor nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque turpis nisl, varius eget pharetra ut, aliquam at ante. Duis sapien ipsum, semper id sapien a, tincidunt scelerisque odio. Nulla sit amet fermentum ex, id maximus purus. Integer sed ligula ac ex tempus imperdiet."
								><template v-slot:actions
									><v-btn
										@click="dialog = false"
										text="OK"
									></v-btn></template></v-card
						></v-dialog>

						<v-btn
							color="red-accent-2"
							type="submit"
							class="w-100"
							variant="tonal"
							@click="signUp"
							>Inscrever-se</v-btn
						>
					</v-form>
				</div>
			</v-col>
			<v-col
				xl="6"
				lg="6"
				md="6"
				sm="12"
				xs="12"
				class="bg-red-accent-2 h-50 d-flex align-center justify-center flex-column"
			>
				<div class="d-flex justify-center flex-column align-center">
					<h1 class="mb-4">Bem-vindo ao sistema</h1>
					<div clas="text-h4 font-weight-light mb-3">
						{{
							isFlipped ? 'Tem uma conta? Entre com ela!' : 'Não tem uma conta?'
						}}
					</div>
					<v-hover v-slot="{ isHovering, props }">
						<v-btn
							class="mt-2 py-6 d-flex align-center"
							v-bind="props"
							:variant="isHovering ? 'tonal' : 'outlined'"
							rounded="xl"
							:color="isHovering ? 'white' : 'white'"
							@click="flipCard"
							:text="isFlipped ? 'LOGIN' : 'INSCREVER-SE'"
						></v-btn>
					</v-hover></div
			></v-col>
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

	<alertComponent
		v-model="isCreated"
		closable
		text="Cadastro criado com sucesso!"
		title="Sucesso"
		variant="tonal"
		type="success"
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
			user: '',
			isLogged: false,
			isFlipped: false,
			dialog: false,
			isCreated: false,
			rules: {
				required: (value) => !!value || 'O campo é obrigatório',
			},
		};
	},
	components: {
		alertComponent,
	},
	methods: {
		flipCard() {
			this.isFlipped = !this.isFlipped;
		},
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
		signUp() {
			console.log('user: ', this.user);
			console.log('email: ', this.email);
			console.log('senha: ', this.password);
			axios
				.post('http://localhost:3000/users', {
					username: this.user,
					email: this.email,
					password: this.password,
				})
				.then((response) => {
					if (response.status === 201) {
						this.isCreated = true;
					}
				})
				.catch((err) => {
					console.error(err);
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

.card {
	transform-style: preserve-3d;
	transition: transform 0.5s;
	transform-style: rotateY(0deg);
	position: relative;
}

.flipped {
	transform: rotateY(180deg);
}

.front,
.back {
	backface-visibility: hidden;
}

.back {
	position: absolute;
	backface-visibility: hidden;
	transform: rotateY(180deg);
}
</style>
