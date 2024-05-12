// src/ProductDetail.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const ProductDetail = () => {
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
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#121212', color: '#fff', height: '100vh' }}>
      <Box sx={{ maxWidth: '60%' }}>
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Description
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          {description}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          <TextField
            label="Prompt"
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
            {uploadedImage && (
              <Box sx={{ mt: 2 }}>
                <img src={uploadedImage} alt="Selected" style={{ width: '100%', borderRadius: '8px' }} />
              </Box>
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
        <Typography variant="body2" sx={{ mb: 2 }}>
          Custom Nodes
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Models
        </Typography>
        <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
          Download Workflow
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetail;