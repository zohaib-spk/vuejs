var app = new Vue({
    el: '#app',
    data: {
        brand:'Mystery Vue',
        product: 'Socks',
        selectedVariant: 0,
        cart: 0,
        details: ['20& Cotton', '80% polyster', 'Gender-neutral'],
        variants: [
            {
                variantId: 1,
                inStock:true,
                variantColor: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpg'
            },
            {
                inStock : false,
                variantId: 2,
                variantColor: "blue",
                variantImage: './assets/blue.jpg'
            }
        ]
    },
    methods: {
        addToCart() {
            this.cart = this.cart + 1;
        },
        updateVariantImage(index) {
            this.selectedVariant = index;
        }

    },
    computed:{
        title()
        {
            return this.brand + ' ' + this.product;
        },
        inStock()
        {
            return this.variants[this.selectedVariant].inStock;
        },
        image()
        {
            return this.variants[this.selectedVariant].variantImage;
        }
    }
})
