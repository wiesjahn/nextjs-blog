import React from 'react'
import Image from 'next/image'
import {Container, Typography, Divider} from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


function SingleItem({title, deck, image, key}){

  return(
    <>
      <Container sx={{
        paddingLeft: "5%",
        paddingRight: "3%",
        paddingTop: "3%",
        paddingBottom: "3%",
        display: 'flex',
        }}>
          <Image src={image} width={256} height={256}  />
          <Container>
            <Typography variant='h3'>
                  {title}
            </Typography>
            <Typography variant='h6'>
                {deck}
            </Typography>
          </Container>
      </Container>
      <Divider />
    </>
  )
}



export default function index() {
  const deck = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh quam, elementum vel laoreet id, convallis non quam. Nam sit amet sapien et sem auctor finibus ut non dui. Mauris sollicitudin dolor at dui rutrum consectetur. Mauris venenatis sagittis lobortis. Curabitur suscipit quam eu finibus mattis. Nulla dignissim vestibulum quam vel molestie. Quisque suscipit ligula consectetur.'

  const title = "My Post Title"
  const image = "/nickavatar.jpg"

  const array=[];
  array.push({deck, title, image})
  array.push({deck, title, image})
  array.push({deck, title, image})
  array.push({deck, title, image})
  array.push({deck, title, image})
  return (
    <Container>
     {array.map((item)=>(
       <SingleItem title={item.title} deck={item.deck} image={item.image} />
     ))}
    </Container>  
  )
}
