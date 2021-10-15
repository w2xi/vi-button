<template>
	<button
		:class="['vi-button', this.className]"
	>
		<slot />
	</button>
</template>

<script>

const typeList = [
	'primary', 'info', 'warning', 'danger'
]

export default {
	props: {
		type: {
			type: String,
			default: '',
		},

		size: {
			type: String,
			default: 'large',
		},

		icon: {
			type: String,
		},
	},

	data(){
		return {
			className: 'primary'
		}
	},

	created(){
		if ( typeList.indexOf(this.type) !== -1  ){
			this.className = this.type
		}
	},

	methods: {
		
	},
}
</script>

<style lang="stylus" scoped>

.vi-button
	display: inline-block
	line-height: 1
	white-space: nowrap
	appearance: none
	font-size: 14px
	font-weight: 500
	text-align: center
	outline: none
	color: #606266
	background-color: #fff
	border: 1px solid #dcdfe6
	margin: 0
	padding: 12px 20px	
	border-radius: 4px
	box-sizing: border-box
	cursor: pointer
	transition: 0.1s

.vi-button:focus,
.vi-button:hover
	color: #409eff
	border-color: #c6e2ff
	background-color: #ecf5ff

</style>