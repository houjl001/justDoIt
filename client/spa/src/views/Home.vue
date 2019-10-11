<template>
	<div class="home">
		<van-card num="999" price="2.00" desc="这里是描述信息" title="这里是商品标题" thumb="/static/taobao/001.jpg" />
		<van-card num="999" price="2.00" desc="这里是描述信息" title="这里是商品标题" thumb="/static/taobao/002.jpg" />
		<van-card num="999" price="2.00" desc="这里是描述信息" title="这里是商品标题" thumb="/static/taobao/003.jpg" />
		<van-card num="999" price="2.00" desc="这里是描述信息" title="这里是商品标题" thumb="/static/taobao/004.jpg" />
		<van-card num="999" price="2.00" desc="这里是描述信息" title="这里是商品标题" thumb="/static/taobao/005.jpg" />
		<van-card num="999" price="2.00" desc="这里是描述信息" title="这里是商品标题" thumb="/static/taobao/006.jpg" />
		<van-card num="999" price="2.00" desc="这里是描述信息" title="这里是商品标题" thumb="/static/taobao/007.jpg" />
	</div>

</template>

<script>
	// @ is an alias to /src
	import {
		Card
	} from 'vant';
	export default {
		name: "home",
		components: {
			"van-card": Card
		}
	};
</script>
<style lang="scss">
	.home {
		font-size: 16px;
	}

	.van-card__content {
		text-align: left;
	}
</style>
