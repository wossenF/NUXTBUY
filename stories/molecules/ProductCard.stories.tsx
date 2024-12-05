import type { Meta, StoryObj } from '@storybook/vue3';
import ProductCard from '@/components/molecules/ProductCard.vue';
import AtomsText from '@/components/atoms/Text.vue';  // Make sure this is imported

const meta: Meta<typeof ProductCard> = {
  title: 'Molecules/ProductCard',
  tags: ['autodocs'],
  component: ProductCard,
  parameters: {
    docs: {
      description: {
        story: 'A single product card displaying the product image, title, price, and a "View Details" button.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/vozbZ65w0orSzAZ70ito0y/Untitled?node-id=14-54&node-type=symbol&t=kEcITIAfu4dvQhEo-0',
  },
  },
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

const mockProduct =  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
};
// Default ProductCard story with mocked data
export const Default: Story = {
  render: (args) => ({
    components: { ProductCard, AtomsText },
    setup() {
      return { args };
    },
    render() {
      return h(ProductCard, {
        product: mockProduct,
      });
    },
  }),
  args: {},
};
