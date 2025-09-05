import CartProduct from '@/components/cartPage/CartProducts'
import Container from '@/components/header/Container'

const page = () => {
  return (
    <Container className="py-10">
        <CartProduct />
    </Container>
  )
}

export default page