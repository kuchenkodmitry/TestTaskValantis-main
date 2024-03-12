import s from "./style.module.css"
import { Button } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, deletProduct } from '../../redux/slices/product'


function Cart() {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.product)
    const isLoading = products.status == 'loading'

    return (
        <div className={s.cartBlockPosition}>
            <Typography variant="h4" gutterBottom>
                Корзина товаров:
            </Typography>
                {
                    isLoading ? <div className={s.aboutCart}>
                    <p>Количество товаров в корзине:<span className={s.fontCount}> {products.cart.addedProducts.reduce((sum, obj) => obj.count + sum, 0)} </span></p>
                    <p>Итоговая стоимость: <span className={s.fontCount}> {products.cart.result} </span></p>
                </div>: <div className={s.carBlock}>
                        <div className={s.aboutCart}>
                    <p>Количество товаров в корзине: <span className={s.fontCount}>{products.cart.addedProducts.reduce((sum, obj) => obj.count + sum, 0)}</span></p>
                    <p>Итоговая стоимость: <span className={s.fontCount}> {products.cart.result} </span></p>
                </div>
                        {products.cart.addedProducts.map((e, i) => {
                            return (
                                <Card className={s.productCard}>
                                    <img width={100} src={e.image} />
                                    <div>
                                        <p>Наименование: {e.title}</p>
                                        <div>
                                            Цена: {e.price} X {e.count} = {parseFloat(e.price * e.count).toFixed(2)}
                                        </div>
                                        <p style={{
                                            display: 'flex',
                                            gap: '10px',
                                            alignItems: "center"
                                        }}>
                                            Количество товара:
                                            <IconButton
                                                onClick={() => {
                                                    dispatch(increment(e.id))
                                                }}
                                                sx={{
                                                    border: '1px solid',
                                                    borderRadius: '5px',
                                                    padding: "0px 5px"
                                                }}>+</IconButton>
                                            {e.count}
                                            <IconButton
                                                onClick={() => {
                                                    dispatch(decrement(e.id))
                                                }}
                                                sx={{
                                                    border: '1px solid',
                                                    borderRadius: '5px',
                                                    padding: "0px 10px"
                                                }}>-</IconButton>
                                            <Button
                                                onClick={() => {
                                                    dispatch(deletProduct(e.id))
                                                }}
                                            >Удалить</Button>
                                        </p>
                                    </div>
                                </Card>
                            )
                        })}
            
                    </div>
                }
        </div>
    )
}

export default Cart