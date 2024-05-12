// src/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Autocomplete from '@mui/material/Autocomplete';

// Define a style object that will fix the size of the Box and constrain the image size
const imageBoxStyle = {
  width: '100%',
  height: 200, // Set the height according to your requirements
  borderRadius: '8px',
  overflow: 'hidden', // Hide the overflow content
  display: 'flex',
  justifyContent: 'center', // Center the image horizontally
  alignItems: 'center', // Center the image vertically
  border: '1px dashed grey'
};

// Apply the image style
const imageStyle = {
  maxWidth: '100%', 
  maxHeight: '100%',
  objectFit: 'contain' // Prevent image distortion
};

const usualStyles = [
  { label: 'Claude Monet'},
  { label: 'Leonardo da Vinci'},
  { label: 'TMichelangelo Buonarroti'},
  { label: 'Vincent van Gogh'},
  { label: 'Pablo Picasso'},
  { label: "Rembrandt van Rijn"},
  { label: 'Salvador Dalí'}
];

const ProductDetail = () => {
  useEffect(() => {
    document.title = "Instant ID"; // Setting the title dynamically
  }, []);

  const { state } = useLocation();
  const { title, imageUrl, imageAlt, description } = state || {};

  const [selectedImage, setSelectedImage] = useState(imageUrl);
  const [uploadedImage, setUploadedImage] = useState();
  const [prompt, setPrompt] = useState('');

  const thumbnails = [
    'https://jarvislabs.ai/_next/image?url=https%3A%2F%2Fjarvislabs.net%2Fjarvislabs_website%2Fworkflows%2Finstant-id%2Ferwin.avif&w=640&q=75',
    'https://jarvislabs.ai/_next/image?url=https%3A%2F%2Fjarvislabs.net%2Fjarvislabs_website%2Fworkflows%2Finstant-id%2Fsimple.avif&w=640&q=75',
    'https://jarvislabs.ai/_next/image?url=https%3A%2F%2Fjarvislabs.net%2Fjarvislabs_website%2Fworkflows%2Finstant-id%2Fzendaya.avif&w=640&q=75',
  ];

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleThumbnailClick = (url) => {
    setSelectedImage(url);
  };

  return (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Box sx={{ maxWidth: '60%', alignItems: 'top' }}>
        <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ mb: 3 }}>
          介绍
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {description}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          <Autocomplete
            disablePortal
            id="styles"
            options={usualStyles}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="艺术风格" />}
          />
          <TextField
            label="输入图片描述"
            variant="outlined"
            value={prompt}
            onChange={handlePromptChange}
            sx={{ bgcolor: '#fff', borderRadius: 1 }}
            fullWidth
          />
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              component="label"
              startIcon={<PhotoCamera />}
            >
              Upload Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Button>
          </Box>
          <Box sx={imageBoxStyle}>
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="uploaded"
                style={imageStyle}
              />
            ) : (
              <Typography variant="subtitle1" sx={{ color: 'grey.500' }}>
                Please upload an image.
              </Typography>
            )}
          </Box>
        </Box>

        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Run on Cloud
        </Button>
      </Box>

      <Box sx={{ width: '35%', bgcolor: '#333', p: 2, borderRadius: 1 }}>
        <Box component={selectedImage.endsWith('.mp4') ? 'video' : 'img'}
             src={selectedImage}
             alt={imageAlt}
             controls={selectedImage.endsWith('.mp4') ? true : undefined}
             loop={selectedImage.endsWith('.mp4') ? true : undefined}
             muted={selectedImage.endsWith('.mp4') ? true : undefined}
             autoPlay={selectedImage.endsWith('.mp4') ? true : undefined}
             sx={{ width: '100%', borderRadius: 1, mb: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2 }}>
          {thumbnails.map((thumbnail, index) => (
            <Box
              key={index}
              component="img"
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              sx={{ width: '30%', cursor: 'pointer', borderRadius: '8px' }}
              onClick={() => handleThumbnailClick(thumbnail)}
            />
          ))}
        </Box>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Download Workflow
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetail;