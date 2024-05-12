// src/HomePage.js
import React from 'react';
import ProductCard from './ProductCard';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navigation from './Navigation';

const HomePage = () => {
  // Example product data
  const products = [
    {
      title: 'Instant ID',
      likes: 12,
      views: 20000,
      imageUrl: 'https://jarvislabs.ai/_next/image?url=https%3A%2F%2Fjarvislabs.net%2Fjarvislabs_website%2Fworkflows%2Finstant-id%2Fsimple.avif&w=640&q=75', // Updated image URL
      imageAlt: 'Instant ID',
      description: 'Easily create digital avatars in various styles.'
    },
    {
      title: 'vid2vid style transfer',
      likes: 5,
      views: 10400,
      imageUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Video URL
      imageAlt: 'Vid2Vid Style Transfer',
      description: 'High-quality video style transfer.'
    },
    {
      title: 'Style Logo Animation',
      likes: 5,
      views: 10400,
      imageUrl: 'https://images.unsplash.com/photo-1501577316686-a5cbf6c1df7e?auto=format&fit=crop&w=300',
      imageAlt: 'Style Logo Animation',
      description: 'Animated logo design services.'
    },
    {
      title: 'img2vid',
      likes: 5,
      views: 10400,
      imageUrl: 'https://www.w3schools.com/html/movie.mp4', // Updated to a video URL
      imageAlt: 'Img2Vid',
      description: 'Convert images to videos seamlessly.'
    },
    {
      title: 'AI Portrait Generator',
      likes: 8,
      views: 15000,
      imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300',
      imageAlt: 'AI Portrait Generator',
      description: 'Generate stunning AI portraits.'
    },
    {
      title: 'Text to Image',
      likes: 10,
      views: 18000,
      imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=300',
      imageAlt: 'Text to Image',
      description: 'Convert text prompts to images.'
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Navigation />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ mt: 3, mb: 2, textAlign: 'center', fontWeight: 'bold' }}
        >
          Hot Workflows
        </Typography>
        <Box 
          className="products" 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'flex-start', // Align items to the start of each row
            gap: 2
          }}
        >
          {products.map((product, index) => (
            <Box key={index} sx={{ flex: '1 1 calc(20% - 16px)', maxWidth: 'calc(20% - 16px)' }}>
              <ProductCard {...product} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
