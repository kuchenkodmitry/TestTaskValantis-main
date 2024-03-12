import * as React from 'react';
import Card from "@mui/material/Card"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function Variants() {
    return (
        <Card sx={{ maxWidth: 345, height: 472, position: "relative" }}>

            <Stack spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton sx={{ height: 140 }} animation="wave" variant="rectangular" />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton
                    animation="wave"
                    height={40}
                    width="90%"
                    style={{marginTop: 0,  marginLeft: 5 }}
                    sx={{margin: '0' , lineHeight: 0}}
                />
                <Skeleton
                    animation="wave"
                    height={40}
                    width="75%"
                    style={{marginTop: 0, marginLeft: 5 }}
                    sx={{margin: '0', letterSpacing: 0, lineHeight: 0}}
                />
                <Skeleton
                    animation="wave"
                    height={20}
                    width="75%"
                    style={{marginTop: 0, marginLeft: 5 }}
                    sx={{margin: '0', letterSpacing: 0, lineHeight: 0}}
                />
                <Skeleton
                    animation="wave"
                    height={20}
                    width="75%"
                    style={{marginTop: 0, marginLeft: 5 }}
                    sx={{margin: '0', letterSpacing: 0, lineHeight: 0}}
                />
                <Skeleton
                animation="wave"
                height={20}
                width="75%"
                style={{marginTop: 0, marginLeft: 5 }}
                sx={{margin: '0', letterSpacing: 0, lineHeight: 0}}
            />
            <CardActions>
        <Button sx={{position: 'absolute', bottom: 10, left: 10}} size="small">Добавить в корзину</Button>
      </CardActions>
            </Stack>
        </Card>
    );
}