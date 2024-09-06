import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../../Assets/Css/Portfolio.css'
import HOC from '../HOC'
import { Link } from 'react-router-dom';
import { ProductList } from '../../ProductList';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Portfolio() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
  let cols = 3;
  if (mdScreen) { cols = 2; }
  if (smScreen) { cols = 1; }
  return (
    <div className="container-lg my-5">
      <Box>
        <ImageList variant="masonry" cols={cols} gap={20}>
          {ProductList.map((item, index) => (
            <ImageListItem key={item.img} className={`image-item item${index} paper-box`}>
              <Link to={'/'} className='text-decoration-none text-light text-center'>
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