import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, deletProduct } from '../../redux/slices/product'
import s from './style.module.css'

function ResponsiveAppBar() {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.product)
    const isLoading = products.status == 'loading'
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const refPrice = React.useRef()



    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed">
            <Container maxWidth="xll">
                <Toolbar sx={{display: "flex" , justifyContent: "space-between"}} disableGutters>
                    <div style={{ display: 'flex', alignItems:"center"}}>
                    <ShoppingBasketIcon sx={{ fontSize: "35px", display: 'flex', mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Тестовое здание VK - React корзина
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            fontWeight: 600,
                            color: 'inherit',
                            textDecoration: 'none',
                            width: "15 0px"
                        }}
                    >
                        React корзина
                    </Typography>
                    </div>
                    <Box sx={{ borderRadius: 0, flexGrow: 0 }}>
                        <Tooltip title="Открыть корзину">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Typography sx={{ color: "white", padding: '0px 10px' }}>Корзина</Typography>
                                <AddShoppingCartIcon sx={{
                                    color: "white",
                                    fontSize: '40px'
                                }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <Typography >
                                <div className={s.aboutCart}>
                                    <p>Количество товаров в корзине: {products.cart.addedProducts.reduce((sum, obj) => obj.count + sum, 0)}</p>
                                    <p>Итоговая стоимость: {products.cart.result}</p>
                                </div>

                                {
                                    isLoading ? <div>{products.cart.length}</div> : <div className={s.cartBlock}>
                                        {products.cart.addedProducts.map((e, i) => {
                                            return (
                                                <div className={s.productCard}>
                                                    <img width={100} src={e.image} />
                                                    <div>
                                                        <p>Наименование: {e.title}</p>
                                                        <div ref={refPrice}>
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
                                                </div>
                                            )
                                        })}

                                    </div>
                                }
                            </Typography>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
