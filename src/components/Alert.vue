<template>
	<v-alert
		:type="type"
		:variant="variant"
		:title="title"
		:text="text"
	></v-alert>
</template>

<script>
export default {
	name: 'alertComponent',
	props: {
		type: String,
		variant: String,
		title: String,
		text: String,
	},
};
</script>

<style></style>
