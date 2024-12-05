import type { Meta, StoryFn } from '@storybook/vue3';
import ProductDetail from '@/components/molecules/ProductDetails.vue';

// Meta configuration
const meta: Meta<typeof ProductDetail> = {
  title: 'Molecules/ProductDetail',
  component: ProductDetail,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The ProductDetail component displays detailed information about a specific product, including its title, description, price, and rating.',
      },
    },
  },
};

export default meta;

// Mock product data
const mockProduct = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

// Default story for ProductDetail
export const Default: StoryFn<typeof ProductDetail> = (args) => ({
  components: { ProductDetail },
  setup() {
    return { args, mockProduct };
  },
  template: '<ProductDetail :product="mockProduct" />',
});
