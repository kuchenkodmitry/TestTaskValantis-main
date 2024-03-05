import Card from './card'
import Sceleton from "./sceleton"
import style from "./style.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostsList() {
    const { posts } = useSelector(state => state.posts)
    const isLoading = posts.status == "loading"
    const { id } = useParams()
    const currentPage = parseInt(id);
    const pageNum = id - 1
    return (
        <div className={style.positionCard}>
            {isLoading ? [...Array(5)].map((e, i) => {
                return (<Sceleton key={i} />)
            }) : posts.items[pageNum] != undefined ? posts.items[pageNum].map((e, i) => {
                return (<Card key={i} brand={e.brand} id={e.id} price={e.price} product={e.product} />)
            }) : <h3>По вашему запросу ничего не найдено</h3>}
        </div>
    )
}

export default PostsList