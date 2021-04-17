<template>
	<div class="p-3">
			<div class="mx-auto max-w-screen-lg">
				<h1>All Quotes</h1>
				<div class="py-4">
					<router-link 
						v-for="(quote, i) in $store.state.quotes"
						:key="quote._id"
						:to="`/quote/${quote._id}`">
						<div :class="`quote py-2 ${(i % 2 == 0 ? 'bg-gray-100' : '')}`">
							<p class="my-5 text-lg text-center text-gray-500">
								<span>"{{ quote.content }}"</span><br>
								<span class="text-gray-400">- {{ quote.author }}</span>
							</p>
						</div>
					</router-link>
				</div>
			</div>
	</div>
</template>