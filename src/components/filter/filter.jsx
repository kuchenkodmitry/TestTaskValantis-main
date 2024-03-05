import { fetchPosts } from '../../redux/slices/posts';
import { useState } from 'react';
import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';


function Filter() {
  const [selected, setSelected] = useState('');
  const { id } = useParams()
  const Navigate = useNavigate()
  const currentPage = parseInt(id);
  const dispatch = useDispatch()
  const { fields } = useSelector(state => state.fields);
  const { posts } = useSelector(state => state.posts)
  const isLoading = fields.status == "loading"
  const isLoadingPosts = posts.status == "loading"

  function handleFiltred(typeFilter) {
    console.log(selected);
    dispatch(fetchPosts({ filter: true, type: typeFilter, value: selected, offset: 0, limit: (currentPage + 5) * 50 }))
  }

  function handleCleare() {
    dispatch(fetchPosts({ filter: false, offset: 0, limit: (currentPage + 5) * 50 }))
  }

  function handlePagination(pageNum) {
    if (pageNum == 'back' && id > 1) {
      pageNum = id - 1
      console.log(pageNum);
      Navigate(`/${pageNum}`)
    }
    if (pageNum == 'next' && id < posts.maxPage) {
      pageNum = Number(id) + 1
      console.log(pageNum);
      Navigate(`/${pageNum}`)
    }
  }

  return (
    <>
      <div className={style.filterBlock}>

        {/* {isLoadingPosts?  <CircularProgress/> : ''} */}
        <h3>Фильтрация по постам</h3>
        <form className={style.filterPost}>
          <div className={style.inputs}>
            <div className={style.lblinput}>
              <label>Название </label>
              <input type='text' onChange={(event) => setSelected(event.target.value)}
                style={{
                  width: "100px",
                  height: '20px'
                }} />
            </div>
            <div style={{
              cursor: "pointer",
              color: 'black',
              fontSize: "14px",
              padding: '5px 7px'
            }} onClick={() => {
              handleFiltred('product')
            }} className={style.submitBtn}>Поиск</div>
          </div>
          <div className={style.inputs}>
            <div className={style.lblinput}>
              <label>Цена :</label>
              <input
                onChange={(event) => setSelected(Number(event.target.value))}
                style={{
                  width: "120px",
                  height: '20px'
                }} type='number' />
            </div>
            <div style={{
              cursor: "pointer",
              color: 'black',
              fontSize: "14px",
              padding: '5px 7px'
            }} onClick={() => {
              handleFiltred('price')
            }} className={style.submitBtn}>Применить</div>
          </div>
          <div className={style.inputs}>
            <div className={style.lblinput}>
              <label>Бренд </label>
              <select value={selected} onChange={() => {
                handleFiltred('brand')
              }} style={{
                width: "130px"
              }}>
                {isLoading ? [...Array(5)].map((e, index) => {
                  return <option key={e}>element: {index}</option>
                }) : fields.items.map((el, index, self) => {
                  return <option onClick={event => setSelected(event.target.value)} key={el.value}> {el}</option>
                })}
              </select>
            </div>
            {/* <button className={style.submitBtn}>Применить</button> */}
          </div>
        </form>
        <div style={{
          cursor: "pointer",
          color: 'black',
          fontSize: "14px",
          padding: '5px 7px'
        }} onClick={() => {
          handleCleare()
        }} className={style.submitBtn}>Очистить фильтр</div>
        <div style={{
          display: 'flex',
          gap: "10px",
          color: "black"
        }}>
          <p onClick={() => {
            handlePagination('back')
          }} style={{
            cursor: "pointer",
            background: "white",
            padding: "2px 5px",
            borderRadius: "5px"
          }}>{"< Назад"}</p>
          <p onClick={() => {
            handlePagination('next')
          }} style={{
            cursor: "pointer",
            background: "white",
            padding: "2px 5px",
            borderRadius: "5px"
          }}>{"Вперед >"}</p>
        </div>
      </div>
    </>
  )
}

export default Filter