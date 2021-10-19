import React,{Component} from 'react'
import Carousel from 'react-elastic-carousel'
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton"
import './bg.css'



const Coursal = () => {
  const item=[{id:1,title:"Massage & spa"},{id:2,title:"Beauty & salon"},{id:3,title:"Beauty & spa"},
  {id:4,title:"Massage & spa"},{id:5,title:"Beauty & salon"},{id:6,title:"Beauty & spa"},{id:7,title:"Massage & spa"}]
  const breakpoint=[{width:1,itemsToShow:1},{width:550,itemsToShow:2},{width:768,itemsToShow:3},{width:877,itemsToShow:4}
  ]
  const breakpoint1=[{width:1,itemsToShow:1},{width:1,itemsToShow:2}]
  return (
    <div>
    <div style={{margin:'100 0 0 0px'}}>
  <Carousel className='era' disableArrowsOnEnd>
    <div style={{height:'400px'}}>
    <h1 style={{marginTop:'120px'}}>Treat Yourself To A Revittalising Treatment</h1>
    <div style={{marginLeft:'35%'}}><TextField
    label="search"
     InputProps={{
      endAdornment: (
        <InputAdornment>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      )
    }}
  /></div>
  </div>
    
   
    </Carousel>
    
    </div>
      <Carousel breakPoints={breakpoint} style={{marginTop:'5px' ,color:'white',paddingTop:'10px',backgroundColor:'purple'}}>
      {item.map((ele)=> <div>{ele.title}</div>)}
      </Carousel>
    </div>
  )
}

export default Coursal
