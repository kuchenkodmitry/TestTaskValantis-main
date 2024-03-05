import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import style from './style.module.css';

export default function Variants() {
  return (
    <Stack className={style.cardBox} spacing={1}>
      <Skeleton variant="rectangular" width={150} height={15} />
      <Skeleton variant="rectangular" width={200} height={15} />
      <Skeleton variant="rectangular" width={175} height={15} />
      <br/>
      <br/>
      <br/>
      <Skeleton variant="rectangular" width={175} height={15} />
      <br/>
      <br/>
      <br/>
      <Skeleton variant="rectangular" width={175} height={15} />
      <br/>
      <br/>
      <br/>
      <Skeleton variant="rectangular" width={15} height={15} />
      <Skeleton variant="rectangular" width={150} height={15} />
      <Skeleton variant="rectangular" width={80} height={15} />
    </Stack>
  );
}