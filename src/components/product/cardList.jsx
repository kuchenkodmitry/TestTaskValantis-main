import { Typography } from '@mui/material';
import Card from './card'
import s from './cardList.module.css'
import { useSelector } from "react-redux";
import Skeleton from './sceleton';

function CardList() {
    const { products } = useSelector(state => state.product)
    const isLoading = products.status == 'loading'

return (
        <div className={s.positonSection}>
            <Typography variant="h4" gutterBottom>
                Список товаров:
            </Typography>
        <div className={s.cardListSection}>
            {isLoading? [...Array(5)].map((e, i) => {
                return(
                <Skeleton/>
                )
            }) : products.items.map((el, i) => {
                return ( 
                <Card key={i} product={el}/>
                )
            })}
        </div>
        </div>
    )
}

export default CardList