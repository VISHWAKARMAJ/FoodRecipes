import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Recipes() {
  const [input, setInput] = useState([]);
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInput(data.meals));
  }, []);
  return (
    <div>
      <h1
        style={{ textAlign: "center", height: "45px", marginTop: "20px" }}
        className="bg-red-500 shadow-md border center rounded px-2"
      >
        here is more about Recipes
      </h1>
      {input.map((data)=>{
        return (
          <div>
             <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item><img src={data.strMealThumb}
                alt="foodImage"
              /></Item>
        </Grid>
        
      </Grid>
    </Box>
       {" "}
            </div>
        );
      })}
    </div>
  );
}
