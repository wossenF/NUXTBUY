import type { Meta, StoryObj } from '@storybook/vue3';
import { h } from 'vue';
import ProductDetail from '@/components/molecules/ProductDetails.vue';

const meta: Meta<typeof ProductDetail> = {
  title: 'Molecules/ProductDetail',
  component: ProductDetail,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story: 'The ProductDetail component displays detailed information about a specific product.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProductDetail>;

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

// Default ProductDetail story
export const Default: Story = {
  render: (args) => ({
    components: { ProductDetail },
    setup() {
      return { args };
    },
    render() {
      return h(ProductDetail, {
        product: mockProduct, // Pass mock data as the product prop
      });
    },
  }),
  args: {},
};