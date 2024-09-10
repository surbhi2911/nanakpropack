
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom'; // Import Link
import '../../Assets/Css/Portfolio.css';
import HOC from '../HOC';
import { ProductList } from '../../ProductList';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PortfolioMain from './PortfolioMain';

function Portfolio() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
  let cols = 3;
  if (mdScreen) { cols = 2; }
  if (smScreen) { cols = 1; }

  return (
    <>
      <PortfolioMain />
      <div className="container-lg my-5">

        <Box>
          <ImageList variant="masonry" cols={cols} className='overflow-hidden'>
            {ProductList.map((item, index) => (
              <ImageListItem
                key={item.id}
                data-aos='fade-up' data-aos-duration='1200'
                className={`image-item item${index} paper-box border border-5 mx-2 border-dark border-top-5 border-bottom-0 border-start-0 border-end-0`}
              >
                <Link to={`/portfolio/${item.id}`} className='text-decoration-none text-light text-center'> {/* Link to product details */}
                  <div className="image-container">
                    <img
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                      className="image"
                    />
                    <div className="overlay xxxx">
                      <div className="text fs-4 border border-5 rounded-5 m-4 px-4 py-3 clickHover">
                        Click Here
                      </div>
                    </div>
                  </div>
                </Link>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </>
  );
}

export default HOC(Portfolio);