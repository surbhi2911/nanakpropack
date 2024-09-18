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
import { ImageListItemBar } from '@mui/material';

function Portfolio() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
  let cols = 3;
  if (mdScreen) { cols = 2; }
  if (smScreen) { cols = 1; }

  return (
    <>
      <div className="portfolio">
        <PortfolioMain />
        <div className="container-lg my-5">
          <Box className='Masornyx'>
            <ImageList variant="masonry" cols={cols} className='overflow-hidden'>
              {ProductList.map((item, index) => (
                <ImageListItem
                  key={item.id}
                  data-aos='fade-up' data-aos-duration='1200'
                  className={`bg-light my-4 shadow`}
                >
                  <Link to={`/portfolio/${item.id}`} className='text-decoration-none text-light text-center'> {/* Link to product details */}
                    <div className="image-container">
                      <div className="overlay">
                        
                      </div>

                      <div style={{ background: `${item.bg}` }}>
                        <div className='imagesec'>
                          <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            className="rounded-0 p-3 h-100 image"
                          />
                        </div>
                      </div>
                      <ImageListItemBar position="below" className='text-dark py-2 px-5' title={item.heading2 + index} subtitle={item.Size} />
                    </div>
                  </Link>
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </div>
      </div>
    </>
  );
}

export default HOC(Portfolio);
