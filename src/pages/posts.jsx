import style from './style.module.css'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Filter from '../components/filter/filter'
import PostsList from '../components/posts/postList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/slices/posts'
import { fetchFields } from '../redux/slices/fields'

function Posts() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const currentPage = parseInt(id);
    const { posts } = useSelector(state => state.posts)
    const { fields } = useSelector(state => state.fields);
    const isLoading = posts.status == "loading"

    React.useEffect(() => {
        dispatch(fetchPosts({ filter: false, offset: 0, limit: (currentPage + 5) * 50 }))
    }, [currentPage])

    React.useEffect(() => {
        dispatch(fetchFields({ field: 'brand' }))
    }, [])

    return (
        <div className={style.contentFlex}>
            <Filter />
            <PostsList />
        </div>
    )
}

export default Posts