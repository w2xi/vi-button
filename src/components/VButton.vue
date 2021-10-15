<template>
	<button
		:class="['v-button', this.className]"
	>
		<slot />
	</button>
</template>

<script>

const typeList = [
	'primary', 'info', 'warning', 'danger', 'success'
]

const classPrifix = 'v-button--'

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

		plain: {
			type: Boolean,
			default: false,
		},

		round: {
			type: Boolean,
			default: false,
		},

		circle: {
			type: Boolean,
			default: false
		}
	},

	data(){
		return {
			className: classPrifix + 'default'
		}
	},

	created(){
		const classList = []

		if ( typeList.indexOf(this.type) !== -1  ){
			classList.push(classPrifix + this.type)
		}else{
			classList.push(this.className)
		}

		if ( this.plain ){
			classList.push('is-plain')
		}

		if ( this.round ){
			classList.push('is-round')
		} 

		if ( this.circle ){
			classList.push('is-circle')
		}

		this.className = classList.join(' ')

		console.log(this.className)
	},

	methods: {
		
	},
}
</script>

<style lang="stylus" scoped>

.v-button
	display: inline-block
	line-height: 1
	white-space: nowrap
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
	&:focus, &:hover 
		color: #409eff
		border-color: #c6e2ff
		background-color: #ecf5ff

.v-button--primary
	color: #fff
	background-color: #409eff
	border-color: #409eff
	&:focus, &:hover
		color: #fff
		background-color: #66b1ff
		border-color: #66b1ff

.v-button--success
	color: #fff
	background-color: #67c23a
	border-color: #67c23a
	&:focus, &:hover
		color: #fff
		background-color: #85ce61
		border-color: #85ce61

.v-button--info
	color: #fff
	background-color: #909399
	border-color: #909399
	&:focus, &:hover
		color: #fff
		background-color: #a6a9ad
		border-color: #a6a9ad

.v-button--warning
	color: #fff
	background-color: #e6a23c
	border-color: #e6a23c
	&:focus, &:hover
		color: #fff
		background-color: #ebb563
		border-color: #ebb563

.v-button--danger
	color: #fff
	background-color: #f56c6c
	border-color: #f56c6c
	&:focus, &:hover
		color: #fff
		background-color: #f78989
		border-color: #f78989

.v-button.is-plain:focus,
.v-button.is-plain:hover
	background-color: #fff
	border-color: #409eff
	color: #409eff

.v-button--primary.is-plain
	color: #409eff
	background: #ecf5ff
	border-color: #b3d8ff
	&:focus, &:hover
		background: #409eff
		border-color: #409eff
		color: #fff

.v-button--success.is-plain
	color: #67c23a
	background: #f0f9eb
	border-color: #c2e7b0
	&:focus, &:hover
		background: #67c23a
		border-color: #67c23a
		color: #fff

.v-button--info.is-plain
	color: #909399
	background: #f4f4f5
	border-color: #d3d4d6
	&:focus, &:hover
		background: #909399
		border-color: #909399
		color: #fff

.v-button--warning.is-plain
	color: #e6a23c
	background: #fdf6ec
	border-color: #f5dab1
	&:focus, &:hover
		background: #e6a23c
		border-color: #e6a23c
		color: #fff
		
.v-button--danger.is-plain
	color: #f56c6c
	background: #fef0f0
	border-color: #fbc4c4
	&:focus, &:hover
		background: #f56c6c
		border-color: #f56c6c
		color: #fff
</style>