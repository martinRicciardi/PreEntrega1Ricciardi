import { ItemCount } from './ItemCount'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import '../styles/ItemDetail.css'

export const ItemDetail = ({ data }) => {
    return (
        <Card sx={{ 
            width: 900, 
            height: { xs: 1200, sm: 1200, md: 700, lg: 700, xl: 700 },
            boxShadow:10,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
            justifyContent: { xs: 'center', sm: 'center', md: 'space-between', lg: 'space-between', xl: 'space-between' },
            alignItems: { xs: 'center', sm: 'center', md: 'none' , lg: 'none' , xl: 'none' },
        }} key={data?.id}>
                <Box sx={{
                    width: { xs: '80%', sm: '55%', md: '55%', lg: '55%', xl: '55%' },
                    height: { xs: '70%', sm: '70%', md: '100%', lg: '100%', xl: '100%' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div>
                        <img src={data?.photo} alt={data?.name} />
                    </div>
                </Box>
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: { xs: '100%', sm: '100%', md: '45%', lg: '45%', xl: '45%' },
                    backgroundColor: '#eeeeee'
                }} >
                    <Box sx={{
                        height: { xs: '60vh', sm: '60vh', md: '60vh', lg: '65vh', xl: '65vh' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}>
                        <Typography sx={{ color:'#03a9f4' }} variant="h4">{data?.name}</Typography>
                        <Typography sx={{ fontSize: { xs: 15, sm: 15, md: 18, lg: 18, xl: 18 } }}>{data?.description}</Typography>
                        <Typography variant='h5'>Stock: {data?.stock}</Typography>
                        <Typography variant='h5'>USD {data?.price}</Typography>
                    </Box>
                        <ItemCount data={data} initial={1} stock={data?.stock}/> 
                </CardContent>
        </Card>
    )
}
