import React from 'react'
import { Typography, Card, CardContent, Avatar } from '@mui/material'


export default function Hero() {
  return (
    <Card sx={{
      marginTop: '3%',
      marginBottom: '3%',
      marginLeft: 5,
      marginRight:5,
      backgroundColor: '#20b7f2'
      }}>
        <CardContent sx={{display:'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <Avatar src="/nickavatar.jpg" sx={{bgcolor: 'orange', width: 256, height: 256, margin: 5, alignSelf: 'center'}}/>
          <Typography variant='h3' align='center' sx={{color:'white'}}>
            My Name is Nick Wiesjahn
          </Typography>
          <Typography variant='h6' align='center' sx={{color:'white'}}>
            I am a Software Nerd who likes to do nerd things and learn how things work.
          </Typography>
        </CardContent>
    </Card>
  )
}
