// src/ProductCard.js
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Favorite from '@mui/icons-material/Favorite';
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/joy/IconButton';

const ProductCard = ({ title, likes = 0, views = 0, imageUrl, imageAlt, description }) => {
  const [likesCount, setLikesCount] = React.useState(likes);
  const [viewsCount, setViewsCount] = React.useState(views);
  const navigate = useNavigate();

  const handleLikesClick = () => {
    setLikesCount((prevCount) => prevCount + 1);
  };

  const handleViewsClick = () => {
    setViewsCount((prevCount) => prevCount + 1);
  };

  const handleCardClick = () => {
    if (title === 'Instant ID') {
      navigate(`/product/${encodeURIComponent(title)}`, { state: { title, imageUrl, imageAlt, description, likes, views } });
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num;
  };

  const isVideo = imageUrl.endsWith('.mp4');

  return (
    <Card
      onClick={handleCardClick}
      variant="outlined"
      sx={(theme) => ({
        width: 300,
        gridColumn: 'span 2',
        flexDirection: 'row',
        flexWrap: 'wrap',
        resize: 'horizontal',
        overflow: 'hidden',
        gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
        transition: 'transform 0.3s, border 0.3s',
        '&:hover': {
          borderColor: theme.vars.palette.primary.outlinedHoverBorder,
          transform: title === 'Instant ID' ? 'scale(1.05)' : 'none', // Scale on hover only for Instant ID
        },
        '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
      })}
    >
      <Box sx={{ position: 'relative' }}>
        <AspectRatio ratio="4/3">
          <figure>
            {isVideo ? (
              <video
                src={imageUrl}
                controls
                loop
                muted
                autoPlay
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <img
                src={imageUrl}
                srcSet={`${imageUrl} 2x`}
                loading="lazy"
                alt={imageAlt}
              />
            )}
          </figure>
        </AspectRatio>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, px: 2 }}>
          {description}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', px: 2, mt: 2 }}>
        <Avatar
          src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
          size="sm"
          sx={{ '--Avatar-size': '1.5rem' }}
        />
        <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
          {title}
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={(e) => {
            e.stopPropagation();
            handleLikesClick();
          }}
          sx={{
            fontWeight: 'md',
            ml: 'auto',
            color: 'text.secondary',
            '&:hover': { color: 'danger.plainColor' },
            '& .MuiSvgIcon-root': {
              fontSize: '1.2rem',
            },
          }}
        >
          <Favorite />
          <Typography sx={{ ml: 0.5 }}>{formatNumber(likesCount)}</Typography>
        </IconButton>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={(e) => {
            e.stopPropagation();
            handleViewsClick();
          }}
          sx={{
            fontWeight: 'md',
            color: 'text.secondary',
            '&:hover': { color: 'primary.plainColor' },
            '& .MuiSvgIcon-root': {
              fontSize: '1.2rem',
            },
          }}
        >
          <Visibility />
          <Typography sx={{ ml: 0.5, mr: 2 }}>{formatNumber(viewsCount)}</Typography>
        </IconButton>
      </Box>
    </Card>
  );
};

export default ProductCard;
