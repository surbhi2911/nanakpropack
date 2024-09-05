import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../../Assets/Css/Portfolio.css'
import HOC from '../HOC'
import { Link } from 'react-router-dom';
import { ProductList } from '../../ProductList';


function Portfolio() {
  return (
    <div className="container my-5">
      <Box>
        <ImageList variant="masonry" cols={3} gap={10}>
          {ProductList.map((item, index) => (
            <ImageListItem key={item.img} className={`image-item item${index}`}>
              <Link to={'/'}>
                <div className="image-container">
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    className="image"
                  />
                  <div className="overlay">
                    <div className="text fs-6 border border-5 m-4 py-2">
                      {item.line}

                    </div>
                  </div>
                </div>
              </Link>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

export default HOC(Portfolio)